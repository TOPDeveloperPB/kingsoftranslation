import { Text } from "@/components/core";
import { MOCK_TRANSLATION_VALUES } from "./data";
import Image from "next/image";
import Link from "next/link";

export function ExploreOurUniqueApproachToLanguageTranslation() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-4">
        <Text as="h2" variant="Heading/Heading-2">
          <span>Explore</span> our unique approach
          <br />
          to language translation
        </Text>
        <Text variant="Paragraph/Paragraph-1">
          At Kings of Translation, we offer language services custom-made for
          the modern age.
          <br />
          Read about our unique methods and language translation values here:
        </Text>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {MOCK_TRANSLATION_VALUES.map(({ name, description, image, href }) => (
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
