"use client";

import { Section } from "./section";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import mariage from "../../public/img/mariage/mariage3.jpg";
import couple from "../../public/img/couple/couple3.jpg";
import famille from "../../public/img/famille/fam5.jpg";
import maternite from "../../public/img/maternite/mat3.jpg";
import pro from "../../public/img/professionnel/pro1.jpg";
import mariage2 from "../../public/img/mariage/mariage6.jpg";
import couple2 from "../../public/img/couple/couple1.jpg";
import famille2 from "../../public/img/famille/fam3.jpg";
import maternite2 from "../../public/img/maternite/mat4.jpg";
import pro2 from "../../public/img/professionnel/pro2.jpg";
import { Badge } from "@/components/ui/badge";

const images = [
  { src: mariage, alt: "mariage service" },
  { src: couple, alt: "couple" },
  { src: famille, alt: "famille" },
  { src: maternite, alt: "maternité" },
  { src: pro, alt: "professionnel" },
  { src: mariage2, alt: "mariage service" },
  { src: couple2, alt: "couple" },
  { src: famille2, alt: "famille" },
  { src: maternite2, alt: "maternité" },
  { src: pro2, alt: "professionnel" },
];

export const Gallery = () => {
  return (
    <Section className="flex flex-col items-center justify-center gap-10">
      <div className="mb-5 text-center max-sm:px-5">
        <Badge variant={"outline"} className="mb-2">
          Book
        </Badge>
        <h1 className="scroll-m-20 border-b pb-2 text-4xl tracking-tight">
          Des souvenirs précieux, capturés avec amour
        </h1>
      </div>
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-90%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ willChange: "transform" }}
        >
          {[...images, ...images].map((image, i) => (
            <motion.div
              className="flex-none mr-4 hover:scale-105 transition-transform duration-300"
              key={i}
            >
              <Image
                src={image.src}
                className="object-cover w-auto h-[250px] rounded-md"
                alt={image.alt}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="mt-5">
        <Link href="/gallery">
          <button className="group hover:cursor-pointer border-[#aa5949] bg-[#aa5949] text-[#f9f8f7] px-6 py-2 font-semibold rounded-sm hover:bg-[#aa4c4c] transition duration-300 flex items-center shadow-md">
            Explorez la galerie
            <FontAwesomeIcon
              icon={faChevronRight}
              className="ml-2 text-sm transition-transform duration-300 group-hover:translate-x-2"
            />
          </button>
        </Link>
      </div>
    </Section>
  );
};
