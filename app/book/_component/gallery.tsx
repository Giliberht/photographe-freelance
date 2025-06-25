"use client";
import * as React from "react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Section } from "../../component/section";
import imageGallery from "@/lib/data/imageGalleryData";
import Image from "next/image";
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

export default function Gallery() {
  const rowsPerPage = 9;
  const rowsPerPageSm = 4;
  const [startIndex, setStartIndex] = useState(0);
  const [categoryFilter, setCategoryFilter] = useState("tous");

  const filteredGallery = imageGallery.filter((image) => {
    const categoryMatch =
      categoryFilter === "tous" || image.cat.includes(categoryFilter);
    return categoryMatch;
  });

  const handleCategoryChange = (value: string) => {
    setCategoryFilter(value);
    setStartIndex(0);
  };

  return (
    <Section className="max-w-6xl">
      <Breadcrumb className="max-sm:ml-5">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Mon travail</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col justify-center mx-auto py-16 px-4">
        <div className="flex flex-col items-center">
          <Badge variant="outline" className="mb-4">
            Mon book
          </Badge>
          <h2 className="scroll-m-20 pb-2 text-3xl text-center font-semibold tracking-tight">
            Mon portfolio
          </h2>
          <hr className="w-[200px]" />
          <div className="mt-8">
            <div className="grid grid-cols-3 mb-4 gap-8 items-center max-sm:flex max-sm:flex-col max-sm:gap-1 max-sm:mt-6">
              <Select
                onValueChange={handleCategoryChange}
                aria-label="Catégorie filter"
              >
                <SelectTrigger className="w-[180px] ">
                  <SelectValue placeholder="Catégorie" />
                </SelectTrigger>
                <SelectContent className="bg-white border-black/10">
                  <SelectItem value="tous">Tous</SelectItem>
                  <SelectItem value="mariage">Mariage</SelectItem>
                  <SelectItem value="portrait">Portrait</SelectItem>
                  <SelectItem value="maternite">Maternité</SelectItem>
                  <SelectItem value="professionnel">Professionnel</SelectItem>
                  <SelectItem value="couple">Couple</SelectItem>
                  <SelectItem value="famille">Famille</SelectItem>
                  <SelectItem value="born">Naissance</SelectItem>
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
                        startIndex + rowsPerPage >= filteredGallery.length
                          ? "pointer-events-none opacity-50"
                          : undefined
                      }
                      onClick={() => setStartIndex(startIndex + rowsPerPage)}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-sm:hidden gap-6">
              {filteredGallery
                .slice(startIndex, startIndex + rowsPerPage)
                .map((image, index) => (
                  <div
                    key={index}
                    className="relative group overflow-hidden rounded-lg shadow-md w-[350px] h-[200px]"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      layout="responsive"
                      width={image.width}
                      height={image.height}
                      className="object-cover transform transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                      <p className="text-white text-lg">{image.alt}</p>
                    </div>
                  </div>
                ))}
            </div>
            <div className="hidden max-sm:items-center max-sm:flex max-sm:flex-col gap-6 ">
              {filteredGallery
                .slice(startIndex, startIndex + rowsPerPageSm)
                .map((image, index) => (
                  <div
                    key={index}
                    className="relative group overflow-hidden rounded-lg shadow-md w-[350px] h-[200px]"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      layout="responsive"
                      width={image.width}
                      height={image.height}
                      className="object-cover transform transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                      <p className="text-white text-lg">{image.alt}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
