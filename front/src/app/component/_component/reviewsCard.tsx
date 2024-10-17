"use client";

import { StaticImageData } from "next/image";
import Image from "next/image";

interface ReviewCardProps {
  image: StaticImageData;
  name: string;
  review: string;
  date: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  image,
  name,
  review,
  date,
}) => {
  return (
    <div className="flex items-start p-2 border-b border-l rounded-bl-sm border-[#ac9487] hover:shadow-lg max-w-md gap-4">
      <Image
        src={image}
        alt={name}
        className="object-cover mt-2 rounded-sm w-[100px] h-[100px]"
      />
      <div>
        <p className="text-md text-gray-600 text-left">{review}</p>
        <div className="flex justify-end gap-4">
          <p className="mt-[2px] text-sm">{name}</p>
          <p className="mt-[2px] text-sm">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
