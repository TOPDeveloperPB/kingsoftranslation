import Image from "next/image";
import { useHomeCtx } from ".";
import { Button, Text } from "@/components/core";
import Link from "next/link";
import { storyblokEditable } from "@storyblok/react";

export function CertifiedDocumentTranslationServices() {
  const data = useHomeCtx(),
    component = data.find(
      (data) => data.component === "CertifiedDocumentTranslationServices"
    );

  if (!component) return <></>;

  const { title, description, image, main_button, secondary_button } =
    component;

  return (
    <div
      {...storyblokEditable(component)}
      className="grid grid-cols-[1fr_auto] gap-8 items-center"
    >
      <div className="grid gap-4">
        <Text
          variant="Heading/Heading-1"
          as="h1"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <Text
          variant="Paragraph/Paragraph-1"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="grid grid-flow-col auto-cols-[175px] items-center gap-4 justify-start">
          <Link href={main_button.url}>
            <Button>{main_button.title}</Button>
          </Link>
          <Link href={secondary_button.url}>
            <Button variant="outlined">{secondary_button.title}</Button>
          </Link>
        </div>
      </div>
      <Image
        priority
        src={image.filename}
        width={460}
        height={460}
        alt={image.alt ?? ""}
      />
    </div>
  );
}
