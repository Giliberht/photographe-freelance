"use client";

import React, { useState } from "react";
import { Section } from "../../component/section"; // Assurez-vous d'importer correctement votre composant Section
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import faqs from "@/lib/data/faqData";
import { Badge } from "@/components/ui/badge";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <Badge variant="outline" className="mb-4">
            FAQ
          </Badge>
          <h2 className="scroll-m-20 pb-2 text-3xl text-center font-semibold tracking-tight">
            Foire aux questions
          </h2>
          <hr className="w-[250px] mb-14" />{" "}
        </div>
        <div className="bg-white shadow-md rounded-lg border-t border-x border-black/10 hover:shadow-lg ">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-black/15 ">
              <div
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <FontAwesomeIcon
                  icon={openIndex === index ? faChevronUp : faChevronDown}
                  className="text-[#aa5949]"
                />
              </div>
              {openIndex === index && (
                <p className="p-4 text-gray-600 text-md">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
