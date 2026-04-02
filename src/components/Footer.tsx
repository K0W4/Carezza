import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import logo from '../assets/logo.svg'

export function Footer() {
  return (
    <footer className="bg-sage-deep pt-8 pb-6 border-t border-cream/10 z-20 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center">
          
          <div className="w-24 md:w-32 mb-6">
            <a href="#" className="block transition-all duration-500 hover:scale-105 active:opacity-50">
              <img 
                src={logo} 
                alt="Carezza Perfumes Logo" 
                className="w-full h-auto brightness-0 invert opacity-90" 
              />
            </a>
          </div>

          <div className="flex items-center gap-5 mb-6">
            <a href="#" className="w-9 h-9 rounded-full border border-cream/30 flex items-center justify-center text-cream/80 transition-all duration-300 hover:bg-cream hover:text-sage-deep active:opacity-50 hover:border-cream">
              <FaInstagram className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-cream/30 flex items-center justify-center text-cream/80 transition-all duration-300 hover:bg-cream hover:text-sage-deep active:opacity-50 hover:border-cream">
              <FaWhatsapp className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-cream/30 flex items-center justify-center text-cream/80 transition-all duration-300 hover:bg-cream hover:text-sage-deep active:opacity-50 hover:border-cream">
              <FaEnvelope className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="w-16 h-px bg-sage-dark mb-4"></div>

          <div className="text-center space-y-2">
            <p className="text-[10px] md:text-xs text-cream/40 tracking-widest">
              Carezza Perfumes © 2026. Todos os direitos reservados.
            </p>
            <p className="text-[8px] md:text-[10px] text-cream/30 tracking-widest font-mono">
              CNPJ: 465.993.985/0001-49
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}
