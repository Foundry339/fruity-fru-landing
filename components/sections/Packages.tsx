import { Check, Info } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { AnimateIn, StaggerGroup, StaggerItem } from "@/components/ui/AnimateIn";
import { BookButton } from "@/components/ui/Button";
import { DecorativeField } from "@/components/ui/DecorativeField";
import { cn } from "@/lib/cn";
import { minimumPartySize, partyAddOns, partyPackages, type PartyPackage } from "@/lib/site";

const accentBg: Record<PartyPackage["accentColor"], string> = {
  pink: "bg-[var(--color-fruity-pink)]",
  berry: "bg-[var(--color-deep-berry)]",
  yellow: "bg-[var(--color-soft-yellow)]",
};

const accentText: Record<PartyPackage["accentColor"], string> = {
  pink: "text-[var(--color-berry-darker)]",
  berry: "text-[var(--color-berry-darker)]",
  yellow: "text-[#8a6d00]",
};

export function Packages() {
  return (
    <Section id="packages">
      <DecorativeField preset="section" />
      <Container className="relative">
        <AnimateIn>
          <SectionHeading
            eyebrow="Packages"
            title="Pick the party that fits your crew"
            description={`Every package starts at ${minimumPartySize} guests. Travel, setup and cleanup are always included.`}
          />
        </AnimateIn>

        <StaggerGroup className="mt-14 grid gap-8 lg:grid-cols-3">
          {partyPackages.map((pkg) => (
            <StaggerItem key={pkg.id} className="h-full">
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-[1.75rem] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8",
                  pkg.highlight && "ring-2 ring-[var(--color-deep-berry)] shadow-lg",
                )}
              >
                {pkg.highlight && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[var(--color-deep-berry)] px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white shadow">
                    Most Popular
                  </span>
                )}
                <span className={cn("h-2 w-12 rounded-full", accentBg[pkg.accentColor])} />
                <h3 className="mt-4 font-display text-2xl text-[var(--color-dark)]">{pkg.name}</h3>
                <p className="mt-1 text-sm text-[var(--color-dark)]/70">{pkg.tagline}</p>

                <div className="mt-5 flex items-baseline gap-1.5">
                  <span className={cn("font-display text-4xl", accentText[pkg.accentColor])}>
                    ${pkg.basePrice}
                  </span>
                  <span className="text-sm text-[var(--color-dark)]/70">/ {pkg.baseGuestCount} guests</span>
                </div>
                <p className="mt-1 text-xs text-[var(--color-dark)]/70">
                  +${pkg.additionalGuestPrice} per additional guest
                </p>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--color-dark)]/80">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--color-deep-berry)]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <BookButton
                  variant={pkg.highlight ? "primary" : "outline"}
                  className="mt-7 w-full"
                >
                  Book This Package
                </BookButton>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-[var(--color-dark)]/75">
          <Info className="h-4 w-4 flex-shrink-0 text-[var(--color-deep-berry)]" />
          {minimumPartySize}-guest minimum. Pricing for additional guests is per person.
        </p>

        <AnimateIn className="mt-16">
          <h3 className="text-center font-display text-2xl text-[var(--color-dark)]">Party add-ons</h3>
          <ul className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-3">
            {partyAddOns.map((a) => (
              <li
                key={a.id}
                className="rounded-[1.75rem] border-2 border-[var(--color-blush)] bg-white p-6 text-center"
              >
                <h4 className="font-display text-lg text-[var(--color-dark)]">{a.name}</h4>
                <p className="mt-2 text-sm text-[var(--color-dark)]/70">{a.description}</p>
                <p className="mt-3 font-display text-[var(--color-berry-darker)]">{a.priceLabel}</p>
              </li>
            ))}
          </ul>
        </AnimateIn>
      </Container>
    </Section>
  );
}
