import { Spacing } from "../component/spacing";
import Vision from "./_component/vision";
import Experience from "./_component/experience";
import Profil from "./_component/profil";
import { Hero } from "./_component/hero";

export default function About() {
  return (
    <main className="relative">
      <Hero />
      <Spacing size="md" />
      <Profil />
      <Spacing size="lg" />
      <Vision />
      <Spacing size="lg" />
      <Experience />
      <Spacing size="md" />
    </main>
  );
}
