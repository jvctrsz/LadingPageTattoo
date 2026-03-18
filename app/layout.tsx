import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./Components/Navigation";
import { ReactNode } from "react";
import Footer from "./Components/Footer";
import FloatingContact from "./Components/FloatingContact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Julia Pedrozo Tattoo",
  description: "Portfólio Julia Pedrozo",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:bg-black focus:text-white focus:px-4 focus:py-2"
        >
          Ir para a tela inicial.
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
