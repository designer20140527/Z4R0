import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Aldrich } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const aldrich = Aldrich({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-aldrich",
});

export const metadata: Metadata = {
  title: "Z4R0",
  description: "Z4R0 is a smart agent protocol built on Ethereum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${aldrich.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
