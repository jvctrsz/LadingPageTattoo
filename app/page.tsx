import type { Metadata } from "next";
import { HeroSection } from "./Components/home/HeroSection";
import { FeaturedWorksSection } from "./Components/home/FeaturedWorksSection";

export const metadata: Metadata = {
  title: "Julia Pedrozo Tattoo | Tatuadora em Sinop - MT",
  description:
    "Portfólio de Julia Pedrozo, tatuadora especialista em Blackwork e Fine Line em Sinop - MT. Também atende Anime, Old School e Floral. Agende sua tatuagem.",
  keywords: [
    "tatuadora",
    "tattoo",
    "sinop",
    "sinop mt",
    "fine line",
    "blackwork",
    "anime tattoo",
    "old school",
    "julia pedrozo",
    "tatuadora sinop",
  ],
  openGraph: {
    title: "Julia Pedrozo Tattoo | Tatuadora em Sinop - MT",
    description:
      "Portfólio de Julia Pedrozo, tatuadora especialista em Blackwork e Fine Line em Sinop - MT. Também atende Anime, Old School e Floral.",
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
