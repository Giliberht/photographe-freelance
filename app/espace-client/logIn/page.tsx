import React from "react";
import Login from "./_component/login";
import { Spacing } from "../../component/spacing";
import { Hero } from "./_component/hero";
import FAQ from "./_component/faq";
import Reviews from "./_component/reviews";

const LogIn = () => {
  return (
    <main className="relative">
      <Hero />
      <Spacing size="md" />
      <Login />
      <Spacing size="lg" />
      <FAQ />
      <Spacing size="lg" />
      <Reviews />
      <Spacing size="md" />
    </main>
  );
};

export default LogIn;
