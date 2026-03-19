"use client";

import { motion } from "motion/react";
import { featuredWorks } from "../src/Utils/mockData";
import { ButtonNav } from "./Components";

export default function Home() {
  return (
    <div className="bg-white">
      <section className="py-24 lg:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="text-black/40 text-sm uppercase tracking-[0.3em] mb-6">
                Tatuadora
              </div>
              <h2 className="text-4xl lg:text-5xl mb-6 text-black/40">
                Julia Pedrozo
              </h2>
              <p className="text-lg text-black/70 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent sed justo eget arcu malesuada tincidunt quis vitae
                velit. Praesent tempor mi id est dapibus laoreet. Vestibulum
                eget suscipit augue. Curabitur vel tellus at magna fermentum
                interdum. In vel tellus euismod.
              </p>
              <p className="text-lg text-black/70 mb-8 leading-relaxed">
                Fusce orci sem, maximus et enim ac, pharetra tincidunt mauris.
                Aliquam at nibh eget leo hendrerit blandit ut vitae tellus.
                Pellentesque eu tortor vel arcu mollis laoreet quis at lorem.
                Mauris nec est eget nisl venenatis tempus quis et dui. Sed eget
                sollicitudin mauris, vel congue justo.
              </p>
              <ButtonNav path="/sobre">Saiba Mais</ButtonNav>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="aspect-3/4 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1769605767701-6e5a680ef685?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHRhdHRvbyUyMGFydGlzdCUyMGNyZWF0aXZlfGVufDF8fHx8MTc3MzcxNzA3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Tattoo Artist"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-4xl lg:text-6xl">
                <span className="text-3xl">Trabalhos</span>
                <br />
                <span className="text-black/40">Finalizados</span>
              </h2>
              <ButtonNav path="/portfolio">Ver Todos</ButtonNav>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {featuredWorks.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative aspect-4/5 overflow-hidden bg-black"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="self-end absolute bottom-0 left-0 right-0 p-6 inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white/60 text-xs uppercase tracking-wider mb-2">
                    {work.category}
                  </span>
                  <h3 className="text-white text-2xl">{work.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <ButtonNav path="/portfolio">Ver Todos</ButtonNav>
          </div>
        </div>
      </section>
    </div>
  );
}
