import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  EB_Garamond,
  IM_Fell_English_SC,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-eb-garamond",
});

const imFell = IM_Fell_English_SC({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-im-fell",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Alquimia | Comunidad",
  description:
    "Una comunidad abierta y gratuita donde compartimos conocimiento sobre inteligencia artificial, automatización y productividad.",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${ebGaramond.variable} ${imFell.variable} ${jetbrains.variable}`}
    >
      <body className="font-sans antialiased bg-bg">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
