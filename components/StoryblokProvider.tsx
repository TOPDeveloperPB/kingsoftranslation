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
import { Page } from "./core/Page";
import { ContactUsForAllOfYourLanguageTranslationQuestions } from "./pages/ContactUs/ContactUsForAllOfYourLanguageTranslationQuestions";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_KEY,
  use: [apiPlugin],
  components: {
    page: Page,
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
    contact_us: Page,
    ContactUsForAllOfYourLanguageTranslationQuestions:
      ContactUsForAllOfYourLanguageTranslationQuestions,
  },
});

export default function StoryblokProvider({ children }: PropsWithChildren) {
  return children;
}
