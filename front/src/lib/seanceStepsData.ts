import {
  faCameraRetro,
  faWandMagicSparkles,
  faHammer,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface seanceStepsData {
  icon: IconDefinition;
  title: string;
  description: string;
}

const seanceSteps: seanceStepsData[] = [
  {
    title: "1. Préparation de la séance",
    description:
      "Avant le jour J, nous préparons ensemble tous les détails de votre séance photo, y compris le lieu, le style et vos attentes. Cette étape est cruciale pour garantir que la séance se déroule sans accro",
    icon: faHammer,
  },
  {
    title: "2. Arrivée sur le lieu",
    description:
      "Le jour J, nous nous rencontrons au lieu convenu. Je m'assurerai que vous vous sentiez à l'aise et en confiance, en vous guidant tout au long du processus.",
    icon: faMapLocationDot,
  },
  {
    title: "3. Séance photo en direct",
    description:
      "Durant la séance, je capturerai des moments naturels et authentiques. Je serai là pour vous aider à poser si nécessaire, afin de garantir que chaque photo reflète votre personnalité.",
    icon: faCameraRetro,
  },
  {
    title: "4. Retouche et sélection",
    description:
      "Après la séance, vous recevrez un lien vers une galerie en ligne pour choisir vos photos préférées. Ensuite, je retouche les meilleures images selon vos préférences pour un rendu optimal.",
    icon: faWandMagicSparkles,
  },
];

export default seanceSteps;
