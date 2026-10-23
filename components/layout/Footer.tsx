import { navLinks, siteConfig } from "@/lib/site";
import { Sticker } from "@/components/ui/Sticker";
import { InstagramIcon, TikTokIcon } from "@/components/ui/SocialIcon";

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--color-dark)] text-white/90">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <a href="#home" className={`flex items-center gap-2 font-display text-2xl text-white ${focus}`}>
              <Sticker kind="sparkle" color="var(--color-fruity-pink)" className="h-7 w-7" />
              {siteConfig.name}
            </a>
            <p className="mt-3 max-w-xs text-sm text-white/70">{siteConfig.tagline}</p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={`transition-colors hover:text-white ${focus}`}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-3">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={`rounded-full bg-white/10 p-2.5 transition-colors hover:bg-[var(--color-deep-berry)] ${focus}`}
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className={`rounded-full bg-white/10 p-2.5 transition-colors hover:bg-[var(--color-deep-berry)] ${focus}`}
            >
              <TikTokIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/60">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
