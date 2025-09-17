import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./_components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
    <html lang="en" className="flex flex-col h-[100%]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col h-[100%]`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
