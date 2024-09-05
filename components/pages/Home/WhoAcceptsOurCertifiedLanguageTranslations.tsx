import { useHomeCtx } from ".";
import { Text } from "@/components/core";
import { storyblokEditable } from "@storyblok/react";
import {
  CitizenshipImmigrationServicesIcon,
  UniversitiesIcon,
  BanksIcon,
  GovernmentIcon,
  SocialSecurityAdministrationIcon,
} from "@/public/icons";
import { IStoryBlokComponentStringWithImage } from "@/types";

const acceptsIconsMap = new Map([
  [
    "U.S. Citizenship and Immigration Services",
    <CitizenshipImmigrationServicesIcon key="U.S. Citizenship and Immigration Services" />,
  ],
  ["All universities", <UniversitiesIcon key="All universities" />],
  ["All banks", <BanksIcon key="All banks" />],
  ["All government bodies", <GovernmentIcon key="All government bodies" />],
  [
    "Social Security Administration",
    <SocialSecurityAdministrationIcon key="Social Security Administration" />,
  ],
]);

export function WhoAcceptsOurCertifiedLanguageTranslations() {
  const data = useHomeCtx(),
    component = data.find(
      (data) => data.component === "WhoAcceptsOurCertifiedLanguageTranslations"
    );

  if (!component) return <></>;

  const { title, accepts } = component;

  return (
    <div {...storyblokEditable(component)} className="grid gap-6">
      <Text
        as="h2"
        variant="Heading/Heading-2"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className="grid grid-cols-5 gap-4">
        {(accepts as IStoryBlokComponentStringWithImage[]).map(
          ({ value, image }) => (
            <div
              key={value}
              className="bg-f6f6f6 p-4 grid gap-6 rounded-[16px] content-start"
            >
              {acceptsIconsMap.get(value)}
              <Text variant="Paragraph/Paragraph-2">{value}</Text>
            </div>
          )
        )}
      </div>
    </div>
  );
}
