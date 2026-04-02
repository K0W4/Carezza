import { FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_NUMBER = '5500000000000'
const WHATSAPP_MESSAGE = 'Olá! Vim pelo site da Carezza e gostaria de saber mais.'

export function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 group flex items-center gap-4"
    >
      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 bg-sage-deep/90 backdrop-blur-sm border border-cream/20 text-cream text-[10px] uppercase tracking-widest font-semibold px-5 py-2.5 rounded-full shadow-xl whitespace-nowrap pointer-events-none">
        Falar com Consultor
      </span>

      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-sage-deep border border-cream/40 shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:border-gold group-hover:shadow-gold/30 active:scale-95">
        <FaWhatsapp className="w-6 h-6 text-cream group-hover:text-white transition-colors duration-300" />
      </div>
    </a>
  )
}