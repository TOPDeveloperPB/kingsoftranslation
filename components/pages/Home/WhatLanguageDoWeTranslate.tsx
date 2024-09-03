"use client";
import Image from "next/image";
import { useState } from "react";
import { ArrowSwapIcon } from "@/public/icons";
import { Button, Select, Text } from "@/components/core";
import { languagesMap } from "@/lib/const";
import { useHomeCtx } from ".";
import Link from "next/link";
import { storyblokEditable } from "@storyblok/react";

interface LanguagePair {
  first?: string;
  second?: string;
}

export function WhatLanguageDoWeTranslate() {
  const data = useHomeCtx(),
    component = data.find(
      (data) => data.component === "WhatLanguageDoWeTranslate"
    );
  const [languages, setLanguages] = useState<LanguagePair>();

  const handleLanguageChange = (name: keyof LanguagePair, value: string) =>
    setLanguages((prev) => ({ ...prev, [name]: value }));

  const handleSwap = () =>
    setLanguages((prev) => ({ first: prev?.second, second: prev?.first }));

  const areBothLanguagesSelected = !!languages?.first && !!languages.second;

  if (!component) return <></>;

  const { title, description, image, success, main_button, secondary_button } =
    component;

  const successWithValues = success
    .replace("{languages.first}", languages?.first)
    .replace("{languages.second}", languages?.second);

  return (
    <div
      {...storyblokEditable(component)}
      className="px-16 py-10 bg-ffffff rounded-[24px] grid gap-10"
    >
      <Text
        as="h3"
        variant="Heading/Heading-3"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className="grid gap-[37px] grid-cols-[auto_1fr] items-center">
        <Image
          priority
          alt={image.alt ?? "languages"}
          src={image.filename}
          width={355}
          height={320}
        />
        <div className="grid gap-8">
          <div className="grid gap-4">
            <Text
              variant="Paragraph/Paragraph-1"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <div className="grid grid-cols-[1fr_auto_1fr] gap-[13px]">
              <Select
                value={languages?.first}
                options={Array.from(languagesMap.values())}
                onChange={(value) => handleLanguageChange("first", value)}
              />
              <button
                onClick={handleSwap}
                className="p-4 bg-f6f6f6 hover:bg-[#fff5f0] rounded-[6px] transition-all"
              >
                <ArrowSwapIcon />
              </button>
              <Select
                value={languages?.second}
                options={Array.from(languagesMap.values())}
                onChange={(value) => handleLanguageChange("second", value)}
              />
            </div>
            {areBothLanguagesSelected && (
              <Text variant="Heading/Heading-5" className="text-589999">
                {successWithValues}
              </Text>
            )}
          </div>
          {areBothLanguagesSelected && (
            <div className="grid grid-flow-col auto-cols-[175px] gap-4">
              <Link href={main_button.url}>
                <Button>{main_button.title}</Button>
              </Link>
              <Link href={secondary_button.url}>
                <Button variant="outlined">{secondary_button.title}</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
