"use client";
import Link from "next/link";
import { useHomeCtx } from ".";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { countries } from "country-flags-svg";
import { ArrowSwapIcon } from "@/public/icons";
import { storyblokEditable } from "@storyblok/react";
import { Button, Select, Text } from "@/components/core";

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

  const handleSwap = () =>
    setLanguages((prev) => ({ first: prev?.second, second: prev?.first }));

  const areBothLanguagesSelected = !!languages?.first && !!languages.second;

  if (!component) return <></>;

  const {
    title,
    description,
    image,
    success,
    same_language,
    main_button,
    secondary_button,
  } = component;

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
                options={countries.map(({ demonym }) => demonym)}
                renderer={(option) => {
                  return (
                    <div
                      key={option}
                      className={cn(
                        "p-[5px_10px] cursor-pointer rounded-[6px] grid grid-flow-col justify-start gap-2.5 items-center transition-colors hover:bg-[#FFF5F0] hover:text-da5001",
                        option === languages?.first &&
                          "bg-[#ddd] hover:bg-[#FFF5F0] hover:text-da5001"
                      )}
                      onClick={() =>
                        setLanguages((prev) => ({ ...prev, first: option }))
                      }
                    >
                      <Image
                        src={
                          countries.find(({ demonym }) => demonym === option)
                            ?.flag || ""
                        }
                        alt={`${option} flag`}
                        width={11}
                        height={16}
                      />
                      <Text
                        variant="Paragraph/Paragraph-2"
                        className="text-inherit"
                      >
                        {option}
                      </Text>
                    </div>
                  );
                }}
              />
              <button
                onClick={handleSwap}
                className="p-4 bg-f6f6f6 hover:bg-[#fff5f0] rounded-[6px] transition-all"
              >
                <ArrowSwapIcon />
              </button>
              <Select
                value={languages?.second}
                options={countries.map(({ demonym }) => demonym)}
                renderer={(option) => {
                  return (
                    <div
                      key={option}
                      className={cn(
                        "p-[5px_10px] cursor-pointer rounded-[6px] grid grid-flow-col justify-start gap-2.5 items-center transition-colors hover:bg-[#FFF5F0] hover:text-da5001",
                        option === languages?.second &&
                          "bg-[#ddd] hover:bg-[#FFF5F0] hover:text-da5001"
                      )}
                      onClick={() =>
                        setLanguages((prev) => ({ ...prev, second: option }))
                      }
                    >
                      <Image
                        src={
                          countries.find(({ demonym }) => demonym === option)
                            ?.flag || ""
                        }
                        alt={`${option} flag`}
                        width={11}
                        height={16}
                      />
                      <Text
                        variant="Paragraph/Paragraph-2"
                        className="text-inherit"
                      >
                        {option}
                      </Text>
                    </div>
                  );
                }}
              />
            </div>
            {areBothLanguagesSelected && (
              <Text variant="Heading/Heading-5" className="text-589999">
                {languages.first === languages.second
                  ? same_language
                  : successWithValues}
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
