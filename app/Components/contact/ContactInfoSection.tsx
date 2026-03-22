"use client";

import { WHATSAPP_URL } from "@/src/config";
import { motion } from "motion/react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const contactItems = [
  {
    icon: <FaWhatsapp size={20} className="text-white" />,
    label: "WhatsApp",
    content: (
      <a href={WHATSAPP_URL} className="text-lg text-black/70 hover:text-black">
        (66) 99929-1515
      </a>
    ),
  },
  {
    icon: <MdEmail size={20} className="text-white" />,
    label: "Email",
    content: (
      <a
        href="mailto:jvictor26dev@gmail.com"
        className="text-lg text-black/70 hover:text-black"
      >
        jvictor26dev@gmail.com
      </a>
    ),
  },
  {
    icon: <FaInstagram size={20} className="text-white" />,
    label: "Instagram",
    content: (
      <a
        href="https://instagram.com/jvctrsz"
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg text-black/70 hover:text-black"
      >
        @jvctrsz
      </a>
    ),
  },
  {
    icon: <FaMapLocation size={20} className="text-white" />,
    label: "Localização",
    content: <span className="text-lg text-black/70">Sinop - MT</span>,
  },
];

const scheduleItems = [
  { day: "Seg - Sex", hours: "09:00 - 20:00" },
  { day: "Sábados", hours: "13:00 - 17:00" },
  { day: "Domingo", hours: "Fechado" },
];

export const ContactInfoSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <ul className="space-y-6 mb-12" aria-label="Canais de contato">
        {contactItems.map(({ icon, label, content }) => (
          <li key={label} className="flex items-start gap-4">
            <span
              className="w-12 h-12 bg-black flex items-center justify-center shrink-0"
              aria-hidden="true"
            >
              {icon}
            </span>
            <div>
              <strong className="block text-sm uppercase tracking-wider mb-1 text-gray-400 font-normal">
                {label}
              </strong>
              {content}
            </div>
          </li>
        ))}
      </ul>

      <aside className="bg-neutral-50 p-8" aria-label="Horários de atendimento">
        <h3 className="text-xl mb-4 text-gray-400">Atendimentos</h3>
        <dl className="space-y-2 text-black/70">
          {scheduleItems.map(({ day, hours }) => (
            <div key={day} className="flex justify-between">
              <dt>{day}</dt>
              <dd>{hours}</dd>
            </div>
          ))}
        </dl>
      </aside>
    </motion.div>
  );
};

export default ContactInfoSection;
