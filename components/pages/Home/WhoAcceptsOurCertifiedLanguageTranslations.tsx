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

  const parsedAccepts: {
    icon: JSX.Element;
    name: string;
  }[] = accepts.tbody.reduce(
    (prev: any[], { body }: { body: { value: string }[] }) => {
      prev.push({
        name: body[0].value,
        icon: acceptsIconsMap.get(body[0].value),
      });
      return prev;
    },
    []
  );

  return (
    <div {...storyblokEditable(component)} className="grid gap-6">
      <Text
        as="h2"
        variant="Heading/Heading-2"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className="grid grid-cols-5 gap-4">
        {parsedAccepts.map(({ icon, name }) => (
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
