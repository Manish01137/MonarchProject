export const heroTrustIcons = [
  { icon: "compass", label: "Personalised Guidance" },
  { icon: "school", label: "University Selection" },
  { icon: "shield", label: "Visa Assistance" },
];

export const heroFlags = [
  { code: "ca", label: "Canada" },
  { code: "gb", label: "UK" },
  { code: "us", label: "USA" },
  { code: "au", label: "Australia" },
];

export const stats = [
  { icon: "star", value: 4.8, suffix: "/5", label: "Google rating · 1000+ reviews", decimals: 1 },
  { icon: "users", value: 10000, prefix: "", suffix: "+", label: "Students Guided" },
  { icon: "badge", value: 98, suffix: "%", label: "Visa Success Rate" },
  { icon: "globe", value: 25, suffix: "+", label: "Destinations" },
  { icon: "award", value: 10, suffix: "+", label: "Years of Expertise" },
];

export const destinations = [
  { slug: "canada", name: "Canada", tagline: "Study, work & PR pathways", image: "/images/country-canada.jpg" },
  { slug: "uk", name: "UK", tagline: "World-ranked universities", image: "/images/country-uk.jpg" },
  { slug: "usa", name: "USA", tagline: "Research & career opportunities", image: "/images/country-usa.jpg" },
  { slug: "australia", name: "Australia", tagline: "Skilled migration friendly", image: "/images/country-australia.jpg" },
  { slug: "germany", name: "Germany", tagline: "Low-cost, high-quality study", image: "/images/country-germany.jpg" },
  { slug: "dubai", name: "Dubai", tagline: "Work & long-term residency", image: "/images/country-dubai.jpg" },
];

export const roadmapSteps = [
  {
    n: "01",
    icon: "clipboard",
    title: "Assessment",
    description: "We evaluate your profile, goals, and budget to map realistic options.",
  },
  {
    n: "02",
    icon: "map",
    title: "Country Selection",
    description: "Shortlist the destinations that fit your academics and long-term plans.",
  },
  {
    n: "03",
    icon: "school",
    title: "University Selection",
    description: "Match you with the right institutions, courses, and intakes.",
  },
  {
    n: "04",
    icon: "file",
    title: "Application Support",
    description: "SOPs, applications, and offer-letter follow-ups handled end to end.",
  },
  {
    n: "05",
    icon: "shield",
    title: "Visa Assistance",
    description: "Documentation, file preparation, and filing support for your visa.",
  },
  {
    n: "06",
    icon: "plane",
    title: "Pre-Departure Support",
    description: "Forex, accommodation, and travel prep so you land ready.",
  },
];

export const journeySteps = [
  { icon: "compass", label: "Discover" },
  { icon: "target", label: "Choose" },
  { icon: "file", label: "Apply" },
  { icon: "graduation", label: "Prepare" },
  { icon: "badge", label: "Get Approved" },
  { icon: "plane", label: "Fly" },
];

export const universities = [
  { name: "University of Toronto", logo: "/logos/toronto.jpg" },
  { name: "University of Melbourne", logo: "/logos/melbourne.jpg" },
  { name: "The University of Sydney", logo: "/logos/sydney.jpg" },
  { name: "University of Oxford", logo: "/logos/oxford.jpg" },
  { name: "University of Cambridge", logo: "/logos/cambridge.jpg" },
  { name: "Imperial College London", logo: "/logos/imperial.jpg" },
  { name: "University College London", logo: "/logos/ucl.jpg" },
  { name: "Harvard University", logo: "/logos/harvard.jpg" },
  { name: "Massachusetts Institute of Technology", logo: "/logos/mit.jpg" },
  { name: "Stanford University", logo: "/logos/stanford.jpg" },
  { name: "Yale University", logo: "/logos/yale.jpg" },
  { name: "McGill University", logo: "/logos/mcgill.jpg" },
  { name: "University of British Columbia", logo: "/logos/ubc.jpg" },
  { name: "University of Waterloo", logo: "/logos/waterloo.jpg" },
  { name: "Australian National University", logo: "/logos/anu.jpg" },
];

export const universityFilters = [
  {
    label: "Destination",
    options: ["Canada", "UK", "USA", "Australia", "Germany", "Dubai"],
  },
  {
    label: "Course",
    options: ["Business & Management", "Engineering", "Computer Science", "Health Sciences", "Arts & Design"],
  },
  {
    label: "Intake",
    options: ["Spring / Jan–Feb", "Summer / May", "Fall / Sep"],
  },
  {
    label: "Budget",
    options: ["Under $15k / yr", "$15k–$30k / yr", "$30k–$50k / yr", "$50k+ / yr"],
  },
];

export const teamBullets = [
  {
    icon: "users",
    title: "Experienced Counsellors",
    description: "A team that has guided students through more than a decade of visa-rule changes.",
  },
  {
    icon: "heart",
    title: "Student-Focused Guidance",
    description: "Advice built around your profile and goals — not a one-size-fits-all checklist.",
  },
  {
    icon: "lifebuoy",
    title: "End-to-End Support",
    description: "From the first assessment to pre-departure, one team stays with you.",
  },
];

/* ---- Lead form ("Not Sure Where You Fit? Let's Find Out.") ---- */

export const leadFormSteps = [
  {
    name: "study" as const,
    question: "What do you want to study?",
    options: [
      "Business & Management",
      "Engineering",
      "Computer Science & IT",
      "Health & Medical Sciences",
      "Arts, Design & Humanities",
      "Science & Research",
      "Still deciding",
    ],
  },
  {
    name: "country" as const,
    question: "Which country interests you?",
    options: ["Canada", "UK", "USA", "Australia", "Germany", "Dubai", "Open to suggestions"],
  },
  {
    name: "qualification" as const,
    question: "Your highest qualification",
    options: [
      "Class 12 / High School",
      "Diploma",
      "Bachelor's Degree",
      "Master's Degree",
      "Other",
    ],
  },
  {
    name: "testScore" as const,
    question: "IELTS / PTE Score",
    options: [
      "Not taken yet",
      "IELTS 5.5 – 6.0 / PTE 42–50",
      "IELTS 6.5 – 7.0 / PTE 51–65",
      "IELTS 7.5+ / PTE 66+",
    ],
  },
  {
    name: "budget" as const,
    question: "Your Budget (per year)",
    options: ["Under $15,000", "$15,000 – $30,000", "$30,000 – $50,000", "$50,000+"],
  },
];

export const countryDialCodes = [
  { code: "+91", label: "India (+91)" },
  { code: "+1", label: "USA / Canada (+1)" },
  { code: "+44", label: "UK (+44)" },
  { code: "+61", label: "Australia (+61)" },
  { code: "+49", label: "Germany (+49)" },
  { code: "+971", label: "UAE (+971)" },
];
