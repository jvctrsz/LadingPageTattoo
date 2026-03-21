"use client";

import { motion, AnimatePresence } from "motion/react";
import { portfolioItems } from "@/src/Utils/mockData";

type PortfolioItem = (typeof portfolioItems)[number];

interface PortfolioGalleryProps {
  filteredItems: PortfolioItem[];
  activeFilter: string;
}

export const PortfolioGallery = ({ filteredItems, activeFilter }: PortfolioGalleryProps) => {
  return (
    <section aria-label="Itens do portfólio" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.ul
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            aria-label={`Trabalhos de ${activeFilter === "All" ? "todas as categorias" : activeFilter}`}
          >
            {filteredItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative aspect-3/4 overflow-hidden bg-black cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={`${item.title} — ${item.category} por Julia Pedrozo`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <footer
                  aria-hidden="true"
                  className="absolute inset-0 flex flex-col justify-end p-6 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="text-white/60 text-xs uppercase tracking-wider mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl">{item.title}</h3>
                </footer>
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>

        {!filteredItems.length && (
          <p className="text-center text-black/40 py-24">
            Nenhum trabalho encontrado nesta categoria.
          </p>
        )}
      </div>
    </section>
  );
};

export default PortfolioGallery;
