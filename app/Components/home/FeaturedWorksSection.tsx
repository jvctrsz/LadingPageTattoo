"use client";

import { motion } from "motion/react";
import { featuredWorks } from "@/src/Utils/mockData";
import { ButtonNav } from "@/app/Components";

export const FeaturedWorksSection = () => {
  return (
    <section aria-label="Galeria de Trabalhos em Destaque" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-16"
        >
          <h2 className="text-4xl lg:text-6xl">
            <span className="text-3xl">Trabalhos</span>
            <br />
            <span className="text-black/40">Finalizados</span>
          </h2>
          <nav aria-label="Ver portfólio completo" className="hidden sm:block">
            <ButtonNav path="/portfolio">Ver Todos</ButtonNav>
          </nav>
        </motion.div>

        <ul
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
          aria-label="Trabalhos selecionados"
        >
          {featuredWorks.map((work, index) => (
            <motion.li
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-4/5 overflow-hidden bg-black"
            >
              <img
                src={work.image}
                alt={`${work.title} — ${work.category} por Julia Pedrozo`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <footer
                aria-hidden="true"
                className="self-end absolute bottom-0 left-0 right-0 p-6 inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <span className="text-white/60 text-xs uppercase tracking-wider mb-2 block">
                  {work.category}
                </span>
                <h3 className="text-white text-2xl">{work.title}</h3>
              </footer>
            </motion.li>
          ))}
        </ul>

        <nav aria-label="Ver portfólio completo" className="mt-8 text-center sm:hidden">
          <ButtonNav path="/portfolio">Ver Todos</ButtonNav>
        </nav>
      </div>
    </section>
  );
};

export default FeaturedWorksSection;
