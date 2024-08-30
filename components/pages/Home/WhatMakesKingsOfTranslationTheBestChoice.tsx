import { Text } from "@/components/core";
import { MOCK_OPTIONS } from "./data";

export function WhatMakesKingsOfTranslationTheBestChoice() {
  return (
    <div className="p-[40px_64px] bg-ffffff rounded-[24px] grid grid-cols-[488px_456px] gap-[56px]">
      <div className="grid gap-8">
        <Text as="h3" variant="Heading/Heading-3">
          What makes Kings of Translation the <span>best choice</span>?
        </Text>
        <Text variant="Paragraph/Paragraph-1">
          Our extensive network of industry-leading linguists can translate your
          official certificates in over 120 different languages. As our global
          team is always available 24/7, we have the flexibility to guarantee
          fast delivery times, and our competitive rates make our services
          affordable to everyone.
        </Text>
      </div>
      <div className="grid grid-cols-2 gap-4 content-center">
        {MOCK_OPTIONS.map(({ value, description }) => (
          <div
            key={value}
            className="grid gap-1 p-[24px_32px] bg-f0f7f7 rounded-[16px] h-[121px]"
          >
            <Text className="text-589999" variant="Heading/Heading-3">
              {value}
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
