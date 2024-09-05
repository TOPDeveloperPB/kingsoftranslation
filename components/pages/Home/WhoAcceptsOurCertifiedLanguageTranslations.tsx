import { useHomeCtx } from ".";
import Image from "next/image";
import { Text } from "@/components/core";
import { storyblokEditable } from "@storyblok/react";
import { IStoryBlokComponentStringWithImage } from "@/types";

export function WhoAcceptsOurCertifiedLanguageTranslations() {
  const data = useHomeCtx(),
    component = data.find(
      (data) => data.component === "WhoAcceptsOurCertifiedLanguageTranslations"
    );

  if (!component) return <></>;

  const { title, accepts } = component;

  return (
    <div {...storyblokEditable(component)} className="grid gap-6">
      <Text
        as="h2"
        variant="Heading/Heading-2"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className="grid grid-cols-5 gap-4">
        {(accepts as IStoryBlokComponentStringWithImage[]).map(
          ({ value, image }) => (
            <div
              key={value}
              className="bg-f6f6f6 p-4 grid gap-6 rounded-[16px] content-start"
            >
              <Image
                src={image.filename}
                alt={image.alt || `${value} icon`}
                width={0}
                height={0}
                className="w-12 aspect-square"
              />
              <Text variant="Paragraph/Paragraph-2">{value}</Text>
            </div>
          )
        )}
      </div>
    </div>
  );
}
