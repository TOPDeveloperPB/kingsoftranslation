import { Text } from "@/components/core";
import { MOCK_SAMPLES } from "./data";

export function SampleCertifiedTranslations() {
  return (
    <div className="bg-[#F0F7F7] grid gap-[56px] grid-cols-[372px_1fr] px-16 py-10">
      <div className="grid gap-6 content-start">
        <Text
          as="h3"
          variant="Heading/Heading-3"
          className="[&>span]:text-da5001"
        >
          <span>Sample</span> Certified Translations
        </Text>
        <Text variant="Paragraph/Paragraph-1">
          The digital cpy of your translation will be delivered as a PDF and
          have a similar format to your source document, but we don’t replicate
          the design.
        </Text>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {MOCK_SAMPLES.map((sample) => (
          <div key={sample} className="grid gap-2 ">
            <div className="border border-[#C0E3E3] bg-ffffff h-[254px] rounded-[16px]" />
            <Text className="pl-2" variant="Heading/Heading-5">
              {sample}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}
