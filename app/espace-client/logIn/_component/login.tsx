"use client";

import React, { useState } from "react";
import { Section } from "../../../component/section";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleViewPassword = () => {
    setViewPassword(!viewPassword);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logique de soumission du formulaire ici
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
            <BreadcrumbPage>Espace client</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="max-w-6xl flex flex-col items-center mx-auto px-4 text-center py-20">
        <Badge variant="outline" className="mb-4">
          Log in
        </Badge>
        <h2 className="scroll-m-20 pb-2 text-3xl text-center font-semibold tracking-tight">
          Connexion à votre espace client
        </h2>
        <hr className="w-[400px] max-sm:w-[330px] mb-14" />
        <div className="bg-white w-[400px] items-start py-8 rounded-lg border border-black/10 shadow-md hover:shadow-lg transition-shadow duration-300 relative">
          <h3 className="text-2xl font-semibold mb-3">Bienvenue</h3>
          <p className="text-md text-center mb-8">
            Saisissez les identifiants de votre Espace client
          </p>
          <form
            className="flex flex-col items-center gap-5"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              value={email}
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-[300px] px-4 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-[#aa4c4c] transition"
            />
            <div className="relative w-[300px]">
              <input
                type={viewPassword ? "text" : "password"}
                value={password}
                placeholder="Mot de passe"
                required
                onChange={(e) => setPassword(e.target.value)}
                className="w-[300px] px-4 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-[#aa4c4c] transition"
              />
              <button
                type="button"
                onClick={handleViewPassword}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none"
              >
                <FontAwesomeIcon icon={viewPassword ? faEyeSlash : faEye} />
              </button>
            </div>

            <p className=" mb-2">
              <a href="" className="text-sm text-muted-foreground underline">
                Mot de passe oublié ? Première connnexion?
              </a>
            </p>
            <button
              type="submit"
              className="w-[300px] hover:cursor-pointer bg-[#aa5949] text-white px-4 py-1 rounded hover:bg-[#aa4c4c] transition"
            >
              Se connecter
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Login;
