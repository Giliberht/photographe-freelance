export interface SeanceData {
  id: number;
  images: string[];
  title: string;
  description: string;
  price: string;
  duration: string;
  cat: string[];
}

const seances: SeanceData[] = [
  {
    id: 0,
    title: "Photographie de mariage",
    description:
      "Capturer chaque instant de votre mariage, des préparatifs à la fin de la réception, avec des photos créatives et émotionnelles. Des portraits, des moments volés et des scènes emblématiques pour raconter l'histoire complète de votre grand jour.",
    price: "À partir de 1200€",
    duration: "8 à 12 heures selon l'événement.",
    images: ["/img/mariage/mariage2.jpg", "/img/mariage/mariage3.jpg"],
    cat: ["mariage"],
  },
  {
    id: 1,
    title: "Séances portrait",
    description:
      "Des portraits professionnels en extérieur ou en studio, que ce soit en solo, en famille ou en couple. Idéal pour capturer des souvenirs intemporels.",
    price: "À partir de 150€",
    duration: "Environ 1 à 2 heures.",
    images: ["/img/portrait/port6.jpg", "/img/portrait/port4.jpg"],
    cat: ["portrait", "famille", "couple"],
  },
  {
    id: 2,
    title: "Événements professionnels",
    description:
      "Couverture d'événements professionnels tels que des séminaires, des conférences, ou des soirées d'entreprise. Capturer les moments clés et les interactions importantes pour vos archives ou supports de communication.",
    price: "Sur devis.",
    duration: "En fonction de l'événement.",
    images: ["/img/professionnel/pro1.jpg", "/img/professionnel/pro3.jpg"],
    cat: ["professionnel"],
  },
  {
    id: 3,
    title: "Séances lifestyle",
    description:
      "Capturez des moments authentiques de votre vie quotidienne ou en famille dans un cadre naturel. Idéal pour des souvenirs spontanés et chaleureux.",
    price: "À partir de 150€",
    duration: "1 à 2 heures.",
    images: ["/img/famille/fam5.jpg", "/img/couple/couple3.jpg"],
    cat: ["famille", "couple"],
  },
  {
    id: 4,
    title: "Photographie de produits",
    description:
      "Photos de produits professionnelles, parfaites pour les sites e-commerce, les catalogues ou les réseaux sociaux. Un soin particulier est apporté à la lumière et aux détails pour mettre en valeur vos articles.",
    price: "À partir de 120€.",
    duration: "Selon le nombre de produits.",
    images: ["/img/professionnel/pro2.jpg", "/img/professionnel/pro5.jpg"],
    cat: ["professionnel"],
  },
  {
    id: 5,
    title: "Séances photo de grossesse",
    description:
      "Immortalisez votre grossesse avec des photos touchantes et créatives. En extérieur ou en studio, je capture ces moments précieux pour en faire des souvenirs inoubliables.",
    price: "À partir de 300€.",
    duration: "Environ 1 à 2 heures.",
    images: ["/img/maternite/mat3.jpg", "/img/maternite/mat4.jpg"],
    cat: ["maternité"],
  },
  {
    id: 6,
    title: "Photographie de naissance",
    description:
      "Capturer les premiers moments de vie de votre nouveau-né avec douceur et tendresse. Une séance intime pour créer des souvenirs précieux à partager en famille.",
    price: "À partir de 350€.",
    duration: "Environ 2 heures.",
    images: ["/img/naissance/born1.jpg", "/img/naissance/born2.jpg"],
    cat: ["naissance"],
  },
];

export default seances;
