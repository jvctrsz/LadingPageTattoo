import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-white divide-y divide-white/10 ">
      <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div>
          <h3 className="text-2xl mb-4">
            JULIA<span className="text-white/60">PEDROZO</span>
          </h3>
          <p className="text-white/60">
            Tatuadora especialista em Fine Line, Blackwork e Floral. Sinop - MT.
          </p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-wider mb-4">
            Acesso Rápido
          </h4>
          <div className="flex flex-col gap-2">
            <Link
              href="/portfolio"
              className="text-white/60 hover:text-white transition-colors"
            >
              Portfólio
            </Link>
            <Link
              href="/sobre"
              className="text-white/60 hover:text-white transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="/contatos"
              className="text-white/60 hover:text-white transition-colors"
            >
              Contatos
            </Link>
            <Link
              href="/faq"
              className="text-white/60 hover:text-white transition-colors"
            >
              FAQ
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-wider mb-4">Contatos</h4>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/jvctrsz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:jvictor26dev@gmail.com"
              className="text-white/60 hover:text-white transition-colors hover:scale-110"
              aria-label="Email"
            >
              <MdEmail />
            </a>
            <a
              href="https://wa.me//5566999291515?text=Olá,%20gostaria%20de%20realizar%20um%20agendamento."
              className="text-white/60 hover:text-white transition-colors hover:scale-110"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
      <div className="py-8 text-center text-white/40 text-sm">
        <p>
          &copy; {new Date().getFullYear()} JULIA PEDROZO. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
