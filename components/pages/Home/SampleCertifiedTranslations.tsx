import { Text } from "@/components/core";
import { useHomeCtx } from ".";
import { storyblokEditable } from "@storyblok/react";

export function SampleCertifiedTranslations() {
  const data = useHomeCtx(),
    component = data.find(
      (data) => data.component === "SampleCertifiedTranslations"
    );

  if (!component) return <></>;

  const { title, description, samples } = component;

  const parsedLanguages: string[] = samples.tbody.reduce(
    (prev: any[], { body }: { body: { value: string }[] }) => {
      prev.push(body[0].value);
      return prev;
    },
    []
  );
  return (
    <div
      {...storyblokEditable(component)}
      className="bg-[#F0F7F7] grid gap-[56px] grid-cols-[372px_1fr] px-16 py-10 rounded-[24px]"
    >
      <div className="grid gap-6 content-start">
        <Text
          as="h3"
          variant="Heading/Heading-3"
          className="[&>span]:text-da5001"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <Text
          variant="Paragraph/Paragraph-1"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {parsedLanguages.map((sample) => (
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
