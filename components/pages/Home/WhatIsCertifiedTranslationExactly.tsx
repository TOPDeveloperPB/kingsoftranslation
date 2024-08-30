import Image from "next/image";
import { Button, Text } from "@/components/core";
import certification from "@/public/images/certification.png";

export function WhatIsCertifiedTranslationExactly() {
  return (
    <div className="px-16 py-10 bg-ffffff rounded-[24px] grid gap-[56px] grid-cols-[1fr_auto] items-center">
      <div className="grid gap-6">
        <Text as="h3" variant="Heading/Heading-3">
          What is certified translation, exactly?
        </Text>
        <div className="grid gap-4">
          <Text variant="Paragraph/Paragraph-2">
            Certified translation involves transposing (or transforming) an
            official document – such as a passport or marriage certificate –
            from one language to another. Once a certificate or document is
            translated and meets professional linguistic and industry standards,
            it verified to confirm its integrity and its legality.
          </Text>
          <Text variant="Heading/Heading-5">
            Certified translation is a delicate process that requires niche
            skills and expertise.
          </Text>
        </div>
        <div className="grid grid-flow-col auto-cols-[175px] gap-4">
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
        className="w-[340px] aspect-square"
      />
    </div>
  );
}
