import { Badge } from "@/components/ui/badge";
import { Section } from "../../component/section";
import Link from "next/link";

export const Politique = () => {
  return (
    <Section className="flex flex-col items-center justify-center gap-4 py-10">
      <Badge variant={"outline"} className="mb-2">
        Cookies
      </Badge>
      <h1 className="font-caption font-bold mb-5 text-5xl sm:text-5xl">
        Politique de cookies
      </h1>
      <p className="text-[#aa5949] mb-5 text-sm">
        Dernière mise à jour : 25 juin 2025
      </p>
      <div className="grid grid-cols-2 max-w-6xl mt-8 gap-10">
        <div className="flex flex-col gap-5 bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-800">
            1. Qu&apos;est-ce qu&apos;un cookie ?
          </h2>
          <p className="text-md leading-relaxed text-gray-600">
            Un cookie est un petit fichier texte enregistré sur votre appareil
            lorsque vous visitez un site. Il permet de mémoriser certaines
            informations et d&apos;améliorer la navigation.
          </p>
        </div>
        <div className="flex flex-col gap-5 bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-800">
            2. Utilisation des cookies sur ce site
          </h2>
          <p className="text-md leading-relaxed text-gray-600">
            J&apos;utilise Vercel Analytics, un service d&apos;analyse de trafic
            web, qui collecte des données anonymes sur les visiteurs (pages
            consultées, durée de visite, etc.) afin d&apos;optimiser le site.
          </p>
        </div>
        <div className="flex flex-col gap-5 bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-800">
            3. Consentement
          </h2>
          <p className="text-md leading-relaxed text-gray-600">
            Lors de votre première visite, une bannière vous demande
            d&apos;accepter ou de refuser l&apos;utilisation des cookies
            analytiques. Si vous refusez, aucun cookie d&apos;analyse ne sera
            déposé.
          </p>
        </div>
        <div className="flex flex-col gap-5 bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-800">
            4. Gestion des cookies
          </h2>
          <p className="text-md leading-relaxed text-gray-600">
            Vous pouvez à tout moment gérer vos préférences relatives aux
            cookies via les paramètres de votre navigateur ou via la bannière de
            gestion des cookies présente sur le site.
          </p>
        </div>
        <div className="flex flex-col gap-5 bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-800">
            5. Plus d&apos;informations
          </h2>
          <p className="text-md leading-relaxed text-gray-600">
            Pour en savoir plus sur la gestion des cookies, vous pouvez
            consulter&nbsp;
            <Link
              href=" https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser"
              className="text-[#aa5949]"
            >
              le site de la CNIL
            </Link>
          </p>
        </div>
      </div>
    </Section>
  );
};
