import { Sparkles, Truck, Users } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { AnimateIn, StaggerGroup, StaggerItem } from "@/components/ui/AnimateIn";
import { Sticker } from "@/components/ui/Sticker";
import { DecorativeField } from "@/components/ui/DecorativeField";
import { aboutPoints, howItWorksSteps, perfectForItems } from "@/lib/site";

const icons = { truck: Truck, users: Users, sparkles: Sparkles };

export function About() {
  return (
    <Section id="about" className="bg-white">
      <DecorativeField preset="section" />
      <Container className="relative">
        <AnimateIn>
          <SectionHeading
            eyebrow="About Fruity-Fru"
            title="A DIY party experience that comes straight to you"
            description="Fruity-Fru is a mobile accessory-making party company. We handle everything — accessories, patches, setup, cleanup, and professional heat pressing — so your group can focus on the fun part: making something one-of-a-kind together."
          />
        </AnimateIn>

        <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-3">
          {aboutPoints.map((point) => {
            const Icon = icons[point.icon];
            return (
              <StaggerItem key={point.title}>
                <div className="h-full rounded-[1.75rem] bg-[var(--color-pale-pink)] p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-deep-berry)] text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg text-[var(--color-dark)]">{point.title}</h3>
                  <p className="mt-1.5 text-sm text-[var(--color-dark)]/70">{point.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <AnimateIn className="mt-16">
          <h3 className="text-center font-display text-2xl text-[var(--color-dark)]">How it works</h3>
          <ol className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {howItWorksSteps.map((s) => (
              <li
                key={s.step}
                className="flex items-start gap-4 rounded-[1.75rem] border-2 border-[var(--color-blush)] bg-white p-4 lg:flex-col lg:items-center lg:text-center"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-deep-berry)] font-display text-lg text-white">
                  {s.step}
                </span>
                <div>
                  <h4 className="font-display text-base text-[var(--color-dark)]">{s.title}</h4>
                  <p className="mt-1 text-xs text-[var(--color-dark)]/70">{s.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </AnimateIn>

        <AnimateIn className="mt-14 text-center">
          <h3 className="font-display text-2xl text-[var(--color-dark)]">Perfect for</h3>
          <ul className="mt-6 flex flex-wrap justify-center gap-3">
            {perfectForItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-2 rounded-full bg-[var(--color-blush)] px-4 py-2 text-sm font-semibold text-[var(--color-dark)]"
              >
                <Sticker kind={item.icon} color="var(--color-deep-berry)" className="h-4 w-4" />
                {item.label}
              </li>
            ))}
          </ul>
        </AnimateIn>
      </Container>
    </Section>
  );
}
