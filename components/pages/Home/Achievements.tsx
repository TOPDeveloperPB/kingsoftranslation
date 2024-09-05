import { useHomeCtx } from ".";
import Image from "next/image";
import { Text } from "@/components/core";
import ATA from "@/public/images/ATA.png";
import BBB from "@/public/images/BBB.png";
import { storyblokEditable } from "@storyblok/react";
import { USCISIcon, RatingIcon } from "@/public/icons";
import { IStoryBlokComponentStringWithImage } from "@/types";

const achievementsIconsMap = new Map([
  [
    "ATA Corporate member<br/>#263976 since 2015",
    <Image
      src={ATA.src}
      width={ATA.width}
      height={ATA.height}
      alt="ATA logo"
      key="ATA Corporate member<br/>#263976 since 2015"
    />,
  ],
  [
    "100% guaranteed<br/>acceptance by USCIS",
    <USCISIcon key="100% guaranteed<br/>acceptance by USCIS" />,
  ],
  [
    "Accredited with an A+ rating<br/>from the BBB",
    <Image
      src={BBB.src}
      width={BBB.width}
      height={BBB.height}
      alt="BBB logo"
      key="Accredited with an A+ rating<br/>from the BBB"
    />,
  ],
  [
    "Rated 4.86/5 from 18,255<br/>verified reviews",
    <RatingIcon key="Rated 4.86/5 from 18,255<br/>verified reviews" />,
  ],
]);

export function Achievements() {
  const data = useHomeCtx(),
    component = data.find((data) => data.component === "Achievements");

  if (!component) return <></>;

  const { achievements } = component;

  return (
    <div
      {...storyblokEditable(component)}
      className="bg-[#FFF5F0] p-8 rounded-[24px] grid grid-cols-4 gap-[21.33px] justify-between items-end"
    >
      {(achievements as IStoryBlokComponentStringWithImage[]).map(
        ({ value, image, _uid }) => (
          <div
            key={_uid}
            className="grid gap-6 justify-items-center content-start"
          >
            {achievementsIconsMap.get(value)}
            <Text
              variant="Paragraph/Paragraph-2"
              className="text-center"
              dangerouslySetInnerHTML={{ __html: value }}
            />
          </div>
        )
      )}
    </div>
  );
}
