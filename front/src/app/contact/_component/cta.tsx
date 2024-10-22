import { LinkedinIcon } from "../../component/icon/linkedinicon";
import { FacebookIcon } from "../../component/icon/facebookIcon";
import { InstaIcon } from "../../component/icon/instaIcon";
import { TiktokIcon } from "../../component/icon/tiktokIcon";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const CTA = () => {
  return (
    <div className=" py-16">
      <div className="max-w-6xl flex flex-col items-center mx-auto px-4 text-center">
        <Badge variant="outline" className="mb-4">
          Social networks
        </Badge>
        <h2 className="scroll-m-20 pb-2 text-3xl text-center font-semibold tracking-tight">
          Suivez-Nous sur les Réseaux Sociaux
        </h2>
        <hr className="w-[500px] mb-8" />
        <p className="mb-4">
          Restez à jour avec nos dernières créations et offres !
        </p>
        <div className="mt-2 flex flex-col items-start">
          <div className="flex gap-3 ml-3">
            <Link
              target="_blank"
              href="https://www.linkedin.com"
              className="hover:scale-110 transition-transform duration-300"
              aria-label="LinkedIn Logo"
            >
              <LinkedinIcon size={40} id="linkedin" />
            </Link>
            <Link
              target="_blank"
              href="https://facebook.com"
              className="hover:scale-110 transition-transform duration-300"
              aria-label="Facebook Logo"
            >
              <FacebookIcon size={40} id="facebook" />
            </Link>
            <Link
              target="_blank"
              href="https://instagram.com"
              className="hover:scale-110 transition-transform duration-300"
              aria-label="Instagram Logo"
            >
              <InstaIcon size={40} id="instagram" />
            </Link>
            <Link
              target="_blank"
              href="https://tiktok.com"
              className="hover:scale-110 transition-transform duration-300"
              aria-label="Tiktok Logo"
            >
              <TiktokIcon size={40} id="tiktok" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
