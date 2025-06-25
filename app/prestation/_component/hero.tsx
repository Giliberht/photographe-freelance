"use client";

import { Section } from "../../component/section";
import Image from "next/image";
import Bandeau from "../../../public/img/professionnel/pro1.jpg";

export const Hero = () => {
  return (
    <Section className="relative flex max-md:flex-col items-center justify-center">
      <div className="relative w-full h-[350px] max-md:h-[250px]">
        <Image
          src={Bandeau}
          className="object-cover object-bottom"
          alt="bandeau accueil"
          fetchPriority="high"
          fill
        />
        <div className="absolute inset-0 bg-[#aa5949]/10 via-transparent"></div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-[#f9f8f7] gap-5 px-4">
        <h1 className="text-5xl font-bold uppercase tracking-wide max-md:text-3xl text-center text-shadow">
          Découvrez <br /> mes services de photographie
        </h1>
      </div>
    </Section>
  );
};
