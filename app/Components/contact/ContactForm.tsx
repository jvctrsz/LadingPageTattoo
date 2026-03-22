"use client";

import { motion } from "motion/react";
import { type ChangeEvent, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import ContactField from "./ContactField";

const bodyPlacements = [
  "Braço",
  "Antebraço",
  "Ombro",
  "Costas",
  "Peito",
  "Perna",
  "Tornozelo",
  "Pescoço",
  "Punho",
  "Outro",
];

const inputClass =
  "w-full px-4 py-3 border border-black/20 focus:border-black focus:outline-none transition-colors";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tattooIdea: "",
    placement: "",
    message: "",
  });

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6"
      noValidate
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <fieldset className="contents" aria-label="Dados pessoais e tatuagem">
        <legend className="sr-only">
          Dados pessoais e detalhes da tatuagem
        </legend>

        <ContactField label="Nome" name="name">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
            className={inputClass}
          />
        </ContactField>

        <ContactField label="Email" name="email">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            className={inputClass}
          />
        </ContactField>

        <ContactField label="Celular" name="phone">
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
            className={inputClass}
          />
        </ContactField>

        <ContactField label="Ideia de Tatuagem" name="tattooIdea">
          <input
            type="text"
            id="tattooIdea"
            name="tattooIdea"
            value={formData.tattooIdea}
            onChange={handleChange}
            required
            placeholder="Ex: Fine line floral"
            className={inputClass}
          />
        </ContactField>

        <ContactField label="Local do Corpo" name="placement">
          <select
            id="placement"
            name="placement"
            value={formData.placement}
            onChange={handleChange}
            required
            className={`${inputClass} bg-white`}
          >
            <option value="">Selecione o local</option>
            {bodyPlacements.map((place) => (
              <option key={place} value={place}>
                {place}
              </option>
            ))}
          </select>
        </ContactField>

        <ContactField
          required={false}
          label="Detalhes Adicionais"
          name="message"
        >
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Referências, tamanho preferido, ou outras informações..."
            className={`${inputClass} resize-none`}
          />
        </ContactField>
      </fieldset>

      <button
        type="submit"
        className="w-full bg-black text-white py-4 flex items-center justify-center gap-2 hover:bg-black/90 transition-colors"
      >
        Enviar
        <FaPaperPlane className="size-4" aria-hidden="true" />
      </button>

      <p className="text-sm text-black/60 text-center">
        Entraremos em contato dentro de 24 a 48 horas para conversar sobre sua
        tatuagem e agendar uma consulta.
      </p>
    </motion.form>
  );
};

export default ContactForm;
