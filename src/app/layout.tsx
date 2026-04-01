import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Poojan Mittapalli | Oracle Cloud Analyst & Full Stack Developer",
  description: "Oracle Cloud Analyst, Full Stack Developer, and Photographer. Specializing in Enterprise Systems, AI/ML Solutions, and Modern Cloud Technologies.",
  keywords: ["Oracle Cloud", "Cloud Analyst", "Full Stack Developer", "AI/ML", "Data Analytics", "Photography"],
  authors: [{ name: "Poojan Mittapalli" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://poojan.dev",
    title: "Poojan Mittapalli Portfolio",
    description: "Oracle Cloud Analyst, Full Stack Developer, and Photographer specializing in Enterprise Systems and AI Solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
