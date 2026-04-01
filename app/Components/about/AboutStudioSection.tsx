"use client";

import { motion } from "motion/react";
import SectionTitle from "../SectionTitle";
import Image from "next/image";

export const AboutStudioSection = () => {
  return (
    <section aria-label="O Studio" className="py-24 lg:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle title="Meu" subTitle="Espaço" />
            <div className="space-y-6 text-lg text-black/70 leading-relaxed">
              <p>
                Preparei um ambiente com aconchego e tranquilidade. O estúdio
                foi planejado para oferecer conforto e segurança, transformando
                o seu momento em uma experiência leve.
              </p>
            </div>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-4/3 overflow-hidden m-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1622373225880-a19e6dbcffbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBhcnRpc3QlMjB3b3Jrc3BhY2UlMjBzdHVkaW98ZW58MXx8fHwxNzczNzE3MDczfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Studio de tatuagem de Julia Pedrozo em Sinop, MT"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.figure>
        </div>
      </div>
    </section>
  );
};

export default AboutStudioSection;
