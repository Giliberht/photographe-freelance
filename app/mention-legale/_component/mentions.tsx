import Link from "next/link";
import { Section } from "../../../app/component/section";
import { Badge } from "@/components/ui/badge";
import {
  Info,
  Camera,
  Server,
  Image,
  Copyright,
  ShieldCheck,
  Cookie,
} from "lucide-react";

export const Mentions = () => {
  return (
    <Section className="flex flex-col items-center justify-center gap-4 py-10 px-5 sm:px-0">
      <Badge variant={"outline"} className="mb-2">
        Legal notice
      </Badge>
      <h1 className="font-caption font-bold mb-1 text-4xl sm:text-5xl">
        Mentions légales
      </h1>
      <p className="text-[#aa5949] mb-8 text-xs">
        Dernière mise à jour : 25 juin 2025
      </p>
      <p className="text-md leading-relaxe mb-4">
        Ce site a été conçu à des fins de démonstration uniquement. Aucune
        prestation réelle de photographie n&apos;est proposée via ce site.
      </p>
      <div className="flex flex-col items-center sm:items-start max-w-6xl mx-2">
        <Badge variant={"outline"} className="mb-2 mt-12">
          Legal Information
        </Badge>
        <h2 className="flex items-center mt-2 mb-5 text-3xl text-center tracking-tight text-gray-900">
          Identité et cadre du site
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-10 max-w-6xl items-center">
          <div className="flex flex-col gap-5 bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <h3 className="flex items-center text-xl font-semibold text-gray-800">
              <Info className="w-6 h-6 mr-5 text-[#aa5949]" />
              1. Informations générales
            </h3>
            <p className="text-md leading-relaxed text-gray-700">
              Ce site est un projet fictif développé par :
            </p>
            <ul className="list-disc ml-5 text-md leading-relaxed text-gray-700">
              <li>Nom du propriétaire : Gibert Victor</li>
              <li>Adresse : 50100 Cherbourg-en-Cotentin</li>
              <li>Email : gibertvictor4[at]gmail.com</li>
              <li>Directeur de la publication : Gibert Victor</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5 bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <h3 className="flex items-center text-xl font-semibold text-gray-800">
              <Camera className="w-6 h-6 mr-5 text-[#aa5949]" />
              2. Photographe fictive
            </h3>
            <ul className="list-disc ml-5 text-md leading-relaxed text-gray-700">
              <li>Nom : Focus par Jade</li>
              <li>
                Activité : Photographe freelance - site fictif pour projet de
                développement web
              </li>
            </ul>
            <p className="text-sm leading-relaxed text-gray-600">
              Aucune prestation réelle n&apos;est associée à cette personne.
              Toute ressemblance avec une personne existante serait purement
              fortuite.
            </p>
          </div>
          <div className="flex flex-col gap-5 bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <h3 className="flex items-center text-xl font-semibold text-gray-800">
              <Server className="w-6 h-6 mr-5 text-[#aa5949]" />
              3. Hébergement
            </h3>
            <p className="text-md leading-relaxed text-gray-700">
              Le site web est hébergé par :
            </p>
            <ul className="list-disc ml-5 text-md leading-relaxed text-gray-700">
              <li>Nom de l&apos;hébergeur : Vercel Inc.</li>
              <li>Adresse : 340 S Lemon Ave Walnut, CA 91789 États-Unis</li>
              <li>Email : support@vercel.com</li>
              <li>
                Site web :
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://vercel.com"
                  className="text-[#aa5949] hover:underline hover:text-[#8e4b3b] transition"
                  aria-label="site web de vercel"
                >
                  https://vercel.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-100 rounded-md shadow-md py-10 mt-20">
          <div className="px-4 m-2 flex flex-col items-center sm:items-start">
            <Badge variant={"outline"} className="mb-2">
              Cookies & Data
            </Badge>
            <h2 className="flex items-center mt-2 mb-5 text-3xl text-center tracking-tight text-gray-900">
              Gestion des données et contenus
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 gap-10 max-w-6xl ">
              <div className="flex flex-col gap-5 bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <h3 className="flex items-center text-xl font-semibold text-gray-800">
                  <Cookie className="w-6 h-6 mr-5 text-[#aa5949]" />
                  4. Cookies et données de navigation
                </h3>
                <p className="text-md leading-relaxed text-gray-700">
                  Ce site utilise <strong>Vercel Analytics</strong>, un service
                  d&apos;analyse anonyme qui permet de suivre les performances
                  du site (pages vues, trafic global) sans déposer de cookies
                  sur votre appareil.
                  <br /> <br />
                  Aucune donnée personnelle identifiable n&apos;est collectée ni
                  utilisée à des fins de profilage.
                </p>
              </div>
              <div className="flex flex-col gap-5 bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <h3 className="flex items-center text-xl font-semibold text-gray-800">
                  <Image className="w-6 h-6 mr-5 text-[#aa5949]" />
                  5. Images et médias
                </h3>
                <p className="text-md leading-relaxed text-gray-700">
                  Les images présentes sur ce site proviennent de banques
                  d&apos;images libres de droits :
                </p>
                <ul className="list-disc ml-5 text-md leading-relaxed text-gray-700">
                  <li>
                    Pixabay :
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://pixabay.com/"
                      className="text-[#aa5949] hover:underline hover:text-[#8e4b3b] transition"
                      aria-label="site web de pixabay"
                    >
                      https://pixabay.com/
                    </Link>
                  </li>
                  <li>
                    Pexels :
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.pexels.com/"
                      className="text-[#aa5949] hover:underline hover:text-[#8e4b3b] transition"
                      aria-label="site web de pexels"
                    >
                      https://www.pexels.com/
                    </Link>
                  </li>
                  <li>
                    Freepik :
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.freepik.com/"
                      className="text-[#aa5949] hover:underline hover:text-[#8e4b3b] transition"
                      aria-label="site web de Freepik"
                    >
                      https://www.freepik.com/
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 mt-8 ml-4">
              Les images sont utilisées conformément aux licences des
              plateformes citées. Toute utilisation commerciale est interdite
              sans accord préalable. Merci de consulter les conditions
              d&apos;utilisation de chaque plateforme. Aucune image utilisée
              n&apos;est destinée à un usage commercial.
            </p>
          </div>
        </div>
        <Badge variant={"outline"} className="mb-2 mt-24">
          Property & Legality
        </Badge>
        <h2 className="flex items-center mt-2 mb-5 text-3xl text-center tracking-tight text-gray-900">
          Propriété & légalité
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 gap-10 max-w-6xl">
          <div className="flex flex-col gap-5 bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <h3 className="flex items-center text-xl font-semibold text-gray-800">
              <Copyright className="w-6 h-6 mr-5 text-[#aa5949]" />
              6. Propriété intellectuelle
            </h3>
            <p className="text-md leading-relaxed text-gray-700">
              Le code, la structure et les textes du site sont la propriété de
              l&apos;auteur du projet. Les contenus sont protégés par les lois
              en vigueur sur la propriété intellectuelle. Toute reproduction,
              même partielle, est interdite sans autorisation écrite.
            </p>
          </div>
          <div className="flex flex-col gap-5 bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <h3 className="flex items-center text-xl font-semibold text-gray-800">
              <ShieldCheck className="w-6 h-6 mr-5 text-[#aa5949]" />
              7. Protection des données personnelles
            </h3>
            <p className="text-md leading-relaxed text-gray-700">
              Ce site n&apos;a pas vocation commerciale ou contractuelle. Il
              s&apos;agit d&apos;un projet pédagogique et de démonstration. Les
              informations et contenus présentés sont fictifs.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
