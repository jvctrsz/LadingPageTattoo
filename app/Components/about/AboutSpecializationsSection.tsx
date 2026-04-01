"use client";

import { motion } from "motion/react";
import SectionTitle from "../SectionTitle";
import { specializations } from "@/src/Utils/mockData";

export const AboutSpecializationsSection = () => {
  return (
    <section
      aria-label="Especializações"
      className="py-24 lg:py-32 bg-neutral-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionTitle title="Minhas" subTitle="Especializações" />
        </motion.div>

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
              <h3 className="text-2xl mb-4 text-black/30">{spec.title}</h3>
              <p className="text-black/70 leading-relaxed">
                {spec.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutSpecializationsSection;
