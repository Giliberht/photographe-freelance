import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const CTA = () => {
  return (
    <div className=" py-16">
      <div className="max-w-6xl flex flex-col items-center mx-auto px-4 text-center">
        <Badge variant="outline" className="mb-4">
          Reservation
        </Badge>
        <h2 className="scroll-m-20 pb-2 text-3xl text-center font-semibold tracking-tight">
          Prêt à capturer vos moments précieux ?
        </h2>
        <hr className="w-[500px] max-sm:w-[380px] mb-14" />
        <p className="text-lg mb-8">
          Que ce soit pour un mariage, un événement spécial ou une séance
          personnelle, je suis là pour immortaliser vos moments. Prenez contact
          dès maintenant !
        </p>
        <div className="flex justify-center gap-6 max-sm:flex-col">
          <Link href="/contact">
            <button className="flex hover:cursor-pointer items-center bg-[#ffffff] text-[#aa5949] border-2 border-[#aa5949] px-6 py-1 rounded-md shadow-lg hover:bg-[#aa4c4c] hover:text-[#ffffff] transition duration-300">
              Réserver une séance
              <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
            </button>
          </Link>
          <a
            href="mailto:jadebailly.photographe@example.com"
            aria-label="Envoyer un email à Jade Bailly"
          >
            <button className="flex hover:cursor-pointer items-center bg-[#aa5949] text-[#ffffff] px-6 py-1 border-2 border-[#aa5949] rounded-md shadow-lg hover:bg-[#aa4c4c] transition duration-300">
              Envoyer un email
              <FontAwesomeIcon icon={faEnvelope} className="ml-2" />
            </button>
          </a>
          <a href="https://wa.me/+123456789">
            <button className="flex hover:cursor-pointer items-center bg-[#aa5949] text-[#ffffff] px-6 py-1 border-2 border-[#aa5949] rounded-md shadow-lg hover:bg-[#aa4c4c] transition duration-300">
              Whatsapp
              <FontAwesomeIcon icon={faPhone} className="ml-2" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTA;
