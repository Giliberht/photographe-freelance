"use client";

import { Section } from "./section";
import Image from "next/image";
import Bandeau from "../../../public/img/famille/fam2.jpg";

export const Hero = () => {
  return (
    <Section className="relative flex max-md:flex-col items-center">
      <div className="relative w-full h-[475px]">
        <Image
          src={Bandeau}
          className="object-cover opacity-90"
          alt="bandeau accueil"
          fetchPriority="high"
          fill
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-[#f9f8f7] gap-5">
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-5xl font-bold uppercase tracking-wide">
            Jade Bailly
          </h1>
          <p className="text-lg text-center max-w-md">
            Immortalisez et gardez un souvenir de vos moments précieux !
          </p>
        </div>
      </div>
    </Section>
  );
};
