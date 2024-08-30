"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { EmailIcon, PhoneIcon } from "@/public/icons";
import { Button, Input, Label, Text, Textarea } from "@/components/core";

export function AskAQuestions() {
  const variants = [
    {
      name: "By Phone",
      icon: <PhoneIcon />,
    },
    {
      name: "By Email",
      icon: <EmailIcon />,
    },
  ];

  const [activeVariant, setActiveVariant] = useState(variants[0].name);

  return (
    <div className="bg-[#F6F6F6] rounded-[24px] grid grid-cols-[1fr_auto] gap-12 p-[48px_56px]">
      <div className="grid gap-10 content-start">
        <Text as="h2" variant="Heading/Heading-2" className="text-da5001">
          Ask a questions
        </Text>
        <div className="grid gap-6 grid-cols-[auto_1fr] content-start">
          <div className="bg-[#D9D9D9] w-[176px] h-[251px] rounded-[16px]" />
          <div className="grid gap-4 py-2 content-start">
            <Text as="h4" variant="Heading/Heading-4" className="text-121212">
              William Reid
            </Text>
            <Text variant="Paragraph/Paragraph-1" className="text-7e7e7e">
              Got a question or need a quote?
              <br />
              Looking for specialist language translation, interpretation
              guidance or are you just curious about the translation process?
              William is here for you.
              <br />
              Fill in the form and he will contact you as soon as possible.
            </Text>
          </div>
        </div>
      </div>
      <div className="w-full max-w-360px grid content-start gap-6">
        <div className="grid grid-cols-[repeat(2,_172px)] rounded-full bg-ffffff p-1 gap-2">
          {variants.map(({ name, icon }) => (
            <div
              key={name}
              className={cn(
                "grid grid-flow-col gap-3 justify-center p-3 cursor-pointer text-121212 transition-colors rounded-full",
                name === activeVariant && "bg-[#FFF5F0] text-da5001"
              )}
              onClick={() => setActiveVariant(name)}
            >
              {icon}
              <Text variant="Paragraph/Paragraph-2" className="text-inherit">
                {name}
              </Text>
            </div>
          ))}
        </div>
        <div className="grid gap-2">
          <Label text="Name">
            <Input placeholder="Enter your Name" />
          </Label>
          {variants[0].name === activeVariant ? (
            <Label text="Phone Number">
              <Input type="tel" placeholder="Enter your Phone Number" />
            </Label>
          ) : (
            <Label text="Email">
              <Input type="email" placeholder="Enter your Email" />
            </Label>
          )}
          <Label text="Questions">
            <Textarea placeholder="Write your Questions" />
          </Label>
        </div>
        <Button>Send</Button>
      </div>
    </div>
  );
}
