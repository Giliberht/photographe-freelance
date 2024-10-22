export interface faqAccountData {
  question: string;
  answer: string;
}

const faqAccount: faqAccountData[] = [
  {
    question: "Comment puis-je obtenir mes informations de connexion ?",
    answer:
      "Vous recevrez vos informations de connexion par email une fois que j'aurai validé votre devis. Assurez-vous de vérifier votre boîte de réception ainsi que votre dossier de spam.",
  },
  {
    question: "J'ai oublié mon mot de passe. Que dois-je faire ?",
    answer:
      "Cliquez sur 'Mot de passe oublié ?' sur la page de connexion et suivez les instructions pour réinitialiser votre mot de passe.",
  },
  {
    question:
      "Comment puis-je modifier mes informations personnelles ou mes préférences de photographie ?",
    answer:
      "Connectez-vous à votre espace client, allez dans 'Mon profil' et vous pourrez mettre à jour vos informations et préférences de photographie.",
  },
  {
    question: "Puis-je annuler ou reprogrammer une séance photo ?",
    answer:
      "Oui, vous pouvez annuler ou reprogrammer une séance photo en nous contactant au moins 48 heures avant la date prévue. Des frais d'annulation peuvent s'appliquer si la demande est faite moins de 48 heures à l'avance.",
  },
  {
    question: "Comment puis-je accéder à mes photos après une séance ?",
    answer:
      "Après votre séance photo, vous recevrez un lien vers une galerie en ligne sécurisée où vous pourrez visualiser et télécharger vos photos.",
  },
  {
    question: "Est-ce que mes informations de paiement sont sécurisées ?",
    answer:
      "Oui, toutes vos informations de paiement sont traitées via une connexion sécurisée et ne sont jamais partagées avec des tiers.",
  },
  {
    question:
      "Comment puis-je contacter le photographe pour des questions spécifiques ?",
    answer:
      "Vous pouvez contacter le photographe via la page de contact de notre site ou par email à jadebailly.photographe@example.com. Pour des questions urgentes, vous pouvez également nous appeler au +123456789.",
  },
  {
    question:
      "Combien de temps faut-il pour recevoir un devis après ma demande ?",
    answer:
      "Vous recevrez un devis dans un délai de 2 à 3 jours ouvrables après votre demande. Si vous n'avez pas reçu de réponse, n'hésitez pas à me contacter.",
  },
];

export default faqAccount;
