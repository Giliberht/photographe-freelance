import { Spacing } from "../component/spacing";
import CTA from "./_component/cta";
import Gallery from "./_component/gallery";
import { Hero } from "./_component/hero";
import Reviews from "./_component/reviews";
import ProcessusSeance from "./_component/seanceStep";
import { Service } from "./_component/service";

export default function About() {
  return (
    <main className="relative">
      <Hero />
      <Spacing size="md" />
      <Gallery />
      <Spacing size="md" />
      <Spacing size="xl" />
      <ProcessusSeance />
      <Spacing size="md" />
      <Spacing size="xl" />
      <Service />
      <Spacing size="md" />
      <Spacing size="xl" />
      <Reviews />
      <Spacing size="md" />
      <Spacing size="xl" />
      <CTA />
      <Spacing size="lg" />
    </main>
  );
}
