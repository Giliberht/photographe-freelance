import { Section } from "./section";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex justify-center bottom-0 bg-gray-100  py-6">
      <Section className="flex-col w-full max-w-6xl">
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-between mb-6">
          <Link href="/" className="flex items-center justify-between gap-4">
            <p className="text-primary/85 text-lg uppercase font-bold">
              Jade Bailly · Photographe
            </p>
          </Link>
          <div className="flex text-sm flex-row items-center gap-8">
            <Link
              href="/mention-legale"
              className="text-primary/85 transition-colors duration-300"
            >
              Mentions légales
            </Link>
            <Link
              href="/conditions-generales"
              className="text-primary/85 transition-colors duration-300"
            >
              Conditions générales
            </Link>
            <Link
              href="/politique-de-cookie"
              className="text-primary/85 transition-colors duration-300"
            >
              Politique de cookies
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-700 mb-4"></div>
        <div className="text-xs text-primary/85 transition-colors duration-300 flex justify-center sm:text-center">
          © 2024
          <Link href="/" className="hover:text-primary/85 ml-1">
            Gibert Victor™.
          </Link>
          All Rights Reserved.
        </div>
      </Section>
    </footer>
  );
};
