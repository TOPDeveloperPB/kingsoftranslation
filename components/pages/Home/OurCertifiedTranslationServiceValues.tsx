"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Text } from "@/components/core";
import { ArrowDropDownIcon } from "@/public/icons";
import { useHomeCtx } from ".";
import { storyblokEditable } from "@storyblok/react";

export function OurCertifiedTranslationServiceValues() {
  const data = useHomeCtx(),
    component = data.find(
      (data) => data.component === "OurCertifiedTranslationServiceValues"
    );

  const [expandedValueIndex, setExpandedValueIndex] = useState<
    number | undefined
  >(0);

  if (!component) return <></>;

  const {
    title,
    paragraph_first,
    paragraph_second,
    paragraph_third,
    remark,
    values_title,
    values,
  } = component;

  const parsedValues: {
    title: string;
    description: string;
  }[] = values.tbody.reduce(
    (prev: any[], { body }: { body: { value: string }[] }) => {
      prev.push({
        title: body[0].value,
        description: body[1].value,
      });
      return prev;
    },
    []
  );

  return (
    <div {...storyblokEditable(component)} className="grid gap-6">
      <Text
        as="h2"
        variant="Heading/Heading-2"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className="grid grid-cols-[644px_auto] gap-6">
        <div className="grid bg-ffffff rounded-[16px] p-6 gap-4 h-fit">
          <Text
            variant="Paragraph/Paragraph-2"
            dangerouslySetInnerHTML={{ __html: paragraph_first }}
          />
          <Text
            variant="Paragraph/Paragraph-2"
            dangerouslySetInnerHTML={{ __html: paragraph_second }}
          />
          <Text
            variant="Paragraph/Paragraph-2"
            dangerouslySetInnerHTML={{ __html: paragraph_third }}
          />
          <Text
            variant="Heading/Heading-5"
            dangerouslySetInnerHTML={{ __html: remark }}
          />
        </div>
        <div className="grid gap-4 content-start">
          <Text
            as="h4"
            variant="Heading/Heading-4"
            dangerouslySetInnerHTML={{ __html: values_title }}
          />
          {parsedValues.map(({ title, description }, index) => {
            const isExpanded = index === expandedValueIndex;
            const handleExpand = () =>
              isExpanded
                ? setExpandedValueIndex(undefined)
                : setExpandedValueIndex(index);

            return (
              <div
                key={index}
                onClick={handleExpand}
                className={cn(
                  "grid gap-0 grid-rows-[auto_0fr] bg-f6f6f6 cursor-pointer p-6 transition-all rounded-[16px]",
                  isExpanded && "bg-[#fff5f0] gap-4 grid-rows-[auto_1fr]"
                )}
              >
                <div className={cn("grid gap-2 grid-cols-[auto_1fr]")}>
                  <div
                    className={cn(
                      "transition-colors w-6 aspect-square text-center bg-[#121212] text-ffffff rounded-full",
                      isExpanded && "bg-da5001"
                    )}
                  >
                    {index + 1}
                  </div>
                  <Text
                    variant="Heading/Heading-5"
                    className={cn(
                      "transition-colors grid grid-flow-col justify-between",
                      isExpanded && "text-da5001"
                    )}
                  >
                    {title}
                    <ArrowDropDownIcon
                      className={cn(
                        " transition-transform",
                        isExpanded && "-scale-100"
                      )}
                    />
                  </Text>
                </div>
                <Text
                  className=" overflow-hidden"
                  variant="Paragraph/Paragraph-2"
                >
                  {description}
                </Text>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
