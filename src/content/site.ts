export const site = {
  name: "Monarch Visa Advisors",
  shortName: "Monarch",
  tagline: "Study-abroad and immigration guidance, from first assessment to landing day.",
  url: "https://www.monarchvisaadvisors.com",
  description:
    "Monarch Visa Advisors provides study-abroad counselling, university admissions, work permit, PR and visa filing assistance with 10+ years of experience.",
  phones: [
    { label: "General", value: "+91 70437 39436", href: "tel:+917043739436" },
    { label: "Study Visa", value: "+91 93284 97871", href: "tel:+919328497871" },
    { label: "Work Visa & PR", value: "+91 88498 73912", href: "tel:+918849873912" },
  ],
  email: "hello@monarchvisaadvisors.com",
  address: {
    line1: "Monarch Visa Advisors LLP",
    line2: "Ahmedabad, Gujarat, India",
    locality: "Ahmedabad",
    region: "Gujarat",
    country: "IN",
  },
  /** Exact, client-supplied Google Business Profile link — use for every "view on map" / "get directions" CTA. */
  mapsShareUrl: "https://share.google/SW2uF8r1x212Fzj8E",
  hours: "Mon–Sat, 10:00 AM – 7:00 PM IST",
  socials: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/monarch_visa_advisors/",
      icon: "instagram" as const,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61574888713959",
      icon: "facebook" as const,
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@monarch_visa_advisors",
      icon: "youtube" as const,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/monarch-visa-advisors-llp",
      icon: "linkedin" as const,
    },
  ],
  // Keyless embed resolved by business name — the exact listing behind mapsShareUrl
  // (Google Knowledge Graph id /g/11zfq7sdx1 = "Monarch Visa Advisors LLP").
  mapEmbedSrc:
    "https://www.google.com/maps?q=Monarch+Visa+Advisors+LLP%2C+Ahmedabad%2C+Gujarat&output=embed",
};

export const countryNav = [
  { label: "Canada", slug: "canada" },
  { label: "UK", slug: "uk" },
  { label: "USA", slug: "usa" },
  { label: "Australia", slug: "australia" },
  { label: "Germany", slug: "germany" },
  { label: "Dubai", slug: "dubai" },
];

export const serviceNav = [
  { label: "Student Visa Services", slug: "student-visa" },
  { label: "University & College Admissions", slug: "university-admissions" },
  { label: "Work Permit & PR Services", slug: "work-permit-pr" },
  { label: "Documentation & Visa Filing", slug: "documentation-visa-filing" },
  { label: "Test Preparation", slug: "test-preparation" },
];

export const footerNav = {
  explore: [
    { label: "Study Abroad", href: "/#roadmap" },
    { label: "Countries", href: "/countries" },
    { label: "Universities", href: "/#universities" },
    { label: "Services", href: "/services" },
    { label: "Success Stories", href: "/#team" },
    { label: "About Us", href: "/team" },
  ],
  resources: [
    { label: "Blogs", href: "/#" },
    { label: "FAQs", href: "/#" },
    { label: "Student Guides", href: "/#" },
    { label: "Visa Updates", href: "/#" },
    { label: "Documents", href: "/#" },
  ],
};
