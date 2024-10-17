"use client";

import { Section } from "./section";
import { Badge } from "@/components/ui/badge";
import "leaflet/dist/leaflet.css";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Bandeau from "../../../public/img/famille/fam2.jpg";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-center justify-center gap-10 px-4 lg:px-0">
      {/* Titre et badge */}
      <div className="text-center">
        <Badge variant="outline" className="mb-2">
          Contact
        </Badge>
        <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Laissez-moi capturer votre histoire
        </h1>
      </div>

      <p className="text-lg text-gray-600 mt-2 text-center max-w-3xl">
        Que ce soit pour un événement particulier ou pour un moment du
        quotidien, je me ferai un plaisir de figer vos souvenirs.
      </p>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-x-32 gap-y-6 w-full mt-5">
        <div className="flex flex-col text-center lg:text-left max-w-xs lg:max-w-sm gap-y-5">
          <h2 className="text-lg font-semibold">Mes informations</h2>
          <div className="flex flex-col gap-2">
            {" "}
            <p className="text-md">
              Email :{" "}
              <a
                href="mailto:roxanebreard.photographe@gmail.com"
                className="text-blue-500 hover:underline"
                aria-label="Envoyer un email"
              >
                jadebailly.photographe@example.com
              </a>
            </p>
            <p className="text-md">
              Téléphone :{" "}
              <a
                href="mailto:roxanebreard.photographe@gmail.com"
                className="text-blue-500 hover:underline"
                aria-label="Envoyer un email"
              >
                02 33 00 00 00
              </a>
            </p>
            <p className="text-md">
              Adresse :{" "}
              <a
                href="mailto:roxanebreard.photographe@gmail.com"
                className="text-blue-500 hover:underline"
                aria-label="Envoyer un email"
              >
                82 rue example, 75056 Paris, France
              </a>
            </p>
            <div className="mt-2">
              <p>Réseaux sociaux :</p>
              <a
                href="https://facebook.com"
                className="text-blue-500 hover:underline"
                aria-label="Facebook"
              >
                Facebook
              </a>{" "}
              |
              <a
                href="https://instagram.com"
                className="text-blue-500 hover:underline"
                aria-label="Instagram"
              >
                Instagram
              </a>
            </div>
          </div>

          <Link href="/services" legacyBehavior>
            <button
              className="group border-[#aa5949] bg-[#aa5949] text-[#f9f8f7] px-6 py-2 font-semibold rounded-sm hover:bg-[#aa4c4c] transition duration-300 mt-5 shadow-md mb-8"
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
        <div className="w-full lg:w-[500px] h-70 rounded-lg shadow-md overflow-hidden">
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
