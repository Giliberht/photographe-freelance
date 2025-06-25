"use client";

import { Section } from "./section";
import Image from "next/image";
import myface from "../../public/img/portrait/port2.jpg";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const About = () => {
  return (
    <Section className="flex items-center justify-center max-w-6xl gap-10">
      <div className="w-1/4 h-1/4 mr-28 max-sm:hidden">
        <Image
          src={myface}
          className="object-fill rounded-sm shadow-lg"
          alt="photographe's picture"
        />
      </div>

      <div className="flex flex-col items-center justify-center px-5">
        <div className="flex flex-col items-start gap-5">
          <div className="mb-2 ">
            <Badge variant={"outline"} className="mb-2">
              About
            </Badge>
            <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Mon histoire à travers l&apos;objectif
            </h1>
          </div>
          <div className="hidden max-sm:block">
            <Image
              src={myface}
              className="object-cover rounded-sm shadow-lg w-[400px] h-[280px]"
              alt="photographe's picture"
            />
          </div>
          <p className="text-lmd max-w-sm ml-2">
            Passionné par la photographie, je m&apos;efforce de capturer
            l&apos;authenticité et la beauté de chaque moment. Mon objectif est
            de révéler les émotions et de préserver vos souvenirs pour
            qu&apos;ils durent à jamais, comme un précieux trésor à revisiter.
          </p>
          <Link href="/about">
            <button className="group hover:cursor-pointer border-[#aa5949] bg-[#aa5949] text-[#f9f8f7] px-8 py-2 font-semibold rounded-sm hover:bg-[#aa4c4c] transition-colors duration-300 ml-2 mt-4 flex items-center shadow-md">
              Entrez dans les coulisses
              <FontAwesomeIcon
                icon={faChevronRight}
                className="ml-2 text-sm transition-transform duration-300 group-hover:translate-x-2"
              />
            </button>
          </Link>
        </div>
      </div>
    </Section>
  );
};
