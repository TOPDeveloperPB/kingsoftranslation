import { Button, Text } from "@/components/core";

export function DidYouKnow() {
  return (
    <div className="bg-didYouKnow rounded-[40px] px-16 py-[72px] grid">
      <div className="grid gap-[42px] max-w-[464px]">
        <div className="grid gap-4">
          <Text as="h3" variant="Heading/Heading-3" className="text-ffffff">
            DID YOU KNOW?
          </Text>
          <Text
            variant="Paragraph/Paragraph-1"
            className="text-ffffff [&>span]:text-da5001"
          >
            Our certified language translations are a package deal,
            incorporating world-class translations and official document
            notarization, apostille or sworn translator certification service.
            Yes, we <span>do it all</span>.
          </Text>
        </div>
        <Button className="w-[143px]">Learn more</Button>
      </div>
    </div>
  );
}
