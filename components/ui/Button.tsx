import { cn } from "@/lib/cn";
import { SQUARE_PAYMENT_URL } from "@/lib/site";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "light";
type Size = "md" | "lg" | "sm";

const variants: Record<Variant, string> = {
  // deep-berry (not fruity-pink) so white text meets WCAG AA contrast
  primary:
    "bg-[var(--color-deep-berry)] text-white shadow-md shadow-[var(--color-deep-berry)]/30 hover:bg-[var(--color-berry-darker)] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-[var(--color-dark)] text-white shadow-md hover:bg-black hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "bg-white text-[var(--color-berry-darker)] border-2 border-[var(--color-fruity-pink)] hover:bg-[var(--color-pale-pink)] hover:-translate-y-0.5 active:translate-y-0",
  light:
    "bg-white text-[var(--color-berry-darker)] shadow-lg hover:bg-[var(--color-pale-pink)] hover:-translate-y-0.5 active:translate-y-0",
  ghost: "bg-transparent text-[var(--color-berry-darker)] hover:bg-[var(--color-blush)]/50",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-display tracking-wide transition-all duration-200 ease-out whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-dark)]";

export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  external = false,
  className,
  children,
  ...props
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  /** Opens in a new tab (used for the Square payment link). */
  external?: boolean;
  className?: string;
  children: React.ReactNode;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">) {
  return (
    <a
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </a>
  );
}

/** Every "Book a Party" action goes through here so it always uses SQUARE_PAYMENT_URL. */
export function BookButton({
  children = "Book a Party",
  ...props
}: Omit<React.ComponentProps<typeof LinkButton>, "href" | "external" | "children"> & {
  children?: React.ReactNode;
}) {
  return (
    <LinkButton href={SQUARE_PAYMENT_URL} external {...props}>
      {children}
    </LinkButton>
  );
}
