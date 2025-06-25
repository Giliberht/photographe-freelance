"use client";

import { Section } from "./section";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Bandeau from "../../public/img/famille/fam2.jpg";
import { LinkedinIcon } from "./icon/linkedinicon";
import { FacebookIcon } from "./icon/facebookIcon";
import { InstaIcon } from "./icon/instaIcon";
import { TiktokIcon } from "./icon/tiktokIcon";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-center justify-center gap-10 px-4 lg:px-0">
      <div className="text-center max-sm:px-5">
        <Badge variant="outline" className="mb-2">
          Contact
        </Badge>
        <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Laissez-moi capturer votre histoire
        </h1>
      </div>
      <div className="w-full lg:w-[500px] h-70 rounded-lg shadow-md overflow-hidden hidden max-sm:block">
        <Image
          src={Bandeau}
          alt="image contact"
          className="object-cover opacity-90"
          priority={true}
          quality={80}
        />
      </div>
      <p className="text-lg text-gray-600 mt-2 text-center max-w-3xl max-sm:hidden">
        Que ce soit pour un événement particulier ou pour un moment du
        quotidien, je me ferai un plaisir de figer vos souvenirs.
      </p>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-x-32 gap-y-6 w-full mt-5">
        <div className="flex flex-col text-center lg:text-left max-w-xs lg:max-w-sm gap-y-5">
          <h2 className="text-lg flex font-semibold">Mes informations :</h2>
          <div className="flex flex-col items-start gap-2">
            <p className="text-md flex gap-2">
              Email :
              <a
                href="mailto:roxanebreard.photographe@gmail.com"
                className="text-[#aa4c4c] hover:underline"
                aria-label="Envoyer un email"
              >
                focusparjade.photographe@example.com
              </a>
            </p>
            <p className="text-md">
              Téléphone :{" "}
              <a
                href="https://wa.me/+123456789"
                className="text-[#aa4c4c] hover:underline"
                aria-label="Appeler"
              >
                +123456789
              </a>
            </p>
            <p className="text-md">
              Adresse :{" "}
              <a
                href="https://www.google.com/maps?q=82+rue+Example,+75056+Paris,+France"
                className="text-[#aa4c4c] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Voir l'adresse sur Google Maps"
              >
                82 rue exemple, 75056 Paris, France
              </a>
            </p>
            <div className="mt-2 flex flex-col items-start">
              <p className="mb-3">Réseaux sociaux :</p>
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

          <Link href="/contact">
            <button
              className="group hover:cursor-pointer border-[#aa5949] bg-[#aa5949] text-[#f9f8f7] px-6 py-2 font-semibold rounded-sm hover:bg-[#aa4c4c] transition duration-300 mt-5 shadow-md mb-8"
              aria-label="Voir tous les tarifs"
            >
              Réserver une séance
              <FontAwesomeIcon
                icon={faChevronRight}
                className="ml-2 text-sm transition-transform duration-300 group-hover:translate-x-2"
              />
            </button>
          </Link>
        </div>
        <div className="w-full lg:w-[500px] h-70 rounded-lg shadow-md overflow-hidden max-sm:hidden">
          <Image
            src={Bandeau}
            alt="image contact"
            className="object-cover opacity-90"
            priority={true}
            quality={80}
          />
        </div>
      </div>
    </Section>
  );
};
