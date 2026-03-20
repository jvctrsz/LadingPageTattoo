"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioItems } from "@/src/Utils/mockData";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Fine Line", "Blackwork", "Floral"];

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen">
      <section className="py-12 lg:pt-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-white/60 text-sm uppercase tracking-[0.3em] mb-4">
              Portfólio
            </div>
            <h1 className="text-3xl lg:text-5xl">
              Meus
              <br />
              <span className="text-white/40">Trabalhos</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-8 sticky top-20 bg-white z-40 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 text-sm uppercase tracking-wider whitespace-nowrap transition-all ${
                  activeFilter === category
                    ? "bg-black text-white"
                    : "bg-neutral-100 text-black hover:bg-neutral-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative aspect-3/4 overflow-hidden bg-black cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="text-white/60 text-xs uppercase tracking-wider mb-2">
                        {item.category}
                      </div>
                      <h3 className="text-white text-xl">{item.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <div className="text-center py-24">
              <p className="text-black/40">No works found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
export default Portfolio;
