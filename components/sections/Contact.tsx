import { Mail, MapPin, Phone } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { BookButton } from "@/components/ui/Button";
import { DecorativeField } from "@/components/ui/DecorativeField";
import { InstagramIcon, TikTokIcon } from "@/components/ui/SocialIcon";
import { siteConfig } from "@/lib/site";

const link =
  "rounded-md font-semibold text-[var(--color-dark)] hover:text-[var(--color-deep-berry)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-dark)]";
const iconBubble =
  "flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-deep-berry)] text-white";
const socialBtn =
  "flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-pale-pink)] text-[var(--color-berry-darker)] shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[var(--color-deep-berry)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-dark)]";

export function Contact() {
  return (
    <Section id="contact" className="bg-white">
      <Container>
        <AnimateIn>
          <SectionHeading
            eyebrow="Contact"
            title="Let's talk parties"
            description="Questions about a date, a big group, or something custom? Reach out any time."
          />
        </AnimateIn>

        <AnimateIn className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-3">
          <div className="flex items-center gap-3 sm:flex-col sm:text-center">
            <span className={iconBubble}><Mail className="h-5 w-5" /></span>
            <a href={`mailto:${siteConfig.email}`} className={`${link} break-all`}>{siteConfig.email}</a>
          </div>
          <div className="flex items-center gap-3 sm:flex-col sm:text-center">
            <span className={iconBubble}><Phone className="h-5 w-5" /></span>
            <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`} className={link}>{siteConfig.phone}</a>
          </div>
          <div className="flex items-center gap-3 sm:flex-col sm:text-center">
            <span className={iconBubble}><MapPin className="h-5 w-5" /></span>
            <span className="font-semibold text-[var(--color-dark)]">{siteConfig.serviceArea}</span>
          </div>
        </AnimateIn>

        <div className="mt-8 flex justify-center gap-3">
          <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={`${socialBtn}`}>
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a href={siteConfig.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className={`${socialBtn}`}>
            <TikTokIcon className="h-5 w-5" />
          </a>
        </div>

        <AnimateIn className="mt-16" direction="scale">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[var(--color-fruity-pink)] to-[var(--color-deep-berry)] px-6 py-14 text-center sm:py-20">
            <DecorativeField preset="hero" />
            <h2 className="relative font-display text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
              Ready to party?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-white">
              Gather your crew and book today — we bring the whole experience to you.
            </p>
            <div className="relative mt-8 flex justify-center">
              <BookButton
                variant="light"
                size="lg"
                className="w-full sm:w-auto"
              />
            </div>
          </div>
        </AnimateIn>
      </Container>
    </Section>
  );
}
