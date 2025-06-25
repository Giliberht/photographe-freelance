import React from "react";
import { Spacing } from "../../app/component/spacing";
import { Mentions } from "./_component/mentions";
import { Hero } from "./_component/hero";

export default function About() {
  return (
    <main>
      <Hero />
      <Spacing size="md" />
      <Mentions />
      <Spacing size="lg" />
    </main>
  );
}
