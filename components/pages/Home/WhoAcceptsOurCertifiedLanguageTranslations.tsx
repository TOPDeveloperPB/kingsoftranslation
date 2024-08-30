import { Text } from "@/components/core";
import { MOCK_ACCEPTS } from "./data";

export function WhoAcceptsOurCertifiedLanguageTranslations() {
  return (
    <div className="grid gap-6">
      <Text as="h2" variant="Heading/Heading-2">
        Who <span>accepts</span> our certified language translations?
      </Text>
      <div className="grid grid-cols-5 gap-4">
        {MOCK_ACCEPTS.map(({ icon, name }) => (
          <div
            key={name}
            className="bg-f6f6f6 p-4 grid gap-6 rounded-[16px] content-start"
          >
            {icon}
            <Text variant="Paragraph/Paragraph-2">{name}</Text>
          </div>
        ))}
      </div>
    </div>
  );
}
