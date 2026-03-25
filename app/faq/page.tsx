import type { Metadata } from "next";
import PageHeader from "../Components/PageHeader";
import { FAQList } from "../Components/faq/FAQList";
import { FAQCta } from "../Components/faq/FAQCta";

export const metadata: Metadata = {
  title: "FAQ | Julia Pedrozo Tattoo",
  description:
    "Dúvidas frequentes sobre tatuagem com Julia Pedrozo em Sinop - MT. Saiba tudo sobre cuidados, agendamento, orçamento e estilos.",
  keywords: [
    "faq",
    "dúvidas tatuagem",
    "cuidados tatuagem",
    "agendamento tattoo",
    "julia pedrozo",
  ],
  openGraph: {
    title: "FAQ | Julia Pedrozo Tattoo",
    description:
      "Dúvidas frequentes sobre tatuagem com Julia Pedrozo em Sinop - MT.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function FaqPage() {
  return (
    <main className="flex flex-col gap-10 bg-white">
      <PageHeader page="FAQ" title="Dúvidas" subTitle="Frequentes" />
      <FAQList />
      <FAQCta />
    </main>
  );
}
