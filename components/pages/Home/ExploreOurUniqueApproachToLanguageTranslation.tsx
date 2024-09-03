import { Text } from "@/components/core";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { storyblokEditable } from "@storyblok/react";
import { useHomeCtx } from ".";
import translationManagementSystem from "@/public/images/translationManagementSystem.jpeg";
import authenticTranslationServices from "@/public/images/authenticTranslationServices.jpeg";
import translationServiceDeliveryTimes from "@/public/images/translationServiceDeliveryTimes.jpeg";
import languages from "@/public/images/languages.jpeg";

const translationValuesIconsMap = new Map([
  ["translationManagementSystem", translationManagementSystem],
  ["authenticTranslationServices", authenticTranslationServices],
  ["translationServiceDeliveryTimes", translationServiceDeliveryTimes],
  ["languages", languages],
]);

export function ExploreOurUniqueApproachToLanguageTranslation() {
  const data = useHomeCtx(),
    component = data.find(
      (data) =>
        data.component === "ExploreOurUniqueApproachToLanguageTranslation"
    );

  if (!component) return <></>;

  const { title, description, translation_values } = component;

  const parsedTranslationValues: {
    name: string;
    description: string[];
    image: StaticImageData;
    href: string;
  }[] = translation_values.tbody.reduce(
    (prev: any[], { body }: { body: { value: string }[] }) => {
      prev.push({
        name: body[0].value,
        description: body[1].value.split("##-##"),
        image: translationValuesIconsMap.get(body[2].value),
        href: body[3].value,
      });
      return prev;
    },
    []
  );

  return (
    <div {...storyblokEditable(component)} className="grid gap-6">
      <div className="grid gap-4">
        <Text
          as="h2"
          variant="Heading/Heading-2"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <Text
          variant="Paragraph/Paragraph-1"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <div className="grid grid-cols-2 gap-6">
        {parsedTranslationValues.map(({ name, description, image, href }) => (
          <Link
            key={name}
            href={href}
            className="bg-f6f6f6 p-6 grid gap-4 content-start rounded-[24px] transition-all hover:opacity-95"
          >
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt={name + " image"}
              className="w-full h-[230px] rounded-[16px] object-cover"
            />
            <Text as="h3" variant="Heading/Heading-3" className="text-da5001">
              {name}
            </Text>
            {description.map((descriptionItem, index) => (
              <Text
                key={index}
                variant="Paragraph/Paragraph-2"
                className="text-7e7e7e"
              >
                {descriptionItem}
              </Text>
            ))}
          </Link>
        ))}
      </div>
    </div>
  );
}
