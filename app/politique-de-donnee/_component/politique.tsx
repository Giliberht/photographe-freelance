import { Section } from "../../component/section";
import { Badge } from "@/components/ui/badge";
import { Cookie, ShieldCheck, Eye, BarChart } from "lucide-react";

export const Politique = () => {
  return (
    <Section className="flex flex-col max-w-6xl items-center justify-center gap-4 py-10 px-5 sm:px-0">
      <Badge variant={"outline"} className="mb-2">
        Data
      </Badge>
      <h1 className="font-caption font-bold mb-1 text-4xl sm:text-5xl">
        Politique de données
      </h1>
      <p className="text-[#aa5949] mb-8 text-xs">
        Dernière mise à jour : 25 juin 2025
      </p>
      <p className="text-md text-gray-700 mt-2">
        Ce site utilise <strong>Vercel Web Analytics</strong> avec le module{" "}
        <strong>@vercel/speed-insights</strong>, une solution d&apos;analyse
        légère, sans cookies, et respectueuse de la vie privée. Aucune donnée
        personnelle identifiable n&apos;est collectée. Pour en savoir plus, vous
        pouvez consulter la&nbsp;
        <a
          href="https://vercel.com/docs/analytics"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#aa5949] hover:underline hover:text-[#8e4b3b] transition"
        >
          documentation officielle de Vercel Analytics
        </a>
        .
      </p>

      <div className="flex flex-col items-center sm:items-start max-w-6xl mx-2">
        <Badge variant={"outline"} className="mb-2 mt-12">
          Collecte de données anonymes sans cookies
        </Badge>

        <h2 className="flex items-center mt-2 mb-5 text-3xl text-center tracking-tight text-gray-900">
          Collecte anonyme et respect de la vie privée
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 gap-10 max-w-6xl">
          <div className="flex flex-col gap-5 bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <h3 className="flex items-center text-xl font-semibold text-gray-800">
              <Cookie className="w-6 h-6 mr-5 text-[#aa5949]" />
              1. Pas de cookies déposés
            </h3>
            <p className="text-md leading-relaxed text-gray-700">
              Aucune trace de cookie n&apos;est déposée sur votre appareil lors
              de la navigation sur ce site.
            </p>
          </div>
          <div className="flex flex-col gap-5 bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <h3 className="flex items-center text-xl font-semibold text-gray-800">
              <Eye className="w-6 h-6 mr-5 text-[#aa5949]" />
              2. Consentement à la collecte anonyme
            </h3>
            <p className="text-md leading-relaxed text-gray-700">
              Lors de votre première visite, une bannière vous demande votre
              consentement pour la collecte de données anonymes. <br /> Vous
              pouvez accepter ou refuser cette collecte. En refusant, aucune
              donnée ne sera collectée ni stockée.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-12 gap-10 max-w-6xl">
          <div className="flex flex-col gap-5 bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <h3 className="flex items-center text-xl font-semibold text-gray-800">
              <ShieldCheck className="w-6 h-6 mr-5 text-[#aa5949]" />
              3. Protection et confidentialité
            </h3>
            <p className="text-md leading-relaxed text-gray-700">
              Aucune donnée personnelle n&apos;est collectée ou stockée. Les
              informations sont strictement anonymes et ne sont pas partagées
              avec des tiers.
            </p>
          </div>
          <div className="flex flex-col gap-5 bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <h3 className="flex items-center text-xl font-semibold text-gray-800">
              <BarChart className="w-6 h-6 mr-5 text-[#aa5949]" />
              4. Données collectées
            </h3>
            <p className="text-md leading-relaxed text-gray-700">
              Seules des informations techniques anonymes sont mesurées :
            </p>
            <ul className="flex flex-col sm:flex-row sm:gap-10 list-disc ml-5 text-sm leading-relaxed text-gray-700">
              <li>Pages visitées et durée de visite</li>
              <li>Temps de chargement</li>
              <li>Type de navigateur et système d&apos;exploitation</li>
              <li>Résolution d&apos;écran</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};
