import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Lato } from "next/font/google";
import "./globals.css";
import { PageTransition } from "./animation/PageTransition";
import { Header } from "./component/header";
import { Footer } from "./component/footer";
import { Section } from "./component/section";
import { Spacing } from "./component/spacing";
import { cn } from "@/lib/utils";

const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-caption",
});

const LatoFont = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Photographe App",
  description: "A web site for a photographer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body
        className={cn(
          LatoFont.variable,
          PoppinsFont.variable,
          "font-sans h-full bg-background text-foreground"
        )}
      >
        <Section>
          <Header />
          <PageTransition>{children}</PageTransition>
          <Spacing size="xl" />
          <Footer />
        </Section>
      </body>
    </html>
  );
}
