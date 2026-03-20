"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-3/4 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1769605767701-6e5a680ef685?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHRhdHRvbyUyMGFydGlzdCUyMGNyZWF0aXZlfGVufDF8fHx8MTc3MzcxNzA3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Alex River - Tattoo Artist"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl mb-8">
                Minha
                <br />
                <span className="text-black/40">Tragetória</span>
              </h2>
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

      <section className="py-24 lg:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl mb-6 text-black/40">
              Especializações
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="text-center"
            >
              <h3 className="text-2xl mb-4 text-gray-400">Fine Line</h3>
              <p className="text-black/70 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent sed justo eget arcu malesuada tincidunt quis vitae
                velit.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <h3 className="text-2xl mb-4 text-gray-400">Blackwork</h3>
              <p className="text-black/70 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent sed justo eget arcu malesuada tincidunt quis vitae
                velit.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-2xl mb-4 text-gray-400">Floral</h3>
              <p className="text-black/70 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent sed justo eget arcu malesuada tincidunt quis vitae
                velit.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl mb-8 text-black/40">
                Studio
              </h2>
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
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1622373225880-a19e6dbcffbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBhcnRpc3QlMjB3b3Jrc3BhY2UlMjBzdHVkaW98ZW58MXx8fHwxNzczNzE3MDczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="INK STUDIO workspace"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
