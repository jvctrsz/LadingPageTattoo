"use client";

import { motion } from "motion/react";
import SectionTitle from "../SectionTitle";

export const AboutTrajectorySection = () => {
  return (
    <section aria-label="Trajetória da Artista" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.figure
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-3/4 overflow-hidden m-0"
          >
            <img
              src="https://images.unsplash.com/photo-1769605767701-6e5a680ef685?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHRhdHRvbyUyMGFydGlzdCUyMGNyZWF0aXZlfGVufDF8fHx8MTc3MzcxNzA3NHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Julia Pedrozo - Tatuadora em Sinop, MT"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.figure>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle title="Minha" subTitle="Trajetória" />
            <div className="space-y-6 text-lg text-black/70 leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent sed justo eget arcu malesuada tincidunt quis vitae
                velit. Praesent tempor mi id est dapibus laoreet. Vestibulum
                eget suscipit augue. Curabitur vel tellus at magna fermentum
                interdum. In vel tellus euismod.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent sed justo eget arcu malesuada tincidunt quis vitae
                velit. Praesent tempor mi id est dapibus laoreet. Vestibulum
                eget suscipit augue. Curabitur vel tellus at magna fermentum
                interdum. In vel tellus euismod.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent sed justo eget arcu malesuada tincidunt quis vitae
                velit. Praesent tempor mi id est dapibus laoreet. Vestibulum
                eget suscipit augue. Curabitur vel tellus at magna fermentum
                interdum. In vel tellus euismod.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutTrajectorySection;
