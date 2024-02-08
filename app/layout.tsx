import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Alifuddin Zulkifli - Fullstack Developer",
  description:
    "Fullstack Web Developer and Software Developer, sometimes games developer.",
  generator: "Next.js",
  applicationName: "Alifuddin Zulkifli",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "web developer",
    "fullstack developer",
    "software developer",
    "backend engineer",
    "software engineer",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "Malaysia",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
    "fullstack developer portfolio",
    "software developer portfolio",
    "react developer portfolio",
    "web developer portfolio",
    "portfolio site",
    "developer portfolio",
    "web developer portfolio site",
    "fullstack developer portfolio site",
    "freelancer",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Alifuddin Zulkifli - Fullstack Developer",
    description:
      "Fullstack Web Developer and Software Developer, sometimes games developer. Available to work and freelancing projects.",
    url: "", //https://www.sitename.com
    siteName: "", //www.sitename.com
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Alifuddin Zulkifli - Fullstack Developer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alifuddin Zulkifli - Fullstack Developer",
    description:
      "Fullstack Web Developer and Software Developer, sometimes games developer. Available to work and freelancing projects.",
    creator: "Alifuddin",
    creatorId: "1243720976552144897",
    images: [
      "",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
