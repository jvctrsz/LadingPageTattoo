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
                Minha história com a arte começou muito antes da tatuagem. Desde
                sempre, fui interessada em desenhos, pinturas e na arte em
                geral, e sempre tive o desejo de trazer essa paixão para a minha
                vida profissional. Aos 18 anos, iniciei meu percurso no mundo da
                tatuagem. Fiz cursos para me tornar tatuadora e passei a
                frequentar o ambiente dos estúdios para aprender de perto, antes
                mesmo de começar a atender. Após um ano de estudos intensos, dei
                meus primeiros passos oficiais na área.
              </p>
              <p>
                Hoje, já são 3 anos trabalhando como tatuadora. Ao longo desse
                tempo, me especializei em vários estilos, focando naquilo que
                mais me traz inspiração: o Blackwork. Procuro evoluir minhas
                técnicas a cada dia para entregar sempre a melhor qualidade em
                cada trabalho.
              </p>
              <p>
                É uma imensa realização trabalhar com arte e ter me encontrado
                na tatuagem. Poder colocar um pouquinho da minha essência em
                cada desenho e deixar isso marcado em outras pessoas é algo
                muito especial para mim. Agradeço a todos que estiveram comigo
                nesse percurso e por me ajudarem a conquistar o meu próprio
                espaço.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutTrajectorySection;
