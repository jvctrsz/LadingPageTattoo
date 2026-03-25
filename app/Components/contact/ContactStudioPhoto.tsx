"use client";

import { motion } from "motion/react";

export const ContactStudioPhoto = () => {
  return (
    <section aria-label="Foto do estúdio" className="py-24 bg-neutral-50">
      <motion.figure
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="aspect-21/9 max-w-7xl mx-auto bg-neutral-200 overflow-hidden m-0"
      >
        <img
          src="https://images.unsplash.com/photo-1622373225880-a19e6dbcffbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBhcnRpc3QlMjB3b3Jrc3BhY2UlMjBzdHVkaW98ZW58MXx8fHwxNzczNzE3MDczfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Studio de tatuagem de Julia Pedrozo em Sinop, MT"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.figure>
    </section>
  );
};

export default ContactStudioPhoto;
