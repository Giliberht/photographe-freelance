import { Badge } from "@/components/ui/badge";
import { Section } from "../../component/section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

export default function Vision() {
  const services = [
    {
      title: "Authenticité & Spontanéité",
      images: [
        "/img/famille/fam5.jpg",
        "/img/couple/couple3.jpg",
        "/img/mariage/mariage8.jpg",
      ],
      description:
        "Mon style photographique est centré sur l'authenticité et la spontanéité. Je cherche à capturer des émotions réelles, des moments qui échappent souvent à l'œil mais qui racontent une histoire unique. Que ce soit un sourire subtil, un regard complice ou une scène fugace, chaque photo est le reflet d'un instant authentique.",
    },
    {
      title: "Discrétion & Proactivité",
      images: [
        "/img/famille/fam6.jpg",
        "/img/couple/couple6.jpg",
        "/img/professionnel/pro3.jpg",
      ],
      description:
        "Mon approche est à la fois discrète et proactive, privilégiant les prises de vue sur le vif pour capturer des instants naturels et intimes. Je crois que ce sont les détails inattendus qui rendent une photo vraiment spéciale. Mon travail vise à créer des souvenirs visuels qui transcendent le temps, et à faire en sorte que chaque image devienne une œuvre d'art personnelle.",
    },
  ];

  return (
    <Section className="">
      <div className="flex flex-col justify-center mx-auto py-16 px-4 bg-gray-100">
        <div className="flex flex-col items-center">
          <Badge variant="outline" className="mb-4">
            My vision
          </Badge>
          <h2 className="scroll-m-20 pb-2 text-3xl text-center font-semibold tracking-tight text-gray-900">
            Mon style, ma vision, mes valeurs
          </h2>
          <hr className="w-[425px] max-sm:w-[340px] mb-14" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-lg max-w-xl rounded-lg p-6 border border-gray-200 hover:shadow-2xl transition-shadow duration-300 focus-within:ring focus-within:ring-[#aa5949]"
              >
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  {service.title}
                </h2>
                <p className="text-md leading-relaxed text-gray-600">
                  {service.description}
                </p>
                <div className="max-sm:hidden flex mt-5 space-x-2 gap-x-3 justify-between">
                  {service.images.map((image, imgIndex) => (
                    <Image
                      key={imgIndex}
                      src={image}
                      alt={service.title}
                      width={160}
                      height={100}
                      className="rounded-md object-cover"
                    />
                  ))}
                </div>
                <div className="hidden max-sm:flex mt-5 space-x-2 gap-x-3 justify-between">
                  {service.images.slice(0, 2).map((image, imgIndex) => (
                    <Image
                      key={imgIndex}
                      src={image}
                      alt={service.title}
                      width={160}
                      height={100}
                      className="rounded-md object-cover"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Link href="/book">
            <button
              className="group hover:cursor-pointer flex items-center border-[#aa5949] bg-[#aa5949] text-[#f9f8f7] px-6 py-2 font-semibold rounded-sm hover:bg-[#aa4c4c] transition duration-300 mt-10 shadow-md focus:outline-none focus:ring-2 focus:ring-[#aa5949]"
              aria-label="Parcourir mon book"
            >
              Parcourir mon book
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
