import { storyblokEditable } from "@storyblok/react";
import { useHomeCtx } from ".";
import { Text } from "@/components/core";
import { IStoryBlokComponent } from "@/types";

interface IOptionSB extends IStoryBlokComponent {
  title: string;
  component: string;
  description: string;
}

export function WhatMakesKingsOfTranslationTheBestChoice() {
  const data = useHomeCtx(),
    component = data.find(
      (data) => data.component === "WhatMakesKingsOfTranslationTheBestChoice"
    );

  if (!component) return <></>;

  const { options, title, description } = component;

  return (
    <div
      {...storyblokEditable(component)}
      className="p-[40px_64px] bg-ffffff rounded-[24px] grid grid-cols-[488px_456px] gap-[56px]"
    >
      <div className="grid gap-8">
        <Text
          as="h3"
          variant="Heading/Heading-3"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <Text
          variant="Paragraph/Paragraph-1"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <div className="grid grid-cols-2 gap-4 content-center">
        {(options as IOptionSB[]).map(({ title, description }) => (
          <div
            key={title}
            className="grid gap-1 p-[24px_32px] bg-f0f7f7 rounded-[16px] h-[121px]"
          >
            <Text className="text-589999" variant="Heading/Heading-3">
              {title}
            </Text>
            <Text variant="Paragraph/Paragraph-3" className="text-121212">
              {description}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}
