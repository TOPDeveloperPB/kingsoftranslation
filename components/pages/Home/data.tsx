import {
  PassportIcon,
  MarriageIcon,
  BirthIcon,
  DeathIcon,
  DiplomaIcon,
  AcademicIcon,
  BonusIcon,
  AdoptionIcon,
  ImpedimentIcon,
  CarIcon,
  BanksIcon,
  CitizenshipImmigrationServicesIcon,
  GovernmentIcon,
  SocialSecurityAdministrationIcon,
  UniversitiesIcon,
  USCISIcon,
  RatingIcon,
} from "@/public/icons";
import {
  Spanish,
  Portuguese,
  French,
  German,
  Russian,
  Chinese,
  Arabic,
  Italian,
  Japanese,
  Korean,
} from "@/public/icons/flags";
import Image from "next/image";
import ATA from "@/public/images/ATA.png";
import BBB from "@/public/images/BBB.png";
import translationManagementSystem from "@/public/images/translationManagementSystem.jpeg";
import authenticTranslationServices from "@/public/images/authenticTranslationServices.jpeg";
import translationServiceDeliveryTimes from "@/public/images/translationServiceDeliveryTimes.jpeg";
import languages from "@/public/images/languages.jpeg";

export const MOCK_OPTIONS = [
  { value: "99.99%", description: "5 years of five 9s SLAs" },
  { value: "120+", description: "different languages" },
  { value: "24/7", description: "available" },
  { value: "46", description: "countries supported" },
];

export const MOCK_SERVICES = [
  {
    title: "Passport",
    description:
      "Professional passport translation is essential for visa application purposes. Whenever you need a translation of your passport to travel into a different country or as proof of identity, you can count on us to deliver the translation promptly and efficiently, so the translation is as authentic as the original.  We guarantee a fast turnaround for passport translation and we will arrange a certified delivery so your document is always secure.",
    icon: <PassportIcon />,
    background: "#FFE5E5",
    href: "/",
  },
  {
    title: "Marriage certificate",
    description:
      "If you are planning a destination wedding in a foreign country, don’t forget to arrange for a legally valid translation of your new marriage certificate once you return home. Your marriage certificate is an important form of identification, and if it is written in a different language to your own country’s language, then you are going to need a translation for future identification purposes. Ask our team to translate your new marriage certificate, and then your wedding vows will become legally recognized anywhere. We can arrange an accurate and official translation of the wedding certificate, so you can register your wedding in your home country and overseas.",
    icon: <MarriageIcon />,
    background: "#FFF6E5",
    href: "/",
  },
  {
    title: "Birth certificate",
    description:
      "Your birth certificate is another form of important identification. If you are planning to travel overseas or if your birth certificate is not in your native language, you might need to get your birth certificate translated.  We can provide the translation quickly and accurately upon your request.",
    icon: <BirthIcon />,
    background: "#EFFFE5",
    href: "/",
  },
  {
    title: "Death certificate",
    description:
      "When you need to have a death certificate translated, our team of qualified translators can arrange the translation quickly and accurately. With a range of over 120 languages available, we can guarantee the translation will be completed promptly to the highest standard.",
    icon: <DeathIcon />,
    background: "#E5FFF7",
    href: "/",
  },
  {
    title: "Diploma",
    description:
      "When you want to study or work abroad, you will need translations of your diplomas, certificates and any other related documents so you can demonstrate your skills and experience to prospective employers or academic institutions. We provide a prompt and accurate translation service, so you can have your translated credentials available for submission.",
    icon: <DiplomaIcon />,
    background: "#E5F6FF",
    href: "/",
  },
  {
    title: "Academic certificate",
    description:
      "When you want to work or study overseas, you will need notarized copies of all your current academic qualifications. Our cohesive team of professional linguists can provide professional language translations for all your academic certificates, translating the academic text with utmost accuracy in 120 different languages. We will also notarize your certificates so they meet official standards. As our language translation experts work 24/7, our delivery times are among the best in the business, and our competitive market rates are affordable and tailored to the individual needs of our customers.",
    icon: <AcademicIcon />,
    background: "#F1E5FF",
    href: "/",
  },
  {
    title: "No claims bonus certificate",
    description:
      "If you need to transpose your no claim bonus certificate into another language, we can arrange a fast and efficient translation. Our extensive team of document translation specialists can transpose any kind of official documentation – including no claims bonus certificates – into up to 120 different languages, so you can make the most of all your car insurance benefits. With a round-the-clock global team available to manage all your translation needs, large and small, we are committed to delivering the highest quality translations fast and efficiently, every time, at an affordable price.",
    icon: <BonusIcon />,
    background: "#E5FFF7",
    href: "/",
  },
  {
    title: "Adoption certificate",
    description:
      "Adoption certificates are critically important forms of identification, so they must be 100% accurate and notarized in order to confirm their validity. Our team of expert linguists will translate your adoption certificates in up to 120 different languages with complete fluency and accuracy. We can also notarize all translated adoption certificates. As our professional language translation specialists work around the clock, we can guarantee industry-leading delivery times along with affordable competitive rates, which can be tailored to your budgeting requirements for your convenience.",
    icon: <AdoptionIcon />,
    background: "#FFE5E5",
    href: "/",
  },
  {
    title: "A CERTIFICATE OF NO IMPEDIMENT",
    description:
      "A Certificate of No Impediment’ application is essential when you want to obtain a marriage certificate. The translation of such a document must be completely accurate and authentic and our dedicated language translation experts are available to help you. We offer professional authentic document translations with fast delivery time and round the clock customer service. Our services are also extremely cost effective as our fees are competitively priced, with a range of flexible payment plans for your convenience.",
    icon: <ImpedimentIcon />,
    background: "#E5FFF7",
    href: "/",
  },
  {
    title: "CAR INSURANCE DOCUMENT",
    description:
      "Dealing with car insurance can be complicated enough when you are reading the documents in your own language – but when you are signing documents in another country, you really need to understand the fine print. When you need a translation of your official car insurance documents, we can help. Our dedicated team of linguists can transpose your car insurance documents into up to 120 different languages, making sure that every sentence is clear and accurate. With our round-the-clock customer service, we can provide fast and convenient project delivery at an affordable price. We do not compromise quality for speed and affordability, so you are guaranteed exceptional value for money.",
    icon: <CarIcon />,
    background: "#FFE5E5",
    href: "/",
  },
];

