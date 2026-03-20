"use client";

import { WHATSAPP_URL } from "@/src/config";
import { motion } from "motion/react";
import { useState } from "react";
import { FaInstagram, FaPaperPlane, FaWhatsapp } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tattooIdea: "",
    placement: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-14 lg:pt-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-white/60 text-sm uppercase tracking-[0.3em] mb-4">
              Contatos
            </div>
            <h1 className="text-3xl lg:text-5xl">
              Vamos criar
              <br />
              <span className="text-white/40">Juntos</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black flex items-center justify-center shrink-0">
                    <FaWhatsapp size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider mb-1 text-gray-400">
                      WhonehatsApp
                    </h3>
                    <a
                      href={WHATSAPP_URL}
                      className="text-lg text-black/70 hover:text-black"
                    >
                      (66) 99929-1515
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black flex items-center justify-center shrink-0">
                    <MdEmail size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider mb-1 text-gray-400">
                      Email
                    </h3>
                    <a
                      href="jvictor26dev@gmail.com"
                      className="text-lg text-black/70 hover:text-black"
                    >
                      jvictor26dev@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black flex items-center justify-center shrink-0">
                    <FaInstagram size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider mb-1 text-gray-400">
                      Instagram
                    </h3>
                    <a
                      href="https://instagram.com/jvctrsz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-black/70 hover:text-black"
                    >
                      @jvctrsz
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black flex items-center justify-center shrink-0">
                    <FaMapLocation size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider mb-1 text-gray-400">
                      Localização
                    </h3>
                    <p className="text-lg text-black/70">Sinop - MT</p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-50 p-8">
                <h3 className="text-xl mb-4 text-gray-400">Atendimentos</h3>
                <div className="space-y-2 text-black/70">
                  <div className="flex justify-between">
                    <span>Seg - Sex</span>
                    <span>09:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados</span>
                    <span>13:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo</span>
                    <span>Fechado</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm uppercase tracking-wider mb-2 text-gray-400"
                  >
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-black/20 focus:border-black focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm uppercase tracking-wider mb-2 text-gray-400"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-black/20 focus:border-black focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm uppercase tracking-wider mb-2 text-gray-400"
                  >
                    Celular
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-black/20 focus:border-black focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="tattooIdea"
                    className="block text-sm uppercase tracking-wider mb-2 text-gray-400"
                  >
                    Tattoo Ideia *
                  </label>
                  <input
                    type="text"
                    id="tattooIdea"
                    name="tattooIdea"
                    value={formData.tattooIdea}
                    onChange={handleChange}
                    required
                    placeholder="E.g., Fine line floral design"
                    className="w-full px-4 py-3 border border-black/20 focus:border-black focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="placement"
                    className="block text-sm uppercase tracking-wider mb-2 text-gray-400"
                  >
                    Local do Corpo *
                  </label>
                  <select
                    id="placement"
                    name="placement"
                    value={formData.placement}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-black/20 focus:border-black focus:outline-none transition-colors bg-white"
                  >
                    <option value="">Selecione o local</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm uppercase tracking-wider mb-2 text-gray-400"
                  >
                    Detalhes Adicionais
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Any reference images, size preferences, or additional information..."
                    className="w-full px-4 py-3 border border-black/20 focus:border-black focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 flex items-center justify-center gap-2 hover:bg-black/90 transition-colors disabled:opacity-50"
                >
                  Enviar
                  <FaPaperPlane className="size-4" />
                </button>

                <p className="text-sm text-black/60 text-center">
                  Entraremos em contato com você dentro de 24 a 48 horas para
                  conversar sobre sua tatuagem e agendar uma consulta.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-21/9 bg-neutral-200 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1622373225880-a19e6dbcffbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBhcnRpc3QlMjB3b3Jrc3BhY2UlMjBzdHVkaW98ZW58MXx8fHwxNzczNzE3MDczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="INK STUDIO location"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default Contacts;
