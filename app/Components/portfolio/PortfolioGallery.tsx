"use client";

import { motion, AnimatePresence } from "motion/react";
import { portfolioItems } from "@/src/Utils/mockData";
import WorkCard from "./WorkCard";

type PortfolioItem = (typeof portfolioItems)[number];

interface PortfolioGalleryProps {
  filteredItems: PortfolioItem[];
  activeFilter: string;
}

export const PortfolioGallery = ({
  filteredItems,
  activeFilter,
}: PortfolioGalleryProps) => {
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
              <WorkCard
                key={item.id}
                work={item}
                variant="gallery"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              />
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
