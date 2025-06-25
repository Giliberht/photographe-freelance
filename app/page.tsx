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
      <About />
      <Spacing size="2xl" />
      <Service />
      <Spacing size="2xl" />
      <Gallery />
      <Spacing size="2xl" />
      <Reviews />
      <Spacing size="2xl" />
      <Contact />
      <Spacing size="xl" />
    </main>
  );
}
