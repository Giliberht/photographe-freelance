import { Section } from "./section";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import reviews from "@/lib/data/reviewsData";

export const Reviews = () => {
  return (
    <Section className="flex flex-col items-center justify-center gap-10 bg-gray-100 py-10 max-sm:px-5 mx-auto">
      <div className="text-center mb-10 mt-8">
        <Badge variant={"outline"} className="mb-2">
          Reviews
        </Badge>
        <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Avis clients : des moments capturés à la perfection !
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-14 gap-x-10 mb-8">
        {reviews.slice(0, 4).map((review, index) => (
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
    </Section>
  );
};
