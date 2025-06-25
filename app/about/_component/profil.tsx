import Image from "next/image";
import myface from "../../../public/img/portrait/port2.jpg";
import { Badge } from "@/components/ui/badge";
import { Section } from "../../component/section";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { FacebookIcon } from "../../component/icon/facebookIcon";
import { InstaIcon } from "../../component/icon/instaIcon";
import { LinkedinIcon } from "../../component/icon/linkedinicon";
import { TiktokIcon } from "../../component/icon/tiktokIcon";

export default function Profil() {
  return (
    <Section className="max-w-6xl">
      <Breadcrumb className="max-sm:ml-5">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Qui suis-je ?</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col items-center max-w-6xl mx-auto mt-20">
        <div className="w-full flex flex-col md:flex-row items-start gap-10 mb-12 mt-5">
          <div className="mr-10 max-sm:hidden">
            <Image
              src={myface}
              className="object-cover rounded-lg shadow-lg h-[400px] w-[300px]"
              alt="Photographe portrait"
            />
          </div>
          <div className="flex flex-col max-sm:items-center items-start justify-center md:w-2/3 max-sm:px-5">
            <Badge variant="outline" className="mb-4">
              About me
            </Badge>
            <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight">
              Qui suis-je ?
            </h1>
            <hr className="w-[150px]" />
            <div className="max-sm:flex max-sm:mt-10 hidden">
              <Image
                src={myface}
                className="object-cover rounded-lg shadow-lg h-[400px] w-[400px]"
                alt="Photographe portrait"
              />
            </div>
            <p className="text-md mt-6">
              Je m&apos;appelle Jade Bailly, photographe passionnée basée à
              Example. Depuis mon plus jeune âge, l&apos;art de capturer des
              instants uniques et authentiques m&apos;a toujours fascinée.
              Aujourd&apos;hui, j&apos;ai la chance d&apos;accompagner mes
              clients en immortalisant leurs moments précieux et en les
              transformant en souvenirs intemporels. Mon objectif est de créer
              des images qui racontent une histoire et reflètent la beauté de
              chaque instant.
            </p>
            <div className="w-full mt-6 mb-12">
              <h2 className="text-xl font-semibold mb-2">
                Connectez-vous avec moi
              </h2>
              <p className="text-md mb-4">
                Suivez mon travail et rejoignez ma communauté :
              </p>
              <div className="flex space-x-4 max-sm:mt-4 max-sm:justify-center">
                <Link
                  href="https://www.instagram.com/yourprofile"
                  target="_blank"
                >
                  <InstaIcon className="h-8 w-8 max-sm:h-[48px] max-sm:w-[48px]" />
                </Link>
                <Link
                  href="https://www.facebook.com/yourprofile"
                  target="_blank"
                >
                  <FacebookIcon className="h-8 w-8 max-sm:h-[48px] max-sm:w-[48px]" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/yourprofile"
                  target="_blank"
                >
                  <LinkedinIcon className="h-8 w-8 max-sm:h-[48px] max-sm:w-[48px]" />
                </Link>
                <Link
                  href="https://www.tiktok.com/@yourprofile"
                  target="_blank"
                >
                  <TiktokIcon className="h-8 w-8 max-sm:h-[48px] max-sm:w-[48px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
