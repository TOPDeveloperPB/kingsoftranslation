import { Button, Text } from "@/components/core";
import { CheckCircleIcon } from "@/public/icons";
import { MOCK_TRANSLATION_SERVICES } from "./data";

export function TranslationServices() {
  return (
    <div className="grid gap-6 grid-cols-3">
      <div className="bg-services grid gap-4 p-6 content-start rounded-[24px]">
        <Text variant="Heading/Heading-3" className="text-ffffff">
          Translation Services
        </Text>
        <Text variant="Paragraph/Paragraph-2" className="text-ffffff">
          Certified and standard translation services are performed by the same
          professional translators, but the style of translation and
          deliverables vary between the services.
        </Text>
      </div>

      {MOCK_TRANSLATION_SERVICES.map(
        ({ title, description, price, per, style, format, options }) => (
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
            <Button>Start Your Order</Button>
          </div>
        )
      )}
    </div>
  );
}
