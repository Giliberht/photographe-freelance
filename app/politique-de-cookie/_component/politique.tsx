import Link from "next/link";
import { Section } from "../../component/section";
import { Badge } from "@/components/ui/badge";
import { Cookie, ShieldCheck, Info } from "lucide-react";

export const Politique = () => {
  return (
    <Section className="flex flex-col max-w-6xl items-center justify-center gap-4 py-10 px-5 sm:px-0">
      <Badge variant={"outline"} className="mb-2">
        Cookies
      </Badge>
      <h1 className="font-caption font-bold mb-1 text-4xl sm:text-5xl">
        Politique de cookies
      </h1>
      <p className="text-[#aa5949] mb-8 text-xs">
        Dernière mise à jour : 25 juin 2025
      </p>
      <p className="text-sm text-primary/80 mt-4">
        Ce site utilise <strong>Vercel Web Analytics</strong>, une solution
        légère et respectueuse de la vie privée. Pour en savoir plus, vous
        pouvez consulter la{" "}
        <a
          href="https://vercel.com/docs/analytics"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#aa5949] hover:underline hover:text-[#8e4b3b] transition"
        >
          documentation officielle
        </a>
        .
      </p>

      <div className="flex flex-col items-center sm:items-start max-w-6xl mx-2">
        <Badge variant={"outline"} className="mb-2 mt-12">
          Informations sur les cookies
        </Badge>

        <h2 className="flex items-center mt-2 mb-5 text-3xl text-center tracking-tight text-gray-900">
          Utilisation et gestion des cookies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 gap-10 max-w-6xl">
          <div className="flex flex-col gap-5 bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <h3 className="flex items-center text-xl font-semibold text-gray-800">
              <Info className="w-6 h-6 mr-5 text-[#aa5949]" />
              1. Qu&apos;est-ce qu&apos;un cookie ?
            </h3>
            <p className="text-md leading-relaxed text-gray-700">
              Un cookie est un petit fichier texte enregistré sur votre appareil
              lorsque vous visitez un site web. Il permet de mémoriser certaines
              informations et d&apos;améliorer la navigation.
            </p>
          </div>

          <div className="flex flex-col gap-5 bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <h3 className="flex items-center text-xl font-semibold text-gray-800">
              <Cookie className="w-6 h-6 mr-5 text-[#aa5949]" />
              2. Utilisation des cookies sur ce site
            </h3>
            <p className="text-md leading-relaxed text-gray-700">
              Ce site utilise Vercel Analytics, un service d&apos;analyse
              anonyme qui collecte des données sur les visiteurs (pages
              consultées, durée de visite, etc.) pour optimiser le
              fonctionnement du site.
            </p>
          </div>

          <div className="flex flex-col gap-5 bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <h3 className="flex items-center text-xl font-semibold text-gray-800">
              <ShieldCheck className="w-6 h-6 mr-5 text-[#aa5949]" />
              3. Consentement
            </h3>
            <p className="text-md leading-relaxed text-gray-700">
              Lors de votre première visite, une bannière vous demande
              d&apos;accepter ou de refuser l&apos;utilisation des cookies
              analytiques. Si vous refusez, aucun cookie d&apos;analyse ne sera
              déposé sur votre appareil.
            </p>
          </div>

          <div className="flex flex-col gap-5 bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <h3 className="flex items-center text-xl font-semibold text-gray-800">
              <Cookie className="w-6 h-6 mr-5 text-[#aa5949]" />
              4. Gestion des cookies
            </h3>
            <p className="text-md leading-relaxed text-gray-700">
              Vous pouvez gérer ou supprimer les cookies directement depuis les
              paramètres de votre navigateur. Pour en savoir plus, consultez la
              documentation de votre navigateur.
            </p>
            <ul className="flex flex-col sm:flex-row sm:gap-10 list-disc ml-5 text-md leading-relaxed text-gray-700">
              <li>
                <Link
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#aa5949] hover:underline hover:text-[#8e4b3b] transition"
                >
                  Google Chrome
                </Link>
              </li>
              <li>
                <Link
                  href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#aa5949] hover:underline hover:text-[#8e4b3b] transition"
                >
                  Mozilla Firefox
                </Link>
              </li>
              <li>
                <Link
                  href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#aa5949] hover:underline hover:text-[#8e4b3b] transition"
                >
                  Safari
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};
