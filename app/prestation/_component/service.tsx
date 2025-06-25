"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Section } from "../../component/section";
import { Badge } from "@/components/ui/badge";
import services from "@/lib/data/seanceData";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  const rowsPerPage = 6;
  const rowsPerPageSm = 4;
  const [startIndex, setStartIndex] = useState(0);
  const [categoryFilter, setCategoryFilter] = useState("tous");

  const filteredservices = services.filter((projet) => {
    const categoryMatch =
      categoryFilter === "tous" || projet.cat.includes(categoryFilter);
    return categoryMatch;
  });

  return (
    <Section className="max-w-6xl">
      <Breadcrumb className="max-sm:ml-5">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Mes services</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col items-center max-w-6xl mx-auto mt-20">
        <Badge variant="outline" className="mb-4">
          Mes Services
        </Badge>
        <h2 className="scroll-m-20 pb-2 text-3xl text-center font-semibold tracking-tight">
          Explorer les séances photos
        </h2>
        <hr className="w-[350px] mb-10" />

        <div className="flex flex-col items-center">
          <div className="grid grid-cols-3 mb-4 gap-8 items-center max-sm:flex max-sm:flex-col max-sm:gap-1 max-sm:mt-6">
            <Select
              onValueChange={(value) => setCategoryFilter(value)}
              aria-label="Catégorie filter"
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Catégorie" />
              </SelectTrigger>
              <SelectContent className="bg-white border-black/10">
                <SelectItem value="tous">Tous</SelectItem>
                <SelectItem value="mariage">Mariage</SelectItem>
                <SelectItem value="portrait">Portrait</SelectItem>
                <SelectItem value="maternite">Maternité</SelectItem>
                <SelectItem value="professionel">Professionel</SelectItem>
                <SelectItem value="couple">Couple</SelectItem>
                <SelectItem value="famille">Famille</SelectItem>
              </SelectContent>
            </Select>
            <Pagination className="my-10">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    className={
                      startIndex === 0
                        ? "pointer-events-none opacity-50"
                        : undefined
                    }
                    onClick={() => setStartIndex(startIndex - rowsPerPage)}
                  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    className={
                      startIndex + rowsPerPage >= filteredservices.length
                        ? "pointer-events-none opacity-50"
                        : undefined
                    }
                    onClick={() => setStartIndex(startIndex + rowsPerPage)}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-sm:hidden">
            {filteredservices
              .slice(startIndex, startIndex + rowsPerPage)
              .map((service, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg border border-black/10 hover:shadow-lg hover:scale-102 p-4 flex flex-col items-start"
                >
                  <h4 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h4>
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
              ))}
          </div>
          <div className="hidden max-sm:items-center max-sm:flex max-sm:flex-col gap-6 px-5">
            {filteredservices
              .slice(startIndex, startIndex + rowsPerPageSm)
              .map((service, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg border border-black/10 hover:shadow-lg p-4 flex flex-col items-start"
                >
                  <h4 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h4>
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
              ))}
          </div>
          <Link href="/contact">
            <button
              className="group hover:cursor-pointer border-[#aa5949] bg-[#aa5949] text-[#f9f8f7] px-6 py-2 font-semibold rounded-sm hover:bg-[#aa4c4c] transition duration-300 mt-10 shadow-md mb-8"
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
      </div>
    </Section>
  );
}
