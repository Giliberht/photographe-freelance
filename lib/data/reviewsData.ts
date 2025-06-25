import { StaticImageData } from "next/image";
import user1 from "../../public/img/users/user1.jpg";
import user2 from "../../public/img/users/user2.jpg";
import user3 from "../../public/img/users/user3.jpg";
import user5 from "../../public/img/users/user5.jpg";
import user6 from "../../public/img/users/user6.jpg";
import user7 from "../../public/img/users/user7.jpg";
import user8 from "../../public/img/users/user8.jpg";

export interface ReviewsData {
  id: number;
  name: string;
  feedback: string;
  image: StaticImageData;
  date: string;
}

const reviews: ReviewsData[] = [
  {
    id: 0,
    image: user3,
    name: "Aya B.",
    feedback:
      "Une expérience incroyable ! Les photos sont magnifiques et capturent parfaitement les moments spéciaux.",
    date: "15/09/2024",
  },
  {
    id: 1,
    image: user7,
    name: "Marie H.",
    feedback:
      "Je suis tellement satisfaite des photos de notre mariage, le photographe était très professionnel et a su nous mettre à l'aise.",
    date: "22/08/2024",
  },
  {
    id: 2,
    image: user2,
    name: "Jean-Pierre J.",
    feedback:
      "Un service exceptionnel ! Je recommande vivement pour tous vos besoins en photographie.",
    date: "05/09/2024",
  },
  {
    id: 3,
    image: user1,
    name: "Yelena G.",
    feedback:
      "Je recommande vivement ce photographe. Les photos sont sublimes et le service impeccable.",
    date: "30/07/2024",
  },
  {
    id: 4,
    image: user6,
    name: "Sophie L.",
    feedback:
      "J'ai adoré travailler avec ce photographe. Les photos de notre mariage sont magnifiques et capturent chaque moment clé avec une grande sensibilité.",
    date: "18/09/2024",
  },
  {
    id: 5,
    image: user2,
    name: "Thomas R.",
    feedback:
      "Séance portrait réussie. Le professionnalisme et la qualité des photos sont irréprochables. Je recommande sans hésitation !",
    date: "10/08/2024",
  },
  {
    id: 6,
    image: user5,
    name: "Claire D.",
    feedback:
      "Les photos de naissance sont émouvantes et pleines de tendresse. Un souvenir inoubliable pour toute la famille. Merci encore !",
    date: "02/09/2024",
  },
  {
    id: 7,
    image: user8,
    name: "Julien M.",
    feedback:
      "Des photos de grossesse magnifiques ! Le photographe a su capturer des moments précieux et je me suis sentie à l'aise tout au long de la séance.",
    date: "01/09/2024",
  },
];

export default reviews;
