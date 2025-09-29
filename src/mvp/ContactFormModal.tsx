import { Modal, ModalBody, ModalContent, useDisclosure } from "@heroui/react";
import CtaButton from "./CtaButton";
import { ContactForm } from "./ContactForm";

export function ContactFormModal({
  children,
  color = "default",
}: {
  children?: string;
  color?: "default" | "inverted" | "outline";
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <CtaButton onClick={onOpen} color={color}>
        {children}
      </CtaButton>
      <Modal
        isOpen={isOpen}
        radius="none"
        size="5xl"
        onOpenChange={onOpenChange}
        hideCloseButton
        classNames={{
          footer: "p-0",
          body: "p-4 lg:p-11",
        }}
      >
        <ModalContent className="">
          {(onClose) => (
            <>
              <ModalBody className="flex items-center justify-between md:gap-20 lg:flex-row">
                <h1 className="heading text-primary text-left text-2xl lg:text-6xl">
                  Ready to <br className="hidden lg:block" /> launch faster?
                </h1>

                <ContactForm mode="modal" onClose={onClose} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
