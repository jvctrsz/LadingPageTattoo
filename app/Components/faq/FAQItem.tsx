"use client";

import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { motion } from "motion/react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div className="border-b border-black/10">
      <h3>
        <button
          onClick={onToggle}
          className="w-full py-6 flex items-start justify-between gap-4 text-left hover:opacity-70 transition-opacity"
          aria-expanded={isOpen}
        >
          <span className="text-xl flex-1 text-black/50">{question}</span>
          {isOpen ? (
            <MinusIcon className="size-4 shrink-0 text-black/50" />
          ) : (
            <PlusIcon className="size-4 shrink-0 text-black/50" />
          )}
        </button>
      </h3>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="pb-6"
        >
          <p className="text-black/70 leading-relaxed">{answer}</p>
        </motion.div>
      )}
    </div>
  );
};

export default FAQItem;
