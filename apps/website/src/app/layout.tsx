import "@/styles/globals.css";
import { LogSnagProvider } from "@logsnag/next";
import "@midday/ui/globals.css";
import { cn } from "@midday/ui/utils";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import type { ReactElement } from "react";

const fontSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://midday.ai"),
  title: "Midday | The financial OS for your business",
  description:
    "Automate financial tasks, stay organized, and make informed decisions effortlessly.",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function Layout({
  children,
  params: { locale = "en" },
}: {
  children: ReactElement;
  params: { locale: string };
}) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <LogSnagProvider
          token={process.env.LOGSNAG_TOKEN!}
          project={process.env.LOGSNAG_PROJECT!}
        />
      </head>
      <body className={cn(fontSans.variable, "whitespace-pre-line")}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
