"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ButtonNav } from "@/app/Components";

export const HeroDesktop = () => {
  return (
    <section
      aria-label="Apresentação da Tatuadora"
      className="hidden lg:flex items-end bg-neutral-50 min-h-[92vh] relative overflow-hidden px-16 xl:px-28 pb-20"
    >
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute right-0 top-0 w-[58%] h-full"
      >
        <Image
          src="https://images.unsplash.com/photo-1769605767701-6e5a680ef685?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHRhdHRvbyUyMGFydGlzdCUyMGNyZWF0aXZlfGVufDF8fHx8MTc3MzcxNzA3NHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Julia Pedrozo - Tatuadora em Sinop, MT"
          fill
          sizes="58vw"
          className="object-cover grayscale-20"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-neutral-50 via-neutral-50/30 to-transparent" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 max-w-3xl"
      >
        <header>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-black/40 text-xs uppercase tracking-[0.35em] mb-5"
          >
            Tatuadora · Sinop, MT
          </motion.p>

          <h1
            className="font-bold leading-none text-black/90 mb-6"
            style={{
              fontSize: "clamp(5rem, 9vw, 9rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Julia
            <br />
            Pedrozo
          </h1>
        </header>

        <p className="text-base text-black/65 mb-8 leading-relaxed max-w-sm">
          Especialista em Blackwork e Fine Line. Cada traço nascido com
          intenção, cada tatuagem uma história única na sua pele.
        </p>

        <ButtonNav path="/sobre">Saiba Mais</ButtonNav>
      </motion.div>
    </section>
  );
};
