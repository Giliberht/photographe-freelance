export interface FaqsData {
  question: string;
  answer: string;
}

const faqs: FaqsData[] = [
  {
    question: "Quel est le prix d'une séance photo ?",
    answer:
      "Les tarifs commencent à partir de 150 € pour une séance portrait d'une heure. Pour les mariages, les tarifs débutent à 1200 € pour une couverture de la journée complète (préparatifs, cérémonie, réception). Chaque séance inclut un nombre défini de photos retouchées, avec des options supplémentaires disponibles.",
  },
  {
    question: "Comment puis-je réserver une séance ?",
    answer:
      "Vous pouvez réserver une séance en remplissant le formulaire de contact sur notre site ou en m'envoyant un email directement. Un acompte de 30 % est demandé pour garantir votre réservation. Je vous répondrai rapidement pour discuter des détails.",
  },
  {
    question: "Combien de temps avant la séance dois-je réserver ?",
    answer:
      "Je recommande de réserver au moins 2 à 4 semaines à l'avance pour garantir la disponibilité, surtout pour les événements importants comme les mariages. Pendant les périodes de forte demande, comme l'été ou les vacances, il est conseillé de réserver encore plus tôt.",
  },
  {
    question: "Combien de temps après la séance vais-je recevoir mes photos ?",
    answer:
      "Le délai de livraison des photos est généralement de 7 à 14 jours ouvrés pour les séances portrait ou lifestyle. Pour les mariages et événements plus importants, il peut aller jusqu'à 4 semaines en raison du volume de photos à traiter.",
  },
  {
    question: "Proposez-vous des services de retouche photo ?",
    answer:
      "Oui, toutes mes séances incluent des retouches de base (correction de lumière, contraste, etc.). Des retouches plus avancées, comme la correction de peau ou des montages complexes, sont disponibles en option à partir de 15 € par photo.",
  },
  {
    question:
      "Que se passe-t-il en cas de mauvais temps le jour de la séance ?",
    answer:
      "Si les conditions météorologiques ne permettent pas de réaliser la séance en extérieur, nous pouvons reprogrammer à une date ultérieure sans frais supplémentaires, ou choisir un lieu en intérieur comme un studio ou une salle.",
  },
  {
    question: "Combien de photos vais-je recevoir après la séance ?",
    answer:
      "Pour une séance d'une heure, vous recevrez environ 20 à 40 photos retouchées. Pour un mariage ou un grand événement, cela peut varier entre 200 et 500 photos, selon la durée et le type de couverture choisi.",
  },
  {
    question:
      "Ai-je le droit d'utiliser les photos pour mes réseaux sociaux ou d'autres projets ?",
    answer:
      "Oui, vous pouvez utiliser les photos à des fins personnelles, y compris sur les réseaux sociaux, avec mention du crédit photographique si possible. Pour une utilisation commerciale (par exemple pour un site d'entreprise), veuillez me contacter pour discuter des droits d'utilisation.",
  },
  {
    question: "Quelles sont les conditions de paiement pour une séance ?",
    answer:
      "Un acompte de 30 % est demandé pour sécuriser votre réservation. Le solde est à régler à la fin de la séance ou avant la livraison des photos finales. Les paiements peuvent être effectués par carte de crédit, virement bancaire ou PayPal.",
  },
  {
    question: "Quelle est votre politique d'annulation ?",
    answer:
      "Vous pouvez annuler ou reprogrammer votre séance jusqu'à 48 heures avant la date prévue sans frais supplémentaires. En cas d'annulation dans un délai inférieur, l'acompte versé ne sera pas remboursable, mais vous pourrez reprogrammer la séance à une date ultérieure.",
  },
];

export default faqs;
