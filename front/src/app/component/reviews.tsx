import { Section } from "./section";
import Image from "next/image";
import user2 from "../../../public/img/users/user2.jpg";
import user4 from "../../../public/img/users/user4.jpg";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const reviews = [
  {
    image: user4,
    name: "Victor",
    review:
      "Une expérience incroyable ! Les photos sont magnifiques et capturent parfaitement les moments spéciaux.",
    date: "10/10/2024",
  },
  {
    image: user2,
    name: "Marie",
    review:
      "Je suis tellement satisfaite des photos de notre mariage, le photographe était très professionnel.",
    date: "10/10/2024",
  },
  {
    image: user2,
    name: "Jean",
    review:
      "Un service exceptionnel ! Je recommande vivement pour tous vos besoins en photographie.",
    date: "10/10/2024",
  },
  {
    image: user4,
    name: "Jean",
    review:
      "Un service exceptionnel ! Je recommande vivement pour tous vos besoins en photographie.",
    date: "10/10/2024",
  },
];

export const Reviews = () => {
  return (
    <Section className="flex flex-col items-center justify-center gap-10 bg-gray-100 py-10">
      <div className="text-center mb-10 mt-8">
        <Badge variant={"outline"} className="mb-2">
          Avis Clients
        </Badge>
        <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Avis clients : des moments capturés à la perfection !
        </h1>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-14 gap-x-10 mb-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex flex-col items-start bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
          >
            {/* Citation Icon */}
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="text-[#aa5949] text-2xl absolute top-4 left-4"
            />
            {/* Image and Name */}
            <div className="flex items-center mb-4 mt-8">
              <Image
                src={review.image.src}
                alt={review.name}
                width={60}
                height={60}
                className="w-14 h-14 rounded-full mr-3 object-cover"
              />

              <div>
                <h3 className="font-semibold text-lg">{review.name}</h3>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              {/* Review Text */}
              <p className="ml-10 text-sm max-w-sm text-gray-700 leading-relaxed">
                {review.review}
              </p>
            </div>

            {/* Rating Stars */}
            <div className="mt-4 flex">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={i < 4 ? faStar : faStarHalfAlt}
                  className="text-yellow-500 text-sm mr-1"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
