import React from "react";
import Image from "next/image";
import reviews from "@/lib/data/reviewsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Badge } from "@/components/ui/badge";

const Reviews: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container flex flex-col mx-auto items-center text-center">
        <Badge variant="outline" className="mb-4">
          Testimonials
        </Badge>
        <h2 className="scroll-m-20 pb-2 text-3xl text-center font-semibold tracking-tight">
          Témoignages des clients
        </h2>
        <hr className="w-[315px] mb-14" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-sm:px-5">
          {reviews.slice(4, 7).map((review, index) => (
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
                <span className="text-sm text-gray-500">{review.date}</span>
                <span className="flex">
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
    </section>
  );
};

export default Reviews;
