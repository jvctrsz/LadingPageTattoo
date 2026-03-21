"use client";

import { motion } from "motion/react";

interface PageHeaderProps {
  title: string;
  subTitle: string;
  page: string;
}

const PageHeader = ({ page, subTitle, title }: PageHeaderProps) => {
  return (
    <section className="py-14 lg:pt-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-white/60 text-sm uppercase tracking-[0.3em] mb-4">
            {page}
          </div>
          <h1 className="text-3xl lg:text-5xl">
            {title}
            <br />
            <span className="text-white/40">{subTitle}</span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;
