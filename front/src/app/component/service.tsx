"use client";

import { Section } from "./section";
import ServiceCard from "./_component/serviceCard";
import { Badge } from "@/components/ui/badge";
import services from "@/lib/serviceData";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const Service = () => {
  return (
    <Section className="flex flex-col items-center justify-center gap-8 bg-gray-100 py-10">
      <div className="mb-5 text-center mt-8">
        <Badge variant={"outline"} className="mb-2">
          Services
        </Badge>
        <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Photographie sur mesure pour chaque occasion
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-3 mr-32">
        {services.slice(0, 3).map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-3 ml-32">
        {services.slice(3, 6).map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      <Link href="/services" legacyBehavior>
        <button className="group border-[#aa5949] bg-[#aa5949] text-[#f9f8f7] px-6 py-2 font-semibold rounded-sm hover:bg-[#aa4c4c] transition duration-300 mt-5 shadow-md mb-8">
          Voir tous les tarifs
          <FontAwesomeIcon
            icon={faChevronRight}
            className="ml-2 text-sm transition-transform duration-300 group-hover:translate-x-2"
          />
        </button>
      </Link>
    </Section>
  );
};
