import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sakshi Sajwan — Full Stack & AI Engineer",
  description:
    "Portfolio of Sakshi Sajwan, a Full Stack & AI Engineer building modern web applications, intelligent systems, and user-focused digital experiences. Based in New Delhi, India.",
  keywords: [
    "Sakshi Sajwan",
    "Full Stack Engineer",
    "AI Engineer",
    "React Developer",
    "Frontend Developer",
    "Next.js",
    "Machine Learning",
    "New Delhi",
    "India",
  ],
  authors: [{ name: "Sakshi Sajwan" }],
  creator: "Sakshi Sajwan",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Sakshi Sajwan — Full Stack & AI Engineer",
    description:
      "Full Stack & AI Engineer building modern web applications and intelligent systems.",
    siteName: "Sakshi Sajwan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sakshi Sajwan — Full Stack & AI Engineer",
    description:
      "Full Stack & AI Engineer building modern web applications and intelligent systems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <body className={`${inter.className} bg-zinc-950 text-zinc-50 antialiased`}>
        {children}
      </body>
    </html>
  );
}