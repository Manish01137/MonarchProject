export type CountryService = {
  title: string;
  description: string;
  icon: IconKey;
};

export type IconKey =
  | "graduation"
  | "permanent"
  | "work"
  | "visitor"
  | "family"
  | "more"
  | "settlement"
  | "greencard";

export type Country = {
  slug: string;
  name: string;
  /** ISO 3166-1 alpha-2, lowercase — used by flag-icons (`fi fi-<code>`). */
  flag: string;
  image: string;
  imageAlt: string;
  h2: string;
  subhead: string;
  hook: string;
  intro: string;
  services: CountryService[];
  whyChoose: string;
  closing: string;
  tags: string[];
  /** true = placeholder copy, awaiting client-approved text. */
  pending?: boolean;
};

const whyChooseIntroShared =
  "With 10+ years of experience, we provide personalized visa guidance based on your profile, requirements, and immigration goals. From profile assessment and documentation to application preparation and filing assistance, our team supports you throughout the process.";

export const countries: Country[] = [
  {
    slug: "canada",
    name: "Canada",
    flag: "ca",
    image: "/images/country-canada.jpg",
    imageAlt: "Toronto skyline with the CN Tower at sunset",
    h2: "Canada Visa & Immigration Services",
    subhead: "Canada Visa Consultants – Monarch Visa Advisors",
    hook: "Study, work, visit, or settle in Canada with expert, end-to-end guidance.",
    intro:
      "Planning to study, work, visit, or settle in Canada? Monarch Visa Advisors provides complete Canada visa and immigration assistance with 10+ years of experience in the visa industry. Our experienced team helps individuals, students, professionals, families, and businesses choose the right immigration pathway and prepare their applications with proper documentation and professional guidance.",
    services: [
      {
        title: "Canada Study Visa",
        description: "Complete assistance for students planning to study in Canada.",
        icon: "graduation",
      },
      {
        title: "Canada PR",
        description: "Guidance for eligible applicants exploring permanent residency pathways.",
        icon: "permanent",
      },
      {
        title: "Canada Work Permit",
        description: "Assistance with work permit applications and documentation.",
        icon: "work",
      },
      {
        title: "Canada Visitor Visa",
        description:
          "Support for tourism, family visits, business visits, and other temporary travel purposes.",
        icon: "visitor",
      },
      {
        title: "Canada Spouse & Family Visa",
        description:
          "Assistance with eligible spouse, dependent, and family immigration applications.",
        icon: "family",
      },
      {
        title: "Other Canada Visa Categories",
        description: "Professional guidance for various Canadian immigration and visa requirements.",
        icon: "more",
      },
    ],
    whyChoose: whyChooseIntroShared,
    closing:
      "Whether your goal is to study in Canada, obtain permanent residency, work, visit your family, or reunite with your spouse, Monarch Visa Advisors can help you understand your options and take the right steps. Talk to our Canada Visa Experts today and get your profile assessed.",
    tags: [
      "Study Visa",
      "PR",
      "Work Permit",
      "Visitor Visa",
      "Spouse Visa",
      "Family Visa & More",
    ],
  },
  {
    slug: "uk",
    name: "UK",
    flag: "gb",
    image: "/images/country-uk.jpg",
    imageAlt: "Aerial view of the River Thames and Tower Bridge in London",
    h2: "UK Visa & Immigration Services",
    subhead: "Your Trusted UK Visa Consultants",
    hook: "Study, work, visit, or build your future in the United Kingdom.",
    intro:
      "Planning to study, work, visit, or build your future in the United Kingdom? Monarch Visa Advisors offers professional UK visa and immigration assistance backed by 10+ years of experience. We help students, professionals, families, business owners, and visitors understand the right visa pathway and prepare their applications with proper documentation and expert guidance.",
    services: [
      {
        title: "UK Study Visa",
        description:
          "Guidance for students looking to pursue higher education in the UK, from course selection to visa application.",
        icon: "graduation",
      },
      {
        title: "UK Work Visa",
        description:
          "Assistance for eligible professionals and skilled workers looking to work in the United Kingdom.",
        icon: "work",
      },
      {
        title: "UK Visitor Visa",
        description: "Support for tourism, family visits, business travel, and short-term visits.",
        icon: "visitor",
      },
      {
        title: "UK Spouse & Family Visa",
        description:
          "Assistance for eligible applicants looking to join their spouse, partner, or family members in the UK.",
        icon: "family",
      },
      {
        title: "UK Settlement & Immigration",
        description:
          "Guidance for individuals exploring long-term residence and eligible settlement routes.",
        icon: "settlement",
      },
      {
        title: "Other UK Visa Categories",
        description: "Professional assistance for various UK visa and immigration requirements.",
        icon: "more",
      },
    ],
    whyChoose:
      "With 10+ years of industry experience, we focus on providing clear, personalized, and reliable visa guidance. Our team assists with profile evaluation, document preparation, application review, and the overall visa process.",
    closing:
      "Whether you're a student planning your education, a professional seeking career opportunities, or a family looking to reunite in the UK, we help you move forward with confidence. Your UK plans deserve the right guidance — let Monarch Visa Advisors help you identify the appropriate visa pathway and prepare your application.",
    tags: [
      "UK Study Visa",
      "Work Visa",
      "Visitor Visa",
      "Spouse Visa",
      "Family Visa",
      "Settlement & More",
    ],
  },
  {
    slug: "usa",
    name: "USA",
    flag: "us",
    image: "/images/country-usa.jpg",
    imageAlt: "Manhattan skyline at sunset with the Empire State Building",
    h2: "USA Visa & Immigration Services",
    subhead: "Make Your USA Dream a Reality with Monarch Visa Advisors",
    hook: "Study, build a career, visit family, or explore immigration to the USA.",
    intro:
      "Whether you want to study in the USA, build your career, visit family, or explore immigration opportunities, Monarch Visa Advisors provides end-to-end USA visa assistance backed by 10+ years of experience. Our team helps you understand the right visa category, prepare your documentation, and navigate the application process with professional guidance tailored to your profile.",
    services: [
      {
        title: "USA Student Visa",
        description:
          "Assistance for students pursuing undergraduate, postgraduate, professional, and other eligible programs in the United States.",
        icon: "graduation",
      },
      {
        title: "USA Work Visa",
        description:
          "Guidance for eligible professionals and workers exploring employment opportunities in the USA.",
        icon: "work",
      },
      {
        title: "USA Visitor Visa",
        description:
          "Assistance for tourism, family visits, business travel, and other temporary visits.",
        icon: "visitor",
      },
      {
        title: "USA Spouse & Family Visa",
        description:
          "Support for eligible applicants seeking to join their spouse or family members in the United States.",
        icon: "family",
      },
      {
        title: "USA Immigration & Green Card",
        description:
          "Guidance for individuals exploring eligible permanent immigration and Green Card pathways.",
        icon: "greencard",
      },
      {
        title: "Other USA Visa Categories",
        description:
          "Professional assistance for a wide range of temporary and immigrant visa requirements.",
        icon: "more",
      },
    ],
    whyChoose:
      "For over 10 years, we have helped applicants navigate complex visa processes with a focus on accurate documentation, personalized advice, and complete application support. From initial profile evaluation to document preparation and application filing, our team stays with you throughout the process.",
    closing:
      "Every applicant has a different goal and profile — get professional guidance to understand your available options and choose the pathway that best fits your plans. Talk to Monarch Visa Advisors today.",
    tags: [
      "USA Student Visa",
      "Work Visa",
      "Visitor Visa",
      "Spouse Visa",
      "Family Visa",
      "Immigration & More",
    ],
  },
  {
    slug: "australia",
    name: "Australia",
    flag: "au",
    image: "/images/country-australia.jpg",
    imageAlt: "Sydney Opera House and harbour",
    h2: "Australia Visa & Immigration Services",
    subhead: "Australia Visa Consultants – Monarch Visa Advisors",
    hook: "Study, work, visit, or plan your move to Australia.",
    intro:
      "[Pending final content] Planning to study, work, visit, or settle in Australia? Monarch Visa Advisors provides complete Australia visa and immigration assistance backed by 10+ years of experience. Our team helps students, professionals, and families understand the right visa pathway and prepare their applications with proper documentation and professional guidance.",
    services: [
      {
        title: "Australia Student Visa",
        description:
          "[Pending] Complete assistance for students planning to study in Australia, from course selection to visa lodgement.",
        icon: "graduation",
      },
      {
        title: "Australia Skilled & PR",
        description:
          "[Pending] Guidance for eligible applicants exploring skilled migration and permanent residency pathways.",
        icon: "permanent",
      },
      {
        title: "Australia Work Visa",
        description:
          "[Pending] Assistance for eligible professionals exploring temporary and employer-sponsored work options.",
        icon: "work",
      },
      {
        title: "Australia Visitor Visa",
        description: "[Pending] Support for tourism, family visits, and short-term business travel.",
        icon: "visitor",
      },
      {
        title: "Australia Partner & Family Visa",
        description:
          "[Pending] Assistance with eligible partner, dependent, and family visa applications.",
        icon: "family",
      },
      {
        title: "Other Australia Visa Categories",
        description: "[Pending] Professional guidance for various Australian visa requirements.",
        icon: "more",
      },
    ],
    whyChoose:
      "[Pending final content] With 10+ years of experience, we provide personalized visa guidance based on your profile, points assessment, and migration goals — from documentation to application preparation and lodgement support.",
    closing:
      "[Pending final content] Whether your goal is to study, gain skilled migration, work, or reunite with family in Australia, Monarch Visa Advisors can help you understand your options. Talk to our Australia Visa Experts today and get your profile assessed.",
    tags: ["Study Visa", "Skilled Migration", "PR", "Work Visa", "Visitor Visa", "Partner Visa & More"],
    pending: true,
  },
  {
    slug: "germany",
    name: "Germany",
    flag: "de",
    image: "/images/country-germany.jpg",
    imageAlt: "The Brandenburg Gate in Berlin",
    h2: "Germany Visa & Immigration Services",
    subhead: "Germany Visa Consultants – Monarch Visa Advisors",
    hook: "Study, train, work, or build your career in Germany.",
    intro:
      "[Pending final content] Planning to study, work, or build your career in Germany? Monarch Visa Advisors provides complete Germany visa and immigration assistance backed by 10+ years of experience. Our team helps students and professionals understand the right visa pathway and prepare their applications with proper documentation and professional guidance.",
    services: [
      {
        title: "Germany Study Visa",
        description:
          "[Pending] Assistance for students planning to pursue higher education at German universities.",
        icon: "graduation",
      },
      {
        title: "Germany Job Seeker Visa",
        description:
          "[Pending] Guidance for qualified professionals exploring the job seeker route to Germany.",
        icon: "work",
      },
      {
        title: "Germany Work Visa",
        description:
          "[Pending] Assistance for eligible professionals with employer-sponsored and EU Blue Card options.",
        icon: "work",
      },
      {
        title: "Germany Visitor Visa",
        description: "[Pending] Support for tourism, family visits, and short-term business travel.",
        icon: "visitor",
      },
      {
        title: "Germany Family Reunion Visa",
        description:
          "[Pending] Assistance with eligible spouse and family reunification applications.",
        icon: "family",
      },
      {
        title: "Other Germany Visa Categories",
        description: "[Pending] Professional guidance for various German visa requirements.",
        icon: "more",
      },
    ],
    whyChoose:
      "[Pending final content] With 10+ years of experience, we provide personalized visa guidance based on your profile, qualifications, and goals — from documentation and language requirements to application preparation and filing support.",
    closing:
      "[Pending final content] Whether your goal is to study, seek a job, work, or reunite with family in Germany, Monarch Visa Advisors can help you understand your options. Talk to our Germany Visa Experts today and get your profile assessed.",
    tags: ["Study Visa", "Job Seeker Visa", "Work Visa", "Blue Card", "Visitor Visa", "Family Reunion & More"],
    pending: true,
  },
  {
    slug: "dubai",
    name: "Dubai",
    flag: "ae",
    image: "/images/country-dubai.jpg",
    imageAlt: "Dubai skyline with the Burj Khalifa",
    h2: "Dubai Visa & Immigration Services",
    subhead: "Dubai & UAE Visa Consultants – Monarch Visa Advisors",
    hook: "Visit, work, or set up your presence in Dubai and the UAE.",
    intro:
      "[Pending final content] Planning to visit, work, or establish yourself in Dubai and the UAE? Monarch Visa Advisors provides complete Dubai visa assistance backed by 10+ years of experience. Our team helps individuals, professionals, and families understand the right visa pathway and prepare their applications with proper documentation and professional guidance.",
    services: [
      {
        title: "Dubai Visit Visa",
        description:
          "[Pending] Support for tourism, family visits, and short-term stays on 30- and 60-day visit visas.",
        icon: "visitor",
      },
      {
        title: "Dubai Employment Visa",
        description:
          "[Pending] Assistance for candidates with an offer of employment in Dubai and the UAE.",
        icon: "work",
      },
      {
        title: "UAE Golden & Long-Term Visa",
        description:
          "[Pending] Guidance for eligible investors, professionals, and talents exploring long-term residency.",
        icon: "permanent",
      },
      {
        title: "Dubai Family Sponsorship Visa",
        description: "[Pending] Assistance with sponsoring a spouse, children, or parents in the UAE.",
        icon: "family",
      },
      {
        title: "Dubai Student Visa",
        description:
          "[Pending] Assistance for students enrolling at universities and institutions in the UAE.",
        icon: "graduation",
      },
      {
        title: "Other Dubai Visa Categories",
        description: "[Pending] Professional guidance for various UAE visa requirements.",
        icon: "more",
      },
    ],
    whyChoose:
      "[Pending final content] With 10+ years of experience, we provide personalized visa guidance based on your profile and goals — from documentation and attestation to application preparation and filing support.",
    closing:
      "[Pending final content] Whether your goal is to visit, work, sponsor family, or study in Dubai, Monarch Visa Advisors can help you understand your options. Talk to our Dubai Visa Experts today and get your profile assessed.",
    tags: ["Visit Visa", "Employment Visa", "Golden Visa", "Family Sponsorship", "Student Visa & More"],
    pending: true,
  },
];

export const countryFeatureChips = [
  "Experienced Guidance",
  "Complete Visa Assistance",
  "Personalized Support",
  "Multiple Visa Categories",
];

export function getCountry(slug: string) {
  return countries.find((c) => c.slug === slug);
}
