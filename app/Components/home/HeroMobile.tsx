"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ButtonNav } from "@/app/Components";

export const HeroMobile = () => {
  return (
    <section
      aria-label="Apresentação da Tatuadora"
      className="lg:hidden py-24 bg-neutral-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid gap-12 items-center">
          <motion.figure
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="m-0"
          >
            <div className="relative aspect-3/4 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1769605767701-6e5a680ef685?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHRhdHRvbyUyMGFydGlzdCUyMGNyZWF0aXZlfGVufDF8fHx8MTc3MzcxNzA3NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Julia Pedrozo - Tatuadora em Sinop, MT"
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
          </motion.figure>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-black/40 text-sm uppercase tracking-[0.3em] mb-4">
              Tatuadora
            </p>
            <h1
              className="text-4xl font-bold mb-4 text-black/90"
              style={{ fontFamily: "'Didot', serif" }}
              aria-hidden="true"
            >
              Julia Pedrozo
            </h1>
            <p className="text-base text-black/65 mb-8 leading-relaxed">
              Especialista em Blackwork e Fine Line. Cada traço nascido com
              intenção, cada tatuagem uma história única na sua pele.
            </p>
            <ButtonNav path="/sobre">Saiba Mais</ButtonNav>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
