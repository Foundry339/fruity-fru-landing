import { Sticker, type StickerKind } from "@/components/ui/Sticker";
import { cn } from "@/lib/cn";

interface Piece {
  kind: StickerKind;
  className: string;
  color: string;
  size: string;
  delay?: string;
}

const palette = {
  pink: "var(--color-fruity-pink)",
  berry: "var(--color-deep-berry)",
  yellow: "var(--color-soft-yellow)",
  blush: "var(--color-blush)",
};

const presets: Record<string, Piece[]> = {
  hero: [
    { kind: "star", className: "top-[8%] left-[4%]", color: palette.yellow, size: "w-8 h-8" },
    { kind: "sparkle", className: "hidden sm:block top-[18%] right-[8%]", color: palette.berry, size: "w-6 h-6" },
    { kind: "heart", className: "bottom-[14%] left-[10%]", color: palette.pink, size: "w-7 h-7" },
    { kind: "sparkle", className: "bottom-[8%] right-[6%]", color: palette.berry, size: "w-10 h-10" },
    { kind: "star", className: "top-[45%] left-[1%]", color: palette.pink, size: "w-6 h-6" },
  ],
  section: [
    { kind: "sparkle", className: "top-0 right-[6%]", color: palette.yellow, size: "w-6 h-6" },
    { kind: "heart", className: "bottom-0 left-[4%]", color: palette.pink, size: "w-6 h-6" },
  ],
  corner: [
    { kind: "star", className: "-top-3 -right-3", color: palette.yellow, size: "w-7 h-7" },
    { kind: "heart", className: "-bottom-3 -left-3", color: palette.pink, size: "w-7 h-7" },
  ],
};

export function DecorativeField({
  preset = "section",
  className,
}: {
  preset?: keyof typeof presets;
  className?: string;
}) {
  const pieces = presets[preset];
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      {pieces.map((p, i) => (
        <Sticker
          key={i}
          kind={p.kind}
          color={p.color}
          className={cn("absolute animate-float opacity-80", p.size, p.className)}
          style={{ animationDelay: `${i * 0.6}s`, ["--rot" as string]: `${(i % 2 === 0 ? 1 : -1) * 6}deg` } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
