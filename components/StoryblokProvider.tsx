"use client";
import {
  storyblokInit,
  apiPlugin,
  storyblokEditable,
  StoryblokComponent,
} from "@storyblok/react/rsc";
import { PropsWithChildren } from "react";
import { CertifiedDocumentTranslationServices } from "./pages/Home/CertifiedDocumentTranslationServices";
import { WhatMakesKingsOfTranslationTheBestChoice } from "./pages/Home/WhatMakesKingsOfTranslationTheBestChoice";
import { OurDocumentTranslationServices } from "./pages/Home/OurDocumentTranslationServices";
import { WhatLanguageDoWeTranslate } from "./pages/Home/WhatLanguageDoWeTranslate";
import { OurCertifiedTranslationServiceValues } from "./pages/Home/OurCertifiedTranslationServiceValues";
import { WhatIsCertifiedTranslationExactly } from "./pages/Home/WhatIsCertifiedTranslationExactly";
import { TranslationServices } from "./pages/Home/TranslationServices";
import { ChooseBetweenLanguages } from "./pages/Home/ChooseBetweenLanguages";
import { SampleCertifiedTranslations } from "./pages/Home/SampleCertifiedTranslations";
import { PartnershipButtons } from "./pages/Home/Buttons";
import { WhoAcceptsOurCertifiedLanguageTranslations } from "./pages/Home/WhoAcceptsOurCertifiedLanguageTranslations";
import { DidYouKnow } from "./pages/Home/DidYouKnow";
import { Achievements } from "./pages/Home/Achievements";
import { AskAQuestions } from "./pages/Home/AskAQuestions";
import { ExploreOurUniqueApproachToLanguageTranslation } from "./pages/Home/ExploreOurUniqueApproachToLanguageTranslation";
import { MakeYourNextMove } from "./pages/Home/MakeYourNextMove";

storyblokInit({
  accessToken: "Q4vYnoU8FkPykr9j6pwIlwtt",
  use: [apiPlugin],
  components: {
    page: ({ blok }) => {
      return (
        <main {...storyblokEditable(blok)} className="grid">
          {blok.content.map((nestedBlok: any) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </main>
      );
    },
    CertifiedDocumentTranslationServices: CertifiedDocumentTranslationServices,
    WhatMakesKingsOfTranslationTheBestChoice:
      WhatMakesKingsOfTranslationTheBestChoice,
    OurDocumentTranslationServices: OurDocumentTranslationServices,
    WhatLanguageDoWeTranslate: WhatLanguageDoWeTranslate,
    OurCertifiedTranslationServiceValues: OurCertifiedTranslationServiceValues,
    WhatIsCertifiedTranslationExactly: WhatIsCertifiedTranslationExactly,
    TranslationServices: TranslationServices,
    ChooseBetweenLanguages: ChooseBetweenLanguages,
    SampleCertifiedTranslations: SampleCertifiedTranslations,
    PartnershipButtons: PartnershipButtons,
    WhoAcceptsOurCertifiedLanguageTranslations:
      WhoAcceptsOurCertifiedLanguageTranslations,
    DidYouKnow: DidYouKnow,
    Achievements: Achievements,
    ExploreOurUniqueApproachToLanguageTranslation:
      ExploreOurUniqueApproachToLanguageTranslation,
    MakeYourNextMove: MakeYourNextMove,
    AskAQuestions: AskAQuestions,
  },
});

export default function StoryblokProvider({ children }: PropsWithChildren) {
  return children;
}
