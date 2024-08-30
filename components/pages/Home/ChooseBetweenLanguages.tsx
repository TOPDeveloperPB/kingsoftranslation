import { ArrowIcon } from "@/public/icons";
import { Button, Text } from "@/components/core";
import { MOCK_POPULAR_LANGUAGES } from "./data";

export function ChooseBetweenLanguages() {
  return (
    <div className="grid gap-6 grid-cols-2">
      <div className="grid gap-4">
        <Text as="h2" variant="Heading/Heading-2">
          Choose Between <span>65+ languages</span>
        </Text>
        <Text variant="Paragraph/Paragraph-1">
          Each member of our translation team ia full-time professional
          translator thoroughly vetted and regularly reviewed to ensure we
          maintain consistent quality across languages.
        </Text>
        <Button
          variant="ghost"
          className="justify-start transition-all hover:gap-4"
        >
          Show All Languages <ArrowIcon stroke="#DA5001" />
        </Button>
      </div>
      <div className="bg-f0f7f7 rounded-[24px] grid gap-8 p-8">
        <Text variant="Heading/Heading-4" className="text-121212">
          Popular Languages
        </Text>
        <div className="grid gap-[24px_48px] grid-cols-2">
          {MOCK_POPULAR_LANGUAGES.map(({ name, flag }) => (
            <div key={name} className="flex gap-2 items-center ">
              {flag}
              <Text variant="Paragraph/Paragraph-1" className="text-121212">
                {name}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
