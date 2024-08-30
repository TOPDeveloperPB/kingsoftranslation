import { Breadcrumbs } from "@/components/core/Breadcrumbs";
import "./globals.css";
import type { Metadata } from "next";
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
  title: "kingsoftranslation",
  description: "kingsoftranslation app for translations",
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
