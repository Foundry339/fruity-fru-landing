import { MapPin } from "lucide-react";
import { BookButton, LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { DecorativeField } from "@/components/ui/DecorativeField";
import { Sticker } from "@/components/ui/Sticker";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section id="home" className="relative scroll-mt-16 overflow-hidden pt-14 pb-20 sm:scroll-mt-20 sm:pt-20 sm:pb-28">
      <DecorativeField preset="hero" />
      <Container className="relative text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[var(--color-berry-darker)] shadow-sm">
          <MapPin className="h-3.5 w-3.5" />
          Serving {siteConfig.serviceArea}
        </span>

        <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl min-[400px]:text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-[var(--color-dark)]">
          Make It Yours.
          <br />
          <span className="whitespace-nowrap text-[var(--color-fruity-pink)]">Make It Fruity-Fru.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg text-[var(--color-dark)]/75">
          Stylish, mobile DIY accessory parties delivered to you.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <BookButton size="lg" className="w-full sm:w-auto" />
          <LinkButton href="#packages" variant="outline" size="lg" className="w-full sm:w-auto">
            See Packages
          </LinkButton>
        </div>

        <Sticker
          kind="cherry"
          color="var(--color-deep-berry)"
          className="mx-auto mt-12 h-10 w-10 animate-wiggle"
        />
      </Container>
    </section>
  );
}
