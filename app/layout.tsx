import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rheinland Jobs - Your Premier Job Consultancy",
  description: "Discover tailored career solutions and expert guidance for your next career move with Rheinland Jobs, the premier job consultancy connecting talent with opportunities. Let us navigate the path to your professional success together.",
  keywords: "jobs, career, consultancy, opportunities, professional success, Rheinland Jobs, Germany, job search, employment, recruitment, HR services",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/rheinlandLogoHeader.png" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}</body>
    </html>
  );
}
