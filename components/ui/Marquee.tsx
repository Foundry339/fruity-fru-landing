import { Sticker, type StickerKind } from "@/components/ui/Sticker";

const stickerCycle: StickerKind[] = ["heart", "star", "cherry", "sparkle", "bow", "flower"];

function Track({ items, hidden }: { items: string[]; hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((text, i) => (
        <li key={text} className="flex shrink-0 items-center gap-6 pr-6 sm:gap-8 sm:pr-8">
          <span className="font-display whitespace-nowrap text-lg uppercase tracking-wide sm:text-xl">
            {text}
          </span>
          <Sticker
            kind={stickerCycle[i % stickerCycle.length]}
            color="var(--color-soft-yellow)"
            className="h-5 w-5 shrink-0"
          />
        </li>
      ))}
    </ul>
  );
}

export function Marquee({ items }: { items: string[] }) {
  return (
    <div className="marquee group relative overflow-hidden bg-[var(--color-deep-berry)] py-3.5 text-white sm:py-4">
      <div className="marquee-track flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        <Track items={items} />
        <Track items={items} hidden />
        <Track items={items} hidden />
        <Track items={items} hidden />
      </div>
    </div>
  );
}
