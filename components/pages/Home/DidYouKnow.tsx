import { Button, Text } from "@/components/core";
import { useHomeCtx } from ".";
import Link from "next/link";
import { storyblokEditable } from "@storyblok/react";

export function DidYouKnow() {
  const data = useHomeCtx(),
    component = data.find((data) => data.component === "DidYouKnow");

  if (!component) return <></>;

  const { title, description, link } = component;

  return (
    <div
      {...storyblokEditable(component)}
      className="bg-didYouKnow rounded-[40px] px-16 py-[72px] grid"
    >
      <div className="grid gap-[42px] max-w-[464px]">
        <div className="grid gap-4">
          <Text
            as="h3"
            variant="Heading/Heading-3"
            className="text-ffffff"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <Text
            variant="Paragraph/Paragraph-1"
            className="text-ffffff [&>span]:text-da5001"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <Link href={link.url}>
          <Button className="w-[143px]">{link.title}</Button>
        </Link>
      </div>
    </div>
  );
}
