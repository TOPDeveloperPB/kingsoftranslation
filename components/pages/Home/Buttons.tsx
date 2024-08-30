import { Button, Text } from "@/components/core";

export function Buttons() {
  return (
    <div className="grid grid-cols-[repeat(2,_350px)] justify-center gap-6">
      <Button variant="filledBlack">
        <Text variant="Heading/Heading-6" className="text-ffffff">
          Need certified/short translation
        </Text>
      </Button>
      <Button variant="outlinedBlack">
        <Text variant="Heading/Heading-6">
          Complex project/seeking long partnership
        </Text>
      </Button>
    </div>
  );
}
