"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { MOCK_VALUES } from "./data";
import { Text } from "@/components/core";
import { ArrowDropDownIcon } from "@/public/icons";

export function OurCertifiedTranslationServiceValues() {
  const [expandedValueIndex, setExpandedValueIndex] = useState<
    number | undefined
  >(0);

  return (
    <div className="grid gap-6">
      <Text as="h2" variant="Heading/Heading-2">
        Our certified translation service <span>values</span>
      </Text>
      <div className="grid grid-cols-[644px_auto] gap-6">
        <div className="grid bg-ffffff rounded-[16px] p-6 gap-4 h-fit">
          <Text variant="Paragraph/Paragraph-2">
            At <span>Kings of Translation</span>, we are committed to managing
            every project with the <span>utmost care</span> and{" "}
            <span>professionalism</span>. We take an{" "}
            <span>individual approach</span> to each assignment, so once you’ve
            outlined your <span>requirements</span> and <span>preferences</span>
            , we will assign the <span>right translation expert</span> to manage
            your project and achieve the most
            <span>professional result</span>.
          </Text>
          <Text variant="Paragraph/Paragraph-2">
            The <span>collective expertise</span> of our translation team spans
            every industry and every niche, so we can guarantee a professional
            insight into every project. Our <span>specialized approach</span>{" "}
            drives everything we do.
          </Text>
          <Text variant="Paragraph/Paragraph-2">
            We work around the clock, seven days a week to deliver seamless
            results that are slick and compliant, and we have the versatility of
            expertise to apply regardless of the document or certificate you
            need us to translate.
          </Text>
          <Text variant="Heading/Heading-5">
            There is no one-size-fits-all mentality at Kings of Translation.
            Every project is tailored to the specific needs of our clients—and
            that’s a guarantee.
          </Text>
        </div>
        <div className="grid gap-4 content-start">
          <Text as="h4" variant="Heading/Heading-4">
            Our translation service is as easy as 1,2,3...
          </Text>
          {MOCK_VALUES.map(({ title, description }, index) => {
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
