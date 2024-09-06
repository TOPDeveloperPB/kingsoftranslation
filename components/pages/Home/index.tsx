"use client";
// import { CertifiedDocumentTranslationServices } from "./CertifiedDocumentTranslationServices";
// import { WhatMakesKingsOfTranslationTheBestChoice } from "./WhatMakesKingsOfTranslationTheBestChoice";
// import { OurDocumentTranslationServices } from "./OurDocumentTranslationServices";
// import { WhatLanguageDoWeTranslate } from "./WhatLanguageDoWeTranslate";
// import { OurCertifiedTranslationServiceValues } from "./OurCertifiedTranslationServiceValues";
// import { WhatIsCertifiedTranslationExactly } from "./WhatIsCertifiedTranslationExactly";
// import { TranslationServices } from "./TranslationServices";
// import { ChooseBetweenLanguages } from "./ChooseBetweenLanguages";
// import { SampleCertifiedTranslations } from "./SampleCertifiedTranslations";
// import { PartnershipButtons } from "./Buttons";
// import { WhoAcceptsOurCertifiedLanguageTranslations } from "./WhoAcceptsOurCertifiedLanguageTranslations";
// import { DidYouKnow } from "./DidYouKnow";
// import { Achievements } from "./Achievements";
// import { ExploreOurUniqueApproachToLanguageTranslation } from "./ExploreOurUniqueApproachToLanguageTranslation";
// import { MakeYourNextMove } from "./MakeYourNextMove";
// import { AskAQuestions } from "./AskAQuestions";
// import { createContext, useContext } from "react";

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

// const HomeCtx = createContext<any[]>([]);
// export const useHomeCtx = () => useContext(HomeCtx);

export function Home({ story }: any) {
  story = useStoryblokState(story);
  console.log(story);

  return <StoryblokComponent blok={story.content} />;
}

// <HomeCtx.Provider value={data}>
//   <CertifiedDocumentTranslationServices />
//   {/* <WhatMakesKingsOfTranslationTheBestChoice />
//   <OurDocumentTranslationServices />
//   <WhatLanguageDoWeTranslate />
//   <OurCertifiedTranslationServiceValues />
//   <WhatIsCertifiedTranslationExactly />
//   <TranslationServices />
//   <ChooseBetweenLanguages />
//   <SampleCertifiedTranslations />
//   <PartnershipButtons />
//   <WhoAcceptsOurCertifiedLanguageTranslations />
//   <DidYouKnow />
//   <Achievements />
//   <ExploreOurUniqueApproachToLanguageTranslation />
//   <MakeYourNextMove />
//   <AskAQuestions /> */}
// </HomeCtx.Provider>
