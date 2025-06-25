import { FacebookIcon } from "./icon/facebookIcon";
import { InstaIcon } from "./icon/instaIcon";
import { LinkedinIcon } from "./icon/linkedinicon";
import { TiktokIcon } from "./icon/tiktokIcon";
import { GithubIcon } from "./icon/githubIcon";
import { Section } from "./section";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex justify-center bottom-0 bg-gray-100 pt-8 pb-6">
      <Section className="flex-col w-full max-w-6xl">
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-between mb-6">
          <Link href="/" className="flex items-center justify-between gap-4">
            <p className="text-primary/85 text-lg uppercase font-bold hover:text-[#8e4b3b] transition">
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
              className=" hover:text-[#8e4b3b] transition ml-1"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-de-cookie"
              className=" hover:text-[#8e4b3b] transition ml-1"
            >
              Politique de cookies
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-700 mb-4"></div>
        <div className="text-xs text-primary/85 transition-colors duration-300 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 sm:text-center">
          <div className="flex items-center">
            © 2025 - Site fictif conçu par
            <Link
              href="https://gibertvictor.fr/"
              className="text-[#aa5949] hover:text-[#8e4b3b] transition ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gibert Victor™.
            </Link>
          </div>
          <div className="flex gap-2 items-center mt-2 sm:mt-0">
            <Link
              href="https://www.linkedin.com/in/victor-gibert/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:scale-110 transition-transform duration-300"
            >
              <LinkedinIcon size={20} id="footer-linkedin" />
            </Link>
            <Link
              href="https://github.com/Giliberht"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:scale-110 transition-transform duration-300"
            >
              <GithubIcon size={20} />
            </Link>
          </div>
        </div>
      </Section>
    </footer>
  );
};
