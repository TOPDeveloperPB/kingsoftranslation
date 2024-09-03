import "./globals.css";
import favicon from "./favicon.png";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/core/Breadcrumbs";
import { PT_Sans, PT_Sans_Caption } from "next/font/google";

const pt_sans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--pt_sans",
});

const pt_sans_caption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--caption",
});

export const metadata: Metadata = {
  title: "Kings of translation",
  description: "Kings of translation app for translations",
  icons: favicon.src,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={pt_sans.style}
        className={`${pt_sans.variable} ${pt_sans_caption.variable}`}
      >
        <Breadcrumbs />
        <main>{children}</main>
      </body>
    </html>
  );
}
