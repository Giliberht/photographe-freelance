"use client";

import { Section } from "./section";
import { Badge } from "@/components/ui/badge";
import seances from "@/lib/data/seanceData";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

export const Service = () => {
  return (
    <Section className="flex flex-col items-center justify-center gap-8 bg-gray-100 py-10">
      <div className="mb-5 text-center mt-8 max-sm:px-5">
        <Badge variant={"outline"} className="mb-2">
          Services
        </Badge>
        <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Photographie sur mesure pour chaque occasion
        </h1>
      </div>
      <p className="max-sm:px-5 text-center">
        Que ce soit pour un mariage, une séance en famille ou un événement
        spécial, je suis là pour immortaliser vos souvenirs avec passion et
        créativité.
      </p>
      <div className=" max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-sm:hidden">
        {seances.slice(0, 3).map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-black/10 hover:shadow-lg hover:scale-105 transition-transform ease-in-out p-4 flex flex-col items-start"
          >
            <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
            <p className="text-sm leading-relaxed mb-2">
              {service.description}
            </p>
            <span className="text-sm font-semibold">{service.price}</span>
            <span className="text-sm text-gray-500">{service.duration}</span>
            <div className="flex mt-4 space-x-2">
              {service.images.map((image, imgIndex) => (
                <Image
                  key={imgIndex}
                  src={image}
                  alt={service.title}
                  width={150}
                  height={100}
                  className="rounded-md object-cover"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <Carousel className="w-full max-w-xs max-sm:block hidden">
        <CarouselContent>
          {seances.slice(0, 3).map((service, index) => (
            <CarouselItem key={index}>
              <div
                key={index}
                className="bg-white shadow-md rounded-lg border border-black/10 hover:shadow-lg p-4 flex flex-col items-start"
              >
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-sm leading-relaxed mb-2">
                  {service.description}
                </p>
                <span className="text-sm font-semibold">{service.price}</span>
                <span className="text-sm text-gray-500">
                  {service.duration}
                </span>
                <div className="flex mt-4 space-x-2">
                  {service.images.map((image, imgIndex) => (
                    <Image
                      key={imgIndex}
                      src={image}
                      alt={service.title}
                      width={150}
                      height={100}
                      className="rounded-md object-cover"
                    />
                  ))}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <motion.div whileTap={{ scale: 0.93 }} transition={{ ease: "easeOut" }}>
        <Link href="/prestation">
          <button className="group hover:cursor-pointer border-[#aa5949] bg-[#aa5949] text-[#f9f8f7] px-6 py-2 font-semibold rounded-sm hover:bg-[#aa4c4c] transition duration-300 mt-5 shadow-md mb-8">
            Découvrir les services & tarifs
            <FontAwesomeIcon
              icon={faChevronRight}
              className="ml-2 text-sm transition-transform duration-300 group-hover:translate-x-2"
            />
          </button>
        </Link>
      </motion.div>
    </Section>
  );
};
