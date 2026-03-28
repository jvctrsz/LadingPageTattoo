"use client";

import { motion } from "motion/react";
import { ButtonNav } from "./Components/ButtonNav";

export default function NotFound() {
  return (
    <>
      <title>Página não encontrada | Julia Pedrozo Tattoo</title>
      <section
        aria-labelledby="error-heading"
        className="bg-neutral-50 pt-36 pb-24 lg:pt-48 lg:pb-32 flex flex-col justify-center min-h-[70vh]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col items-start"
          >
            <div className="flex items-center gap-4 mb-8 w-full max-w-2xl">
              <p className="text-black/30 text-xs uppercase tracking-[0.4em] m-0">
                Erro 404
              </p>
              <hr
                aria-hidden="true"
                className="flex-1 border-t border-black/10"
              />
            </div>

            <h1
              id="error-heading"
              className="font-bold leading-none text-black/90 mb-6"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 5rem)",
                letterSpacing: "-0.03em",
              }}
            >
              Página não{" "}
              <span className="font-light text-black/30">encontrada</span>
            </h1>

            <p className="text-black/60 max-w-lg mb-12 text-lg">
              A página que você está procurando não existe, foi removida ou o
              formato do endereço está incorreto.
            </p>

            <ButtonNav color="black" path="/">
              Voltar para o Início
            </ButtonNav>
          </motion.div>
        </div>
      </section>
    </>
  );
}
