"use client";

import Image from "next/image";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-md overflow-hidden shadow-lg relative">
      <div className="relative">
        <Image
          src={image}
          className="rounded-sm object-cover opacity-95 transition-transform duration-300 hover:scale-110"
          alt={`${title} service`}
          height={250}
          width={350}
        />
        <h1 className="absolute bottom-2 left-3 text-lg font-semibold text-black bg-[#faf5f2] px-3 py-1 rounded-md">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default ServiceCard;
