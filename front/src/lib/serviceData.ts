export interface ServiceData {
  id: number;
  image: string;
  title: string;
  description: string;
}

const services: ServiceData[] = [
  {
    id: 1,
    image: "/img/mariage/mariage3.jpg",
    title: "Mariage",
    description:
      "Immortalisez le jour le plus important de votre vie avec des photographies douces et authentiques. Chaque sourire, chaque larme de joie sera capturé pour vous permettre de revivre ces précieux souvenirs.",
  },
  {
    id: 2,
    image: "/img/couple/couple3.jpg",
    title: "Couple",
    description:
      "Célébrez votre amour à travers des photos romantiques qui capturent l'essence de votre relation. Que ce soit pour une séance photo intime ou pour une occasion spéciale, chaque instant sera figé pour l'éternité.",
  },
  {
    id: 3,
    image: "/img/famille/fam5.jpg",
    title: "Famille",
    description:
      "Des portraits familiaux qui racontent votre histoire unique. Créez des souvenirs durables avec des séances photo chaleureuses et authentiques, célébrant les liens qui vous unissent.",
  },
  {
    id: 4,
    image: "/img/professionnel/pro1.jpg",
    title: "Professionnel",
    description:
      "Des portraits professionnels qui reflètent votre personnalité et vos compétences. Que ce soit pour des réseaux sociaux ou des sites web, vos images seront un atout précieux pour votre image de marque.",
  },
  {
    id: 5,
    image: "/img/maternite/mat4.jpg",
    title: "Maternité",
    description:
      "Capturez la beauté et l'émotion de la maternité avec des photos qui célèbrent cette période unique de votre vie. Ces souvenirs précieux seront chéris pour toujours.",
  },
  {
    id: 6,
    image: "/img/portrait/port4.jpg",
    title: "Portrait",
    description:
      "Des portraits qui révèlent votre personnalité et votre style. Que ce soit pour des projets personnels ou professionnels, chaque photo mettra en avant votre unicité.",
  },
];

export default services;
