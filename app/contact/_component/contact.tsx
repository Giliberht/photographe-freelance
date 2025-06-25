"use client";

import React, { useState } from "react";
import { Section } from "../../component/section";
import { Badge } from "@/components/ui/badge";
import toast from "react-hot-toast";
import { LinkedinIcon } from "../../component/icon/linkedinicon";
import { FacebookIcon } from "../../component/icon/facebookIcon";
import { InstaIcon } from "../../component/icon/instaIcon";
import { TiktokIcon } from "../../component/icon/tiktokIcon";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    referral: "",
  });

  const services = [
    "Photographie de mariage",
    "Séances portrait",
    "Événements professionnels",
    "Séances lifestyle",
    "Photographie de produits",
    "Séances photo de grossesse",
    "Photographie de naissance",
  ];

  const [submitStatus, setSubmitStatus] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitStatus(
      toast.success("Successfully toasted!", {
        duration: 5000,
      })
    );
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      referral: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Section className="max-w-6xl">
      <Breadcrumb className="max-sm:ml-5">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Contact</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex items-center px-4 py-28 max-sm:flex-col">
        <div className="grid grid-cols-2 items-start gap-5 max-sm:flex max-sm:flex-col max-sm:items-center">
          <div className="w-[450px] max-sm:w-[400px] px-4">
            <div className="flex flex-col items-center">
              <Badge variant="outline" className="mb-4">
                Contact information
              </Badge>
              <h2 className="scroll-m-20 pb-2 text-3xl text-center font-semibold tracking-tight">
                Information de contact
              </h2>
              <hr className="w-[295px] mb-8" />
              <p className="max-w-md mb-6">
                N&apos;hésitez pas à me contacter pour toute question ou pour
                planifier votre séance photo.
              </p>
            </div>

            <div className="flex flex-col gap-2 mb-4">
              <p>
                Email: &ensp;
                <a
                  href="mailto:jadebailly.photographe@example.com"
                  className="text-[#aa4c4c] hover:underline"
                >
                  jadebailly.photographe@example.com
                </a>
              </p>
              <p>
                Téléphone: &ensp;
                <a
                  href="https://wa.me/+123456789"
                  className="text-[#aa4c4c] hover:underline"
                >
                  +123456789
                </a>
              </p>
              <p>
                Adresse: &ensp;
                <a
                  href="https://www.google.com/maps?q=82+rue+Example,+75056+Paris,+France"
                  className="text-[#aa4c4c] hover:underline"
                >
                  82 rue example, 75056 Paris, France
                </a>
              </p>
            </div>
            <div className="mt-2 flex flex-col items-start">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.7782459616!2d2.264635113894003!3d48.85893843447918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1729529186612!5m2!1sfr!2sfr"
                width="600"
                height="450"
                style={{ width: "100%", height: "250px", border: "none" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer"
              ></iframe>
              <h3 className="mt-7 text-lg font-semibold">
                Suivez-moi sur les réseaux sociaux :
              </h3>
              <div className="flex gap-4 ml-3 mt-3">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com"
                  className="hover:scale-110 transition-transform duration-300"
                  aria-label="LinkedIn Logo"
                >
                  <LinkedinIcon size={40} id="linkedin" />
                </Link>
                <Link
                  target="_blank"
                  href="https://facebook.com"
                  className="hover:scale-110 transition-transform duration-300"
                  aria-label="Facebook Logo"
                >
                  <FacebookIcon size={40} id="facebook" />
                </Link>
                <Link
                  target="_blank"
                  href="https://instagram.com"
                  className="hover:scale-110 transition-transform duration-300"
                  aria-label="Instagram Logo"
                >
                  <InstaIcon size={40} id="instagram" />
                </Link>
                <Link
                  target="_blank"
                  href="https://tiktok.com"
                  className="hover:scale-110 transition-transform duration-300"
                  aria-label="Tiktok Logo"
                >
                  <TiktokIcon size={40} id="tiktok" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 flex flex-col items-center max-sm:w-full max-sm:mt-32">
          <div className="flex flex-col items-center">
            <Badge variant="outline" className="mb-4">
              Contact form
            </Badge>
            <h2 className="scroll-m-20 pb-2 text-3xl text-center font-semibold tracking-tight">
              Formulaire de contact
            </h2>
            <hr className="w-[280px] mb-10" />
          </div>
          <div className="bg-white px-8 rounded-lg border border-black/10 shadow-md hover:shadow-lg transition-shadow duration-300 relative max-sm:w-[400px]">
            <form className="py-8" onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-4">
                <div className="flex max-sm:flex-col max-sm:gap-y-4 gap-x-8">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Prénom"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="border p-2 rounded flex-1 focus:outline-none focus:ring-2 focus:ring-[#aa4c4c] transition"
                    aria-label="Prénom"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Nom"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="border p-2 rounded flex-1 focus:outline-none focus:ring-2 focus:ring-[#aa4c4c] transition"
                    aria-label="Nom"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Adresse e-mail"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#aa4c4c] transition"
                  aria-label="Adresse e-mail"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Numéro de téléphone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#aa4c4c] transition"
                  aria-label="Numéro de téléphone"
                />
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#aa4c4c] transition"
                  aria-label="Sélectionnez un service"
                >
                  <option value="" disabled>
                    Sélectionnez un service
                  </option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                <textarea
                  name="message"
                  placeholder="Votre message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#aa4c4c] transition"
                  aria-label="Votre message"
                ></textarea>
                <input
                  type="text"
                  name="referral"
                  placeholder="Comment avez-vous entendu parler de moi ?"
                  value={formData.referral}
                  onChange={handleChange}
                  className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#aa4c4c] transition"
                  aria-label="Comment avez-vous entendu parler de moi ?"
                />
                <button
                  type="submit"
                  className="bg-[#aa5949] text-white px-4 py-2 rounded hover:bg-[#aa4c4c] transition"
                >
                  Envoyer
                </button>
              </div>
              <p className="mt-4 text-sm text-green-600"></p>
              <p className="mt-4 text-sm text-muted-foreground">
                En soumettant ce formulaire, vous acceptez nos{" "}
                <a href="/conditions" className="text-[#aa4c4c] underline">
                  conditions générales
                </a>{" "}
                et nos{" "}
                <a href="/confidentialite" className="text-[#aa4c4c] underline">
                  politiques de confidentialité
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
