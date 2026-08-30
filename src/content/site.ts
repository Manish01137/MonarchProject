export const site = {
  name: "Monarch Visa Advisors",
  shortName: "Monarch",
  tagline: "Study-abroad and immigration guidance, from first assessment to landing day.",
  url: "https://www.monarchvisaadvisors.com",
  description:
    "Monarch Visa Advisors provides study-abroad counselling, university admissions, work permit, PR and visa filing assistance with 10+ years of experience.",
  phones: [
    { label: "Counselling", value: "+91 90000 00000", href: "tel:+919000000000" },
    { label: "Support", value: "+91 90000 11111", href: "tel:+919000011111" },
  ],
  email: "hello@monarchvisaadvisors.com",
  address: {
    line1: "Monarch Visa Advisors",
    line2: "Ahmedabad, Gujarat, India",
    locality: "Ahmedabad",
    region: "Gujarat",
    country: "IN",
  },
  hours: "Mon–Sat, 10:00 AM – 7:00 PM IST",
  socials: [
    { label: "Facebook", href: "https://facebook.com", icon: "facebook" as const },
    { label: "Pinterest", href: "https://pinterest.com", icon: "pinterest" as const },
    { label: "YouTube", href: "https://youtube.com", icon: "youtube" as const },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" as const },
  ],
  mapEmbedSrc:
    "https://www.google.com/maps?q=Ahmedabad%2C%20Gujarat%2C%20India&output=embed",
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
    { label: "About Us", href: "/#team" },
  ],
  resources: [
    { label: "Blogs", href: "/#" },
    { label: "FAQs", href: "/#" },
    { label: "Student Guides", href: "/#" },
    { label: "Visa Updates", href: "/#" },
    { label: "Documents", href: "/#" },
  ],
};
