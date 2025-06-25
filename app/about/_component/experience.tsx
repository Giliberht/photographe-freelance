"use client";

import { Badge } from "@/components/ui/badge";
import { Section } from "../../component/section";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Trust from "@/lib/data/trustnoteData";
import reviews from "@/lib/data/reviewsData";
import {
  faChevronRight,
  faQuoteLeft,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Experience() {
  return (
    <Section className="">
      <div className="flex flex-col justify-center max-w-6xl mx-auto py-16 px-4">
        <div className="flex flex-col items-center">
          <Badge variant="outline" className="mb-4">
            Expertise
          </Badge>
          <h2 className="scroll-m-20 pb-2 text-3xl text-center font-semibold tracking-tight">
            Mon expertise et mes valeurs ajoutées
          </h2>
          <hr className="w-[500px] max-sm:w-[375px] mb-14" />
          <div className="">
            <div className="mb-8">
              <p className="text-md leading-relaxed">
                Avec plus de 5 années d&apos;expérience dans le domaine de la
                photographie, j&apos;ai eu l&apos;opportunité de travailler sur
                une large gamme de projets, allant des mariages intimes aux
                portraits professionnels, en passant par des séances lifestyle
                et des événements d&apos;entreprise. Mon approche unique
                garantit que chaque image raconte une histoire personnelle et
                mémorable.
              </p>
            </div>
            <div className="w-full max-sm:px-3">
              <h3 className="text-2xl font-semibold mb-4">
                Pourquoi choisir mes services :
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mb-10">
                {Trust.slice(6, 9).map((trust, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center bg-white p-4 rounded-lg border border-black/10 shadow-md hover:shadow-lg transition-shadow duration-300 relative"
                  >
                    <FontAwesomeIcon
                      icon={trust.icon}
                      className="text-[#aa4c4c] text-3xl mr-4"
                    />
                    <h4 className="text-xl font-semibold my-2">
                      {trust.title}
                    </h4>
                    <p className="text-gray-700">{trust.description}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold mb-4">
                  Ce que mes clients disent de moi :
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {reviews.slice(3, 5).map((review, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-start bg-white p-4 rounded-lg border border-black/10 shadow-md hover:shadow-lg transition-shadow duration-300 relative"
                    >
                      <FontAwesomeIcon
                        icon={faQuoteLeft}
                        className="text-[#aa5949] text-2xl absolute top-4 left-4"
                      />
                      <div className="flex items-center mb-2 mt-8">
                        <Image
                          src={review.image}
                          alt={review.name}
                          width={60}
                          height={60}
                          className="w-14 h-14 rounded-full mr-3 object-cover"
                        />
                        <p className="ml-4 text-sm max-w-sm text-gray-700 leading-relaxed">
                          {review.feedback}
                        </p>
                      </div>
                      <div className="mt-2 ml-2 flex items-center gap-6">
                        <h3 className="font-semibold text-lg">{review.name}</h3>
                        <span className="text-sm text-gray-500">
                          {review.date}
                        </span>
                        <span>
                          {[...Array(5)].map((_, i) => (
                            <FontAwesomeIcon
                              key={i}
                              icon={i < 4 ? faStar : faStarHalfAlt}
                              className="text-yellow-500 text-sm mr-1"
                            />
                          ))}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Link href="/contact">
            <button className="group hover:cursor-pointer flex items-center border-[#aa5949] bg-[#aa5949] text-[#f9f8f7] px-6 py-2 font-semibold rounded-sm hover:bg-[#aa4c4c] transition duration-300 mt-10 shadow-lg">
              Réserver une séance
              <FontAwesomeIcon
                icon={faChevronRight}
                className="ml-2 w-[16px] h-[16px] transition-transform duration-300 group-hover:translate-x-2"
              />
            </button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
