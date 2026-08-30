export type ServiceIconKey =
  | "student-visa"
  | "university-admissions"
  | "work-permit-pr"
  | "documentation-visa-filing"
  | "test-preparation";

export type Service = {
  slug: ServiceIconKey;
  name: string;
  subhead: string;
  hook: string;
  summary: string;
  intro: string;
  includesTitle: string;
  includes: string[];
  closing: string;
  image: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "student-visa",
    name: "Student Visa Services",
    subhead: "Student Visa Services",
    hook: "Complete student visa assistance for your study-abroad destination.",
    summary:
      "Course and country guidance, application support, and visa file preparation for study-abroad students.",
    intro:
      "Planning to study abroad? Monarch Visa Advisors provides complete student visa assistance for students looking to pursue education in Canada, UK, USA, Australia, New Zealand, Poland, and other popular destinations. We help you choose the right course and country, prepare your application, and complete the visa process with proper documentation.",
    includesTitle: "Our Services Include",
    includes: [
      "Profile evaluation and country/course guidance",
      "University and course shortlisting",
      "Application and offer letter assistance",
      "Financial and documentation guidance",
      "Visa file preparation and review",
      "Visa interview preparation, where required",
    ],
    closing: "Start your study abroad journey with the right guidance.",
    image: "/images/service-student-visa.jpg",
    imageAlt: "Bright sky with sunlight breaking through clouds",
    metaTitle: "Student Visa Services | Study Abroad Visa Consultants | Monarch Visa Advisors",
    metaDescription:
      "End-to-end student visa assistance for Canada, UK, USA, Australia and more — course selection, applications, financial documentation and visa file preparation.",
  },
  {
    slug: "university-admissions",
    name: "University & College Admissions",
    subhead: "University & College Admissions",
    hook: "Find the right university and course, and simplify the admission process.",
    summary:
      "Shortlisting, applications, SOP guidance, offer letters and deadline management for study-abroad admissions.",
    intro:
      "Choosing the right university and course is one of the most important steps in studying abroad. Our admissions team helps students identify suitable institutions based on their academic profile, career goals, budget, and preferred destination. From applications to offer letters, we simplify the admission process and keep you informed at every stage.",
    includesTitle: "Our Services Include",
    includes: [
      "University and course selection",
      "Application preparation and submission",
      "SOP and application guidance",
      "Offer letter assistance and follow-ups",
      "Intake and deadline guidance",
      "Fee structure and admission process guidance",
    ],
    closing: "Find the right institution for your future.",
    image: "/images/service-university-admissions.jpg",
    imageAlt: "University campus building with a green lawn",
    metaTitle:
      "University & College Admissions Abroad | Application Support | Monarch Visa Advisors",
    metaDescription:
      "University shortlisting, application preparation, SOP guidance and offer-letter follow-ups for students applying to institutions abroad.",
  },
  {
    slug: "work-permit-pr",
    name: "Work Permit & PR Services",
    subhead: "Work Permit & Permanent Residency",
    hook: "Explore work permits, post-study work options and PR pathways.",
    summary:
      "Eligibility assessment and pathway guidance for work permits, post-study work and permanent residency.",
    intro:
      "Looking to work or build a long-term future overseas? Monarch Visa Advisors provides guidance for eligible applicants exploring work permits, post-study work options, and permanent residency pathways. We assess your profile and help you understand the immigration routes that may match your education, work experience, skills, and future goals.",
    includesTitle: "Our Services Include",
    includes: [
      "Work permit eligibility assessment",
      "PR profile evaluation",
      "Country and immigration pathway guidance",
      "Post-study work options",
      "Job-based immigration guidance",
      "Application and documentation support",
    ],
    closing: "Explore the right pathway for your overseas career.",
    image: "/images/service-work-permit-pr.jpg",
    imageAlt: "A calm modern workspace with a laptop by a window",
    metaTitle: "Work Permit & PR Services | Overseas Immigration Pathways | Monarch Visa Advisors",
    metaDescription:
      "Profile assessment and pathway guidance for work permits, post-study work options and permanent residency — matched to your education, experience and goals.",
  },
  {
    slug: "documentation-visa-filing",
    name: "Documentation & Visa Filing",
    subhead: "Documentation & Visa Filing",
    hook: "Accurate, complete and well-presented visa files.",
    summary:
      "Documentation checklists, review and verification, and visa file preparation and filing support.",
    intro:
      "A well-prepared visa application starts with accurate documentation. Monarch Visa Advisors provides professional assistance in preparing, reviewing, and organizing your visa file according to the requirements of the relevant immigration authorities. Our goal is to ensure your application is complete, consistent, and properly presented.",
    includesTitle: "Our Services Include",
    includes: [
      "Complete visa documentation checklist",
      "Financial and sponsor documentation guidance",
      "Application form assistance",
      "Document review and verification",
      "Visa file preparation",
      "Application filing support",
    ],
    closing: "Get your visa application prepared with attention to detail.",
    image: "/images/service-documentation-visa-filing.jpg",
    imageAlt: "A person completing paperwork with a pen at a desk",
    metaTitle: "Documentation & Visa Filing Assistance | Monarch Visa Advisors",
    metaDescription:
      "Professional preparation, review and organisation of your visa file — documentation checklists, financial documents, form assistance and filing support.",
  },
  {
    slug: "test-preparation",
    name: "Test Preparation",
    subhead: "IELTS | PTE | TOEFL Test Preparation",
    hook: "Structured coaching to improve your English test score.",
    summary:
      "IELTS, PTE and TOEFL coaching with expert trainers, exam strategies, mock tests and flexible batches.",
    intro:
      "Strong English language scores can be an important part of your study abroad journey. Our test preparation programs focus on helping students improve their performance through structured training, practical strategies, and regular practice.",
    includesTitle: "Our Training Includes",
    includes: [
      "IELTS, PTE & TOEFL preparation",
      "Expert-led training",
      "Speaking, listening, reading & writing practice",
      "Exam-focused strategies",
      "Mock tests and performance evaluation",
      "Flexible batches and personal attention",
    ],
    closing: "Prepare smarter. Improve your score. Move closer to your study abroad goals.",
    image: "/images/service-test-preparation.jpg",
    imageAlt: "Stacked books with colourful stationery",
    metaTitle: "IELTS, PTE & TOEFL Test Preparation | Coaching & Mock Tests | Monarch Visa Advisors",
    metaDescription:
      "Structured IELTS, PTE and TOEFL coaching with expert trainers, exam-focused strategies, mock tests and flexible batches with personal attention.",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
