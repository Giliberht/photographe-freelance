import { Section } from "./section";
import { Navbar } from "./navbar";

export const Header = () => {
  return (
    <header className="sticky z-[999]">
      <Section className="flex items-baseline top-0 left-1/2 w-full h-[2.5rem] mb-8 rounded full">
        <Navbar />
      </Section>
    </header>
  );
};
