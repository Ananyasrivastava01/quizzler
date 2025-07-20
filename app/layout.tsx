import type { Metadata } from "next";
import { Geist } from 'next/font/google';
import "./globals.css";
import Footer from "@/components/Footer";
import SessionProviderWrapper from "@/components/SessionProviderWrapper";
import Head from 'next/head';

const geist = Geist({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "AnaQuest - Master Analytical Skills",
  description: "Your ultimate platform for mastering analytical questions for competitive exams and placements. Interactive, beautiful, and fun!",
  icons: {
    icon: "/globe.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Your ultimate platform for mastering analytical questions for competitive exams and placements. Interactive, beautiful, and fun!" />
        <meta property="og:title" content="AnaQuest - Master Analytical Skills" />
        <meta property="og:description" content="Your ultimate platform for mastering analytical questions for competitive exams and placements. Interactive, beautiful, and fun!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anaquest.com" />
        <meta property="og:image" content="/globe.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AnaQuest - Master Analytical Skills" />
        <meta name="twitter:description" content="Your ultimate platform for mastering analytical questions for competitive exams and placements. Interactive, beautiful, and fun!" />
        <meta name="twitter:image" content="/globe.svg" />
      </Head>
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only absolute top-2 left-2 z-50 bg-primary text-white px-4 py-2 rounded">Skip to main content</a>
        <SessionProviderWrapper>
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
        </SessionProviderWrapper>
        <Footer />
      </body>
    </html>
  );
}
