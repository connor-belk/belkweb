import type { Metadata } from "next";
import "./globals.css";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";

import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Belk Web Development",
  description:
    "Quick, Easy, and local Web Development and administration services for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="flex flex-col h-[100%] overflow-x-hidden">
      <body className={`flex flex-col h-[100%] ${geistMono.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
