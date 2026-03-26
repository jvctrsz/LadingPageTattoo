import type { Metadata } from "next";
import { HeroSection } from "./Components/home/HeroSection";
import { FeaturedWorksSection } from "./Components/home/FeaturedWorksSection";

export const metadata: Metadata = {
  title: "Julia Pedrozo Tattoo | Tatuadora em Sinop - MT",
  description:
    "Portfólio de Julia Pedrozo, tatuadora especialista em Fine Line, Blackwork e Floral em Sinop - MT. Agende sua tatuagem.",
  keywords: [
    "tatuadora",
    "tattoo",
    "sinop",
    "fine line",
    "blackwork",
    "anime",
    "old school",
    "julia pedrozo",
  ],
  openGraph: {
    title: "Julia Pedrozo Tattoo | Tatuadora em Sinop - MT",
    description:
      "Portfólio de Julia Pedrozo, tatuadora especialista em Fine Line, Blackwork e Floral em Sinop - MT.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <FeaturedWorksSection />
    </div>
  );
}
