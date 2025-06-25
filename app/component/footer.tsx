import { FacebookIcon } from "./icon/facebookIcon";
import { InstaIcon } from "./icon/instaIcon";
import { LinkedinIcon } from "./icon/linkedinicon";
import { TiktokIcon } from "./icon/tiktokIcon";
import { Section } from "./section";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex justify-center bottom-0 bg-gray-100 pt-8 pb-6">
      <Section className="flex-col w-full max-w-6xl">
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-between mb-6">
          <Link href="/" className="flex items-center justify-between gap-4">
            <p className="text-primary/85 text-lg uppercase font-bold">
              Focus par Jade · Photographe
            </p>
          </Link>
          <div className="flex gap-3 ml-3">
            <Link
              target="_blank"
              href="https://www.linkedin.com"
              className="hover:scale-110 transition-transform duration-300"
              aria-label="LinkedIn Logo"
            >
              <LinkedinIcon size={30} id="linkedin" />
            </Link>
            <Link
              target="_blank"
              href="https://facebook.com"
              className="hover:scale-110 transition-transform duration-300"
              aria-label="LinkedIn Logo"
            >
              <FacebookIcon size={30} id="facebook" />
            </Link>
            <Link
              target="_blank"
              href="https://instagram.com"
              className="hover:scale-110 transition-transform duration-300"
              aria-label="LinkedIn Logo"
            >
              <InstaIcon size={30} id="instagram" />
            </Link>
            <Link
              target="_blank"
              href="https://tiktok.com"
              className="hover:scale-110 transition-transform duration-300"
              aria-label="Tiktok Logo"
            >
              <TiktokIcon size={30} id="tiktok" />
            </Link>
          </div>
          <div className="flex text-sm flex-row items-center gap-8 max-sm:px-0.5">
            <Link
              href="/mention-legale"
              className="text-primary/85 transition-colors duration-300"
            >
              Mentions légales
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
          © 2025
          <Link
            href="https://www.linkedin.com/in/victor-gibert/"
            className="hover:text-primary/85 ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gibert Victor™.
          </Link>
          All Rights Reserved.
        </div>
      </Section>
    </footer>
  );
};
