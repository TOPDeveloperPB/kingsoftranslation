import { Text } from "@/components/core";
import { MOCK_ACHIEVEMENTS } from "./data";

export function Achievements() {
  return (
    <div className="bg-[#FFF5F0] p-8 rounded-[24px] grid grid-cols-4 gap-[21.33px] justify-between items-end">
      {MOCK_ACHIEVEMENTS.map(({ name, icon }) => (
        <div className="grid gap-6 justify-items-center content-start">
          {icon}
          <Text
            variant="Paragraph/Paragraph-2"
            className="text-center"
            dangerouslySetInnerHTML={{ __html: name }}
          />
        </div>
      ))}
    </div>
  );
}