export const MOCK_VALUES = [
  {
    title: "Quote & approval",
    description:
      "Submit your scanned or photographed documents via email. Outline your requirements, and we will send you a no-obligation quote. Once you accept the quote, we start the project.",
  },
  {
    title: "Translation process",
    description:
      "Submit your scanned or photographed documents via email. Outline your requirements, and we will send you a no-obligation quote. Once you accept the quote, we start the project.",
  },
  {
    title: "The big reveal",
    description:
      "Submit your scanned or photographed documents via email. Outline your requirements, and we will send you a no-obligation quote. Once you accept the quote, we start the project.",
  },
];

export const MOCK_TRANSLATION_SERVICES = [
  {
    title: "Certified Translation",
    price: "24.95",
    per: "page",
    description:
      "Best for official use by universities, courts, and many local, state, and federal governments.",
    style: "Literal",
    format: "PDF",
    options: [
      "Professional Translation",
      "Revisions",
      "Formatting",
      "Signed/Stamped Certification",
      "Expedited Turnaround",
      "Notarization",
      "Hard Copy",
    ],
  },
  {
    title: "Standard Translation",
    price: "0.10",
    per: "word",
    description:
      "Best for business or personal use where certification is not required by the receiver.",
    style: "Interpretive",
    format: "DOCX",
    options: [
      "Professional Translation",
      "Revisions",
      "Formatting",
      "Expedited Turnaround",
    ],
  },
];

export const MOCK_POPULAR_LANGUAGES = [
  { name: "Spanish", flag: <Spanish /> },
  { name: "Portuguese", flag: <Portuguese /> },
  { name: "French", flag: <French /> },
  { name: "German", flag: <German /> },
  { name: "Russian", flag: <Russian /> },
  { name: "Chinese", flag: <Chinese /> },
  { name: "Arabic", flag: <Arabic /> },
  { name: "Italian", flag: <Italian /> },
  { name: "Japanese", flag: <Japanese /> },
  { name: "Korean", flag: <Korean /> },
];

export const MOCK_SAMPLES = [
  "Certification",
  "Birth Certificate",
  "Academic Transcript",
];

export const MOCK_ACCEPTS = [
  {
    icon: <CitizenshipImmigrationServicesIcon />,
    name: "U.S. Citizenship and Immigration Services",
  },
  { icon: <UniversitiesIcon />, name: "All universities" },
  { icon: <BanksIcon />, name: "All banks" },
  { icon: <GovernmentIcon />, name: "All government bodies" },
  {
    icon: <SocialSecurityAdministrationIcon />,
    name: "Social Security Administration",
  },
];

export const MOCK_ACHIEVEMENTS = [
  {
    icon: (
      <Image
        src={ATA.src}
        width={ATA.width}
        height={ATA.height}
        alt="ATA logo"
      />
    ),
    name: "ATA Corporate member<br/>#263976 since 2015",
  },
  { icon: <USCISIcon />, name: "100% guaranteed<br/>acceptance by USCIS" },
  {
    icon: (
      <Image
        src={BBB.src}
        width={BBB.width}
        height={BBB.height}
        alt="BBB logo"
      />
    ),
    name: "Accredited with an A+ rating<br/>from the BBB",
  },
  {
    icon: <RatingIcon />,
    name: "Rated 4.86/5 from 18,255<br/>verified reviews",
  },
];

export const MOCK_TRANSLATION_VALUES = [
  {
    name: "Our translation management system (TMS)",
    description: [
      "Our TMS applies your specific project parameters and automates large phases of the translation process with speed and accuracy. Our TMS will give you the tools to track the progress of your translations from one user-friendly dashboard, keeping you informed and in control at all times.",
    ],
    image: translationManagementSystem,
    href: "/",
  },
  {
    name: "Our authentic translation services",
    description: [
      "Rather than relying on instant artificially generated translations, all our translations have the authentic human touch.  With over 3,000 language translation experts in our ever-expanding international network, our global reach and expertise are unrivalled in the industry. Whatever your industry, niche or specific requirements, we have the right translation expert for you.",
    ],
    image: authenticTranslationServices,
    href: "/",
  },
  {
    name: "24/7 translation service delivery times",
    description: [
      "Our global team work around the clock, seven days a week, so we can provide industry-leading translation delivery times. In fact, we can deliver urgent projects in 24 hours upon request, without compromising on quality.",
      "Swift, flawless results that will achieve exactly what you need. At Kings of Translation HQ, we pride ourselves on exceptional quality and professional standards. We won’t rest until you’re 100% satisfied with our work.",
    ],
    image: translationServiceDeliveryTimes,
    href: "/",
  },
  {
    name: "120 languages",
    description: [
      "Our team of translators have a collective knowledge of over 120 different languages, so we can deliver a wealth of cutting-edge translation services in whatever language you need. If you want to expand the global reach of your business, you can harness our tools and expertise to present your written content to potential stakeholders all around the world.",
      "Our extensive network of experienced translators can handle an infinite range of translation combinations and complex linguistic tasks—so you can be confident that your project is in expert hands.",
    ],
    image: languages,
    href: "/",
  },
];
