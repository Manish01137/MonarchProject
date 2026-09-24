export type TeamMember = {
  name: string;
  role: string;
  photo: string;
};

// Real names/roles as supplied by the client. Photos are Unsplash placeholders
// (public/team/) standing in for real headshots — swap the files for actual
// staff photos whenever they're available; the component/layout won't change.
export const team: TeamMember[] = [
  { name: "Dipin Neduthody", role: "Co-Founder", photo: "/team/dipin-neduthody.jpg" },
  {
    name: "Beena Das",
    role: "Immigration Sales – Branch Manager",
    photo: "/team/beena-das.jpg",
  },
  { name: "Sumeeta Gharti", role: "HoD, Study Visa", photo: "/team/sumeeta-gharti.jpg" },
  {
    name: "Krithika R",
    role: "Head of Operations, Immigration",
    photo: "/team/krithika-r.jpg",
  },
  { name: "Miloni Panchal", role: "Counsellor, Study Visa", photo: "/team/miloni-panchal.jpg" },
  {
    name: "Anushka Shibu John",
    role: "File Processing Executive, Immigration",
    photo: "/team/anushka-shibu-john.jpg",
  },
  { name: "Sahil Khatri", role: "Faculty, Coaching", photo: "/team/sahil-khatri.jpg" },
  { name: "Manisha Rawat", role: "Front Desk Executive", photo: "/team/manisha-rawat.jpg" },
];
