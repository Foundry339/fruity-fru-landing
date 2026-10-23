import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Packages } from "@/components/sections/Packages";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Packages />
      <Contact />
    </>
  );
}
