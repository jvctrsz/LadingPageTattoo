"use client";

import { faqs } from "@/src/Utils/mockData";
import { motion } from "motion/react";
import { useState } from "react";
import FAQItem from "@/app/faq/FAQItem";

export const FAQList = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section aria-label="Perguntas frequentes">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
