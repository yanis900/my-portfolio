import "./globals.css";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans `}
      >
        {children}
        <Analytics />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
