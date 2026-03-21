"use client";

import { faqs } from "@/src/Utils/mockData";
import { motion } from "motion/react";
import { useState } from "react";
import FAQItem from "./FAQItem";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-10">
      <section className="py-14 lg:pt-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-white/60 text-sm uppercase tracking-[0.3em] mb-4">
              FAQ
            </div>
            <h1 className="text-3xl lg:text-5xl mb-6">
              Dúvidas
              <br />
              <span className="text-white/40">Frequentes</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section>
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
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl mb-6">
              Continua com
              <br />
              <span className="text-black/40">Dúvidas?</span>
            </h2>
            <p className="text-lg text-black/70 mb-8 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              sed justo eget arcu malesuada tincidunt quis vitae velit.
            </p>
            <a
              href="/contatos"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 text-sm uppercase tracking-wider hover:bg-black/90 transition-colors"
            >
              Entre em contato
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
