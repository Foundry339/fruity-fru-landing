import type { Metadata } from "next";
import { Lilita_One, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site";

const lilitaOne = Lilita_One({
  variable: "--font-lilita",
  subsets: ["latin"],
  weight: "400",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const title = "Fruity-Fru | DIY Party Experiences in Connecticut & the Tri-State Area";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description:
    "Fruity-Fru brings stylish DIY accessory parties to Connecticut and the Tri-State Area. Customize hats, bags, pouches and more with your crew. Book your party today!",
  keywords: [
    "DIY party Connecticut",
    "mobile party experience",
    "birthday party ideas Connecticut",
    "bachelorette party activity",
    "bridal shower activity",
    "girls night activity",
    "kids party activity",
    "team building activity",
    "patch bar party",
  ],
  openGraph: {
    title,
    description:
      "Stylish DIY accessory parties, delivered to you. Customize hats, bags, and pouches with your crew. Serving Connecticut + the Tri-State Area.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Stylish DIY accessory parties, delivered to you. Customize hats, bags, and pouches with your crew.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${lilitaOne.variable} ${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[var(--color-pale-pink)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
