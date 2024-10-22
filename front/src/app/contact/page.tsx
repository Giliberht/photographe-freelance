import { Hero } from "./_component/hero";
import { Spacing } from "../component/spacing";
import FAQ from "./_component/faq";
import TrustNotes from "./_component/trustNote";
import Contact from "./_component/contact";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Spacing size="md" />
      <Contact />
      <Spacing size="lg" />
      <TrustNotes />
      <Spacing size="xl" />
      <FAQ />
      <Spacing size="md" />
    </main>
  );
}
