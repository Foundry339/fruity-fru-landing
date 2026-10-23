import { cn } from "@/lib/cn";

export type StickerKind =
  | "star"
  | "heart"
  | "bow"
  | "sparkle"
  | "flower"
  | "cherry";

function renderShape(kind: StickerKind, color: string): React.ReactNode {
  switch (kind) {
    case "star":
      return <path d="M12 2.5l2.47 6.62 7.03.32-5.53 4.44 1.9 6.79L12 16.9l-5.87 3.77 1.9-6.79-5.53-4.44 7.03-.32L12 2.5z" />;
    case "heart":
      return (
        <path d="M12 21.3l-1.4-1.32C5.4 15.4 2 12.3 2 8.6 2 5.5 4.4 3.1 7.5 3.1c1.7 0 3.4.8 4.5 2.1 1.1-1.3 2.8-2.1 4.5-2.1 3.1 0 5.5 2.4 5.5 5.5 0 3.7-3.4 6.8-8.6 11.4L12 21.3z" />
      );
    case "bow":
      return (
        <>
          <path d="M12 12C9 6 6 5 3 12C6 19 9 18 12 12Z" fill={color} stroke="none" />
          <path d="M12 12C15 6 18 5 21 12C18 19 15 18 12 12Z" fill={color} stroke="none" />
          <circle cx="12" cy="12" r="1.8" fill={color} stroke="none" />
        </>
      );
    case "sparkle":
      return (
        <path d="M12 2c.6 4.2 1.8 5.4 6 6-4.2.6-5.4 1.8-6 6-.6-4.2-1.8-5.4-6-6 4.2-.6 5.4-1.8 6-6zM19 15c.3 1.9.8 2.4 2.7 2.7-1.9.3-2.4.8-2.7 2.7-.3-1.9-.8-2.4-2.7-2.7 1.9-.3 2.4-.8 2.7-2.7z" />
      );
    case "flower":
      return (
        <path d="M12 8a3 3 0 100 6 3 3 0 000-6zm0-6c1.7 0 3 1.6 3 3.5 0 1-.4 1.9-1 2.5.9-.2 1.9-.1 2.8.4 1.6.9 2.3 2.8 1.6 4.4-.7 1.6-2.6 2.3-4.3 1.7.5.7.9 1.7.9 2.7 0 1.9-1.3 3.5-3 3.5s-3-1.6-3-3.5c0-1 .4-1.9 1-2.5-.9.2-1.9.1-2.8-.4-1.6-.9-2.3-2.8-1.6-4.4.7-1.6 2.6-2.3 4.3-1.7-.5-.7-.9-1.7-.9-2.7C9 3.6 10.3 2 12 2z" />
      );
    case "cherry":
      return (
        <>
          <path
            d="M13 4.3C11.1 7.8 9.7 11.2 9.1 14.5M13 4.3c1.8 3.3 3.1 6.4 3.7 8.7"
            fill="none"
            stroke={color}
            strokeWidth={1.5}
            strokeLinecap="round"
          />
          <circle cx="9" cy="17" r="2.6" fill={color} stroke="none" />
          <circle cx="15.3" cy="15.3" r="2.6" fill={color} stroke="none" />
        </>
      );
  }
}

const filled = new Set<StickerKind>(["star", "heart", "bow", "sparkle", "flower"]);

export function Sticker({
  kind,
  className,
  color = "currentColor",
  style,
}: {
  kind: StickerKind;
  className?: string;
  color?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("select-none", className)}
      style={style}
      fill={filled.has(kind) ? color : "none"}
      stroke={filled.has(kind) ? "none" : color}
      strokeWidth={filled.has(kind) ? 0 : 1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {renderShape(kind, color)}
    </svg>
  );
}
