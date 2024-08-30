import Image from "next/image";
import { Button, Text } from "@/components/core";
import certification from "@/public/images/certification.png";

export function CertifiedDocumentTranslationServices() {
  return (
    <div className="grid grid-cols-[1fr_auto] gap-8 items-center">
      <div className="grid gap-4">
        <Text variant="Heading/Heading-1" as="h1">
          CERTIFIED DOCUMENT TRANSLATION <span>SERVICES</span>
        </Text>
        <Text variant="Paragraph/Paragraph-1">
          Your official documents – diplomas, passports, marriage, birth, and
          death certificates – are extremely important forms of identification.
          If you are looking for a translation of one of these certified
          documents, contact us, so we can ensure that the translation is
          completed professionally, and the translated version has the same
          authenticity as the original. You can trust our team to take care of
          your precious official documents, so you can have them available and
          accurate when required.
        </Text>
        <div className="grid grid-flow-col auto-cols-[175px] items-center gap-4 justify-start">
          <Button>Get a Free Quote</Button>
          <Button variant="outlined">Order Now</Button>
        </div>
      </div>
      <Image
        priority
        alt="certification"
        src={certification.src}
        width={certification.width}
        height={certification.height}
        className="w-[460px] aspect-square"
      />
    </div>
  );
}
