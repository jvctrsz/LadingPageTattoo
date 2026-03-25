"use client";

import { motion } from "motion/react";

export const FAQCta = () => {
  return (
    <section aria-label="Ainda tem dúvidas?" className="py-24 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="font-bold leading-none text-black/90 mb-6"
            style={{
              fontSize: "clamp(2rem, 4vw, 4rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Continua com{" "}
            <span className="font-light text-black/30">Dúvidas?</span>
          </h2>
          <p className="text-base text-black/60 mb-8 max-w-lg mx-auto leading-relaxed">
            Não encontrou o que precisava? Entre em contato e respondo
            pessoalmente.
          </p>
          <a
            href="/contatos"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 text-sm uppercase tracking-wider hover:bg-black/80 transition-colors"
          >
            Entre em contato
          </a>
        </motion.div>
      </div>
    </section>
  );
};
