"use client";

import { useState } from "react";
import { portfolioItems } from "@/src/Utils/mockData";
import { classNames } from "@/src/miscellaneous";
import { PortfolioGallery } from "./PortfolioGallery";

const categories = ["Todos", "Blackwork", "Fine Line", "Outros"];

const MAIN_CATEGORIES = ["Blackwork", "Fine Line"];

const getFilteredItems = (filter: string) => {
  if (filter === "Todos") return portfolioItems;
  if (filter === "Outros")
    return portfolioItems.filter(
      (item) => !MAIN_CATEGORIES.includes(item.category),
    );
  return portfolioItems.filter((item) => item.category === filter);
};

export const PortfolioGrid = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const filteredItems = getFilteredItems(activeFilter);
  return (
    <section className="pt-20 lg:pt-28">
      <nav
        aria-label="Filtrar por categoria"
        className="py-4 sticky top-20 bg-white z-40 border-b border-black/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap gap-3 pb-2">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => setActiveFilter(category)}
                  aria-pressed={activeFilter === category}
                  className={classNames(
                    "px-6 py-2 text-sm uppercase tracking-wider whitespace-nowrap transition-all",
                    activeFilter === category
                      ? "bg-black text-white"
                      : "bg-neutral-100 text-black hover:bg-neutral-200",
                  )}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <PortfolioGallery
        filteredItems={filteredItems}
        activeFilter={activeFilter}
      />
    </section>
  );
};

export default PortfolioGrid;
