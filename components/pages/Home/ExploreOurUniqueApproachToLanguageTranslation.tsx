import { Text } from "@/components/core";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { storyblokEditable } from "@storyblok/react";
import { useHomeCtx } from ".";
import translationManagementSystem from "@/public/images/translationManagementSystem.jpeg";
import authenticTranslationServices from "@/public/images/authenticTranslationServices.jpeg";
import translationServiceDeliveryTimes from "@/public/images/translationServiceDeliveryTimes.jpeg";
import languages from "@/public/images/languages.jpeg";
import {
  IStoryBlokAsset,
  IStoryBlokComponent,
  IStoryBlokComponentString,
  IStoryBlokLink,
} from "@/types";

interface ITranslationValueSB extends IStoryBlokComponent {
  link: IStoryBlokLink;
  name: string;
  image: IStoryBlokAsset;
  component: "Translation Value";
  description: IStoryBlokComponentString[];
}

const translationValuesIconsMap = new Map([
  ["Our translation management system (TMS)", translationManagementSystem],
  ["Our authentic translation services", authenticTranslationServices],
  ["24/7 translation service delivery times", translationServiceDeliveryTimes],
  ["120 languages", languages],
]);

export function ExploreOurUniqueApproachToLanguageTranslation() {
  const data = useHomeCtx(),
    component = data.find(
      (data) =>
        data.component === "ExploreOurUniqueApproachToLanguageTranslation"
    );

  if (!component) return <></>;

  const { title, description, translation_values } = component;
  console.log(translation_values);

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
        {(translation_values as ITranslationValueSB[]).map(
          ({ name, description, link }) => {
            const image = translationValuesIconsMap.get(name)!;
            return (
              <Link
                key={name}
                href={link.url}
                className="bg-f6f6f6 p-6 grid gap-4 content-start rounded-[24px] transition-all hover:opacity-95"
              >
                <Image
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  alt={name + " image"}
                  className="w-full h-[230px] rounded-[16px] object-cover"
                />
                <Text
                  as="h3"
                  variant="Heading/Heading-3"
                  className="text-da5001"
                >
                  {name}
                </Text>
                {description.map(({ value }, index) => (
                  <Text
                    key={index}
                    variant="Paragraph/Paragraph-2"
                    className="text-7e7e7e"
                  >
                    {value}
                  </Text>
                ))}
              </Link>
            );
          }
        )}
      </div>
    </div>
  );
}
