import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MasterKey | Loja de games digitais",
    template: "%s | MasterKey",
  },
  description:
    "E-commerce de jogos digitais desenvolvido com Next.js, TypeScript e Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
