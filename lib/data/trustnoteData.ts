import {
  faCreditCard,
  faPhone,
  faShieldAlt,
  faTree,
  faImage,
  faClock,
  faHandsHelping,
  faAward,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface TrustNotesData {
  id: number;
  icon: IconDefinition;
  title: string;
  description: string;
}

const Trust: TrustNotesData[] = [
  {
    id: 0,
    title: "Sécurité et confidentialité",
    description:
      "Vos informations personnelles sont protégées par des mesures de sécurité strictes.",
    icon: faShieldAlt,
  },
  {
    id: 1,
    title: "Engagement environnemental",
    description: "J'adopte des pratiques durables pour protéger notre planète.",
    icon: faTree,
  },
  {
    id: 2,
    title: "Accessibilité et suivi",
    description:
      "Je suis disponible pour vos questions et effectue un suivi après chaque séance.",
    icon: faPhone,
  },
  {
    id: 3,
    title: "Options de paiement sécurisées",
    description:
      "Je propose des paiements sécurisés par carte de crédit, PayPal et virement bancaire.",
    icon: faCreditCard,
  },
  {
    id: 4,
    title: "Formats et retouches incluses",
    description:
      "Recevez vos photos retouchées sous format numérique ou imprimez-les sur demande.",
    icon: faImage,
  },
  {
    id: 5,
    title: "Livraison rapide",
    description:
      "Vos photos sont livrées sous 7 à 14 jours ouvrés après la séance, selon le type de service.",
    icon: faClock,
  },
  {
    id: 6,
    title: "Moments Inoubliables",
    description:
      "Chaque séance est conçue pour être unique et agréable, vous permettant de vous détendre et de savourer chaque instant.",
    icon: faAward,
  },
  {
    id: 7,
    title: "Disponibilité Flexible",
    description:
      "À l'écoute de vos besoins, je m'adapte à votre emploi du temps pour garantir une expérience fluide et agréable.",
    icon: faClock,
  },
  {
    id: 8,
    title: "Un suivi attentif",
    description:
      "Après la séance, je vous guide à travers le processus de sélection et de retouche pour que chaque image finale soit à la hauteur de vos attentes.",
    icon: faHandsHelping,
  },
];

export default Trust;
