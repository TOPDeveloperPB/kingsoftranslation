"use client";
import Image from "next/image";
import { useState } from "react";
import { ArrowSwapIcon } from "@/public/icons";
import { Button, Select, Text } from "@/components/core";
import languagesImage from "@/public/images/languages.png";
import { languagesMap } from "@/lib/const";

export function WhatLanguageDoWeTranslate() {
  const [languages, setLanguages] = useState({
    first: languagesMap.get("en_UK"),
    second: languagesMap.get("es"),
  });

  const handleLanguageChange = (name: keyof typeof languages, value: string) =>
    setLanguages((prev) => ({ ...prev, [name]: value }));

  const handleSwap = () =>
    setLanguages((prev) => ({ first: prev.second, second: prev.first }));

  return (
    <div className="px-16 py-10 bg-ffffff rounded-[24px] grid gap-10">
      <Text as="h3" variant="Heading/Heading-3">
        What language do we <span>translate </span>?
      </Text>
      <div className="grid gap-[37px] grid-cols-[auto_1fr] items-center">
        <Image
          priority
          alt="languages"
          src={languagesImage.src}
          width={languagesImage.width}
          height={languagesImage.height}
          className="w-[355px] h-[320px]"
        />
        <div className="grid gap-8">
          <div className="grid gap-4">
            <Text variant="Paragraph/Paragraph-1">
              Here you can find out if we’re able to offer the translations you
              need
            </Text>
            <div className="grid grid-cols-[1fr_auto_1fr] gap-[13px]">
              <Select
                defaultValue={languages.first}
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
                defaultValue={languages.second}
                options={Array.from(languagesMap.values())}
                onChange={(value) => handleLanguageChange("second", value)}
              />
            </div>
            <Text variant="Heading/Heading-5" className="text-589999">
              Yes! We translate from {languages.first} to {languages.second}
            </Text>
          </div>
          <div className="grid grid-flow-col auto-cols-[175px] gap-4">
            <Button>Order Now</Button>
            <Button variant="outlined">Get a Quote</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
