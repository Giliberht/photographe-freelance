"use client";

import React from "react";
import { Section } from "../../component/section";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Trust from "@/lib/data/trustnoteData";

export default function TrustNotes() {
  return (
    <Section className="bg-gray-100">
      <div className="max-w-6xl flex flex-col items-center mx-auto px-4 text-center py-16">
        <Badge variant="outline" className="mb-4">
          Commitment & security
        </Badge>
        <h2 className="scroll-m-20 pb-2 text-3xl text-center font-semibold tracking-tight">
          Mes engagement & votre sécurité
        </h2>
        <hr className="w-[440px] max-sm:w-[330px] mb-14" />
        <p className="mb-8">
          Je m&apos;engage à vous fournir un service photographique
          exceptionnel, adapté à vos besoins et à vos attentes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {Trust.slice(0, 6).map((trust, index) => (
            <div
              key={index}
              className="bg-white items-start p-4 rounded-lg border border-black/10 shadow-md hover:shadow-lg transition-shadow duration-300 relative"
            >
              <FontAwesomeIcon
                icon={trust.icon}
                className="text-[#aa4c4c] text-3xl mr-4"
              />
              <h3 className="text-xl font-semibold my-2">{trust.title}</h3>
              <p className="text-gray-700">{trust.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm ">
          Consulter&ensp;
          <a
            href="/conditions-generales"
            className="hover:underline text-[#aa4c4c]"
          >
            les conditions générales
          </a>
          &ensp;et&ensp;
          <a
            href="/politque-cookies"
            className="hover:underline text-[#aa4c4c]"
          >
            les politique de cookies
          </a>
          &ensp;pour plus d&apos;informations.
        </p>
      </div>
    </Section>
  );
}
