import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "flag-icons/css/flag-icons.min.css";
import "./globals.css";
import { site } from "@/content/site";
import { JsonLd, organizationSchema } from "@/lib/jsonld";
import { Providers } from "@/components/layout/Providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Study Abroad & Immigration Consultants`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "study abroad consultants",
    "visa consultants Ahmedabad",
    "student visa assistance",
    "immigration consultancy",
    "PR and work permit guidance",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    title: `${site.name} — Study Abroad & Immigration Consultants`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Study Abroad & Immigration Consultants`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <JsonLd data={organizationSchema} />
        <Providers>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
