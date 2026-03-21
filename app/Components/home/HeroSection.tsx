"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ButtonNav } from "@/app/Components";

export const HeroSection = () => {
  return (
    <section
      aria-label="Apresentação da Tatuadora"
      className="py-24 lg:py-32 bg-neutral-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <p className="text-black/40 text-sm uppercase tracking-[0.3em] mb-6">
              Tatuadora
            </p>
            <h1 className="text-4xl lg:text-5xl mb-6 text-black/40">
              Julia Pedrozo
            </h1>
            <p className="text-lg text-black/70 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              sed justo eget arcu malesuada tincidunt quis vitae velit. Praesent
              tempor mi id est dapibus laoreet. Vestibulum eget suscipit augue.
              Curabitur vel tellus at magna fermentum interdum. In vel tellus
              euismod.
            </p>
            <p className="text-lg text-black/70 mb-8 leading-relaxed">
              Fusce orci sem, maximus et enim ac, pharetra tincidunt mauris.
              Aliquam at nibh eget leo hendrerit blandit ut vitae tellus.
              Pellentesque eu tortor vel arcu mollis laoreet quis at lorem.
              Mauris nec est eget nisl venenatis tempus quis et dui. Sed eget
              sollicitudin mauris, vel congue justo.
            </p>
            <ButtonNav path="/sobre">Saiba Mais</ButtonNav>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 m-0"
          >
            <div className="relative aspect-3/4 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1769605767701-6e5a680ef685?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHRhdHRvbyUyMGFydGlzdCUyMGNyZWF0aXZlfGVufDF8fHx8MTc3MzcxNzA3NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Julia Pedrozo - Tatuadora em Sinop, MT"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </motion.figure>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
