import { About } from "./component/about";
import { Contact } from "./component/contact";
import { Gallery } from "./component/gallerie";
import { Hero } from "./component/hero";
import { Reviews } from "./component/reviews";
import { Service } from "./component/service";
import { Spacing } from "./component/spacing";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Spacing size="xl" />
      <Spacing size="md" />
      <About />
      <Spacing size="2xl" />
      <Spacing size="md" />
      <Service />
      <Spacing size="2xl" />
      <Spacing size="md" />
      <Gallery />
      <Spacing size="2xl" />
      <Spacing size="md" />
      <Reviews />
      <Spacing size="2xl" />
      <Spacing size="md" />
      <Contact />
      <Spacing size="xl" />
    </main>
  );
}
