import { format } from "date-fns";
import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";

const scopes = [
  "https://www.googleapis.com/auth/spreadsheets",
  "https://www.googleapis.com/auth/drive.file",
];

async function contactsSheet() {
  const jwt = new JWT({
    key: import.meta.env.GOOGLE_API_PRIVATE_KEY.replace(/\\n/g, "\n"),
    email: import.meta.env.GOOGLE_API_CLIENT_EMAIL,
    scopes,
  });

  const doc = new GoogleSpreadsheet(import.meta.env.GOOGLE_SHEETS_DOC_ID, jwt);

  await doc.loadInfo();

  let sheet = doc.sheetsByTitle?.["Contact Requests"];

  if (!sheet) {
    sheet = await doc.addSheet({ title: "Contact Requests" });

    await sheet.updateProperties({ title: "Contact Requests" });

    await sheet.setHeaderRow([
      "Name",
      "Email",
      "Project Description",
      "Project Type",
      "Created At",
    ]);
  }

  return sheet;
}

type ContactRowData = {
  Name: string;
  Email: string;
  "Project Description": string;
  "Project Type": string;
};

export async function addContactRequest(data: ContactRowData) {
  try {
    const sheet = await contactsSheet();

    await sheet.addRow({
      ...data,
      "Created At": format(new Date(), "yyyy-MM-dd HH:mm:ss"),
    });

    return data;
  } catch (e) {
    console.error("Error adding contact request:", e);
    throw e;
  }
}
