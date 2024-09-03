import { Button, Text } from "@/components/core";
import { useHomeCtx } from ".";
import Link from "next/link";
import { storyblokEditable } from "@storyblok/react";

export function PartnershipButtons() {
  const data = useHomeCtx(),
    component = data.find((data) => data.component === "PartnershipButtons");

  if (!component) return <></>;

  const { main_button, secondary_button } = component;

  return (
    <div
      {...storyblokEditable(component)}
      className="grid grid-cols-[repeat(2,_350px)] justify-center gap-6"
    >
      <Link href={main_button.url}>
        <Button variant="filledBlack">
          <Text variant="Heading/Heading-6" className="text-ffffff">
            {main_button.title}
          </Text>
        </Button>
      </Link>
      <Link href={secondary_button.url}>
        <Button variant="outlinedBlack">
          <Text variant="Heading/Heading-6">{secondary_button.title}</Text>
        </Button>
      </Link>
    </div>
  );
}
