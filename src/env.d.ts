interface ImportMetaEnv {
  readonly GOOGLE_API_PRIVATE_KEY: string;
  readonly GOOGLE_API_CLIENT_EMAIL: string;
  readonly GOOGLE_SHEETS_DOC_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
