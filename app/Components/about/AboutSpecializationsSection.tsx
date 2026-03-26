"use client";

import { motion } from "motion/react";

const specializations = [
  {
    title: "Blackwork",
    description:
      "Composições marcantes em tinta preta, com forte apelo visual e durabilidade. Perfeito para quem quer personalidade e presença em cada traço.",
  },
  {
    title: "Fine Line",
    description:
      "Traços delicados e precisos que resultam em tatuagens de extremo refinamento. Ideal para quem busca leveza, feminilidade e detalhes sutis na pele.",
  },
  {
    title: "Outros",
    description:
      "Além das especializações principais, também trabalho com Floral, Anime, Old School e artes totalmente personalizadas.",
  },
];

export const AboutSpecializationsSection = () => {
  return (
    <section aria-label="Especializações" className="py-24 lg:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl text-black/40 text-center mb-16"
        >
          Especializações
        </motion.h2>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specializations.map((spec, index) => (
            <motion.li
              key={spec.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-2xl mb-4 text-gray-400">{spec.title}</h3>
              <p className="text-black/70 leading-relaxed">{spec.description}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutSpecializationsSection;
