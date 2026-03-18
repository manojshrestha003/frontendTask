import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SkillShikshya - Frontend Tasks",
  description: "SkillShikshya Frontend Design Task - UI Development from Figma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
