import {
  faCalendarCheck,
  faCamera,
  faEnvelopeOpen,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface ReservationData {
  id: number;
  icon: IconDefinition;
  title: string;
  description: string;
}

const steps: ReservationData[] = [
  {
    id: 0,
    icon: faCalendarCheck,
    title: "1. Réservation d'un créneau",
    description:
      "Réservez une séance en ligne via le formulaire ou par email. Je confirmerai la disponibilité dans un délai de 24 à 48 heures.",
  },
  {
    id: 1,
    icon: faCamera,
    title: "2. Réalisation de la séance",
    description:
      "Le jour J, nous réaliserons la séance dans un cadre décontracté, en veillant à capturer des moments naturels et authentiques.",
  },
  {
    id: 2,
    icon: faEnvelopeOpen,
    title: "3. Sélection de vos photos",
    description:
      "Quelques jours après la séance, vous recevrez un lien vers une galerie en ligne pour choisir vos photos préférées.",
  },
  {
    id: 3,
    icon: faImage,
    title: "4. Retouches, impression et livraison",
    description:
      "Après la sélection, je retouche les images selon vos préférences. Vous recevrez ensuite vos photos en version numérique et, si désiré, en format imprimé.",
  },
];

export default steps;
