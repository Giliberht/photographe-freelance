import { Spacing } from "../component/spacing";
import Reservation from "./_component/reservationStep";
import { Hero } from "./_component/hero";
import Services from "./_component/service";
import FAQ from "./_component/faq";
import Reviews from "./_component/reviews";
import CTA from "./_component/cta";

export default function About() {
  return (
    <main className="relative">
      <Hero />
      <Spacing size="md" />
      <Services />
      <Spacing size="xl" />
      <Spacing size="md" />
      <Reservation />
      <Spacing size="xl" />
      <Spacing size="md" />
      <Reviews />
      <Spacing size="xl" />
      <Spacing size="lg" />
      <FAQ />
      <Spacing size="xl" />
      <Spacing size="md" />
      <CTA />
      <Spacing size="md" />
    </main>
  );
}
