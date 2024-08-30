import { Button, Text } from "@/components/core";
import Image from "next/image";
import makeYourNextMove from "@/public/images/makeYourNextMove.png";

export function MakeYourNextMove() {
  return (
    <div className="p-[48px_56px] grid gap-6 grid-cols-[1fr_auto] bg-[#F0F7F7] rounded-[24px] items-center">
      <div className="grid gap-[56px]">
        <div className="grid gap-4">
          <Text as="h3" variant="Heading/Heading-3" className="text-da5001">
            Make your next move!
          </Text>
          <Text variant="Paragraph/Paragraph-1">
            At Kings of Translation, we strive to offer industry-leading
            certified translation solutions at fair and affordable prices. Our
            affordable rates are calculated to ensure the best value for money
            and won’t drain your budget. Best of all, you know that our services
            are guaranteed to be the highest quality. A real win-win.
          </Text>
        </div>
        <div className="flex gap-4 [&>*]:min-w-[175px]">
          <Button>Request a Free Quote</Button>
          <Button variant="outlined">View Pricing</Button>
        </div>
      </div>
      <Image
        src={makeYourNextMove.src}
        width={makeYourNextMove.width}
        height={makeYourNextMove.height}
        alt="make your next move image"
        className="w-[450px]"
      />
    </div>
  );
}
