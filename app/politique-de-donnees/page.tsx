import React from "react";
import { Spacing } from "../component/spacing";
import { Politique } from "./_component/politique";
import { Hero } from "./_component/hero";

export default function About() {
  return (
    <main>
      <Hero />
      <Spacing size="md" />
      <Politique />
      <Spacing size="lg" />
    </main>
  );
}
