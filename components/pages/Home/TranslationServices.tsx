import Link from "next/link";
import { useHomeCtx } from ".";
import { Button, Text } from "@/components/core";
import { CheckCircleIcon } from "@/public/icons";
import { storyblokEditable } from "@storyblok/react";

export function TranslationServices() {
  const data = useHomeCtx(),
    component = data.find((data) => data.component === "TranslationServices");

  if (!component) return <></>;

  const { title, description, translation_services } = component;

  const parsedTranslationServices: {
    title: string;
    description: string;
    price: string;
    per: string;
    style: string;
    format: string;
    options: string[];
    href: string;
  }[] = translation_services.tbody.reduce(
    (prev: any[], { body }: { body: { value: string }[] }) => {
      prev.push({
        title: body[0].value,
        description: body[1].value,
        price: body[2].value,
        per: body[3].value,
        style: body[4].value,
        format: body[5].value,
        options: body[6].value.split("##-##"),
        href: body[7].value,
      });
      return prev;
    },
    []
  );

  return (
    <div {...storyblokEditable(component)} className="grid gap-6 grid-cols-3">
      <div className="bg-services grid gap-4 p-6 content-start rounded-[24px]">
        <Text
          variant="Heading/Heading-3"
          className="text-ffffff"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <Text
          variant="Paragraph/Paragraph-2"
          className="text-ffffff"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      {parsedTranslationServices.map(
        ({ title, description, price, per, style, format, options, href }) => (
          <div
            key={title}
            className="grid p-6 gap-4 grid-rows-[1fr_auto] bg-ffffff rounded-[24px]"
          >
            <div className="grid gap-4 content-start">
              <div className="grid gap-2 pb-4 border-b border-dadada">
                <Text variant="Heading/Heading-4" className="text-da5001">
                  {title}
                </Text>
                <div className="flex items-end">
                  <Text variant="Heading/Heading-3">${price}</Text>
                  <Text variant="Paragraph/Paragraph-2" className="text-7e7e7e">
                    /{per}
                  </Text>
                </div>
                <Text variant="Paragraph/Paragraph-2" className="text-7e7e7e">
                  {description}
                </Text>
              </div>
              <div className="grid gap-4 pb-4 border-b border-dadada">
                <div className="grid grid-flow-col justify-between items-center">
                  <Text variant="Paragraph/Paragraph-2" className="text-7e7e7e">
                    Translation Style
                  </Text>
                  <Text variant="Paragraph/Paragraph-2">{style}</Text>
                </div>
                <div className="grid grid-flow-col justify-between items-center">
                  <Text variant="Paragraph/Paragraph-2" className="text-7e7e7e">
                    Delivery Format
                  </Text>
                  <div className="flex gap-2">
                    <Text variant="Paragraph/Paragraph-2">{format}</Text>
                    <Text className="bg-[#F0F7F7] text-589999 px-2 rounded-full text-center">
                      +8
                    </Text>
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                {options.map((option) => (
                  <div key={option} className="flex gap-2 items-center">
                    <CheckCircleIcon />
                    <Text>{option}</Text>
                  </div>
                ))}
              </div>
            </div>
            <Link href={href}>
              <Button>Start Your Order</Button>
            </Link>
          </div>
        )
      )}
    </div>
  );
}
