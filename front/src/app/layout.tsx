import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Lato } from "next/font/google";
import "./globals.css";
import { PageTransition } from "./component/animation/PageTransition";
import { Header } from "./component/header";
import { Footer } from "./component/footer";
import { Section } from "./component/section";
import { Spacing } from "./component/spacing";
import { cn } from "@/lib/utils";
import { Toaster } from "react-hot-toast";

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

// Metadata for SEO
export const metadata: Metadata = {
  title: "Jade Bailly | Photographe",
  description:
    "Découvrez le travail de Jade Bailly photographe spécialisé dans la photographie de mariage, de portraits, et bien plus encore. Contactez-moi pour vos séances photo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <head>
        {/* Meta tags for SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Jade Bailly | Photographe Freelance</title>
        <meta
          name="description"
          content="Découvrez le travail de Jade Bailly photographe spécialisé dans la photographie de mariage, de portraits, et bien plus encore. Contactez-moi pour vos séances photo!"
        />
        <meta
          name="keywords"
          content="photographe, freelance, mariage, portrait, photographie, événements, lifestyle"
        />
        <meta
          property="og:title"
          content="Jade Bailly | Photographe Freelance"
        />
        <meta
          property="og:description"
          content="Découvrez le travail de votre photographe freelance..."
        />
        <meta property="og:image" content="URL_de_votre_image" />
        <meta property="og:url" content="URL_de_votre_site" />
      </head>
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
        <Toaster position="bottom-right" reverseOrder={false} />
      </body>
    </html>
  );
}
