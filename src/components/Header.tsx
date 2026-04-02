import { useState, useEffect, useRef } from 'react'
import logo from '../assets/logo.svg'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const catalogoElement = document.getElementById('catalogo')
      const catalogThreshold = catalogoElement ? catalogoElement.offsetTop - 100 : window.innerHeight - 100
      
      setIsScrolled(currentScrollY > catalogThreshold)
      
      if (currentScrollY < 100) {
        setIsVisible(true)
      } else if (currentScrollY < catalogThreshold) {
        setIsVisible(false)
      } else {
        if (currentScrollY > lastScrollY.current) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
      }
      
      lastScrollY.current = currentScrollY
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 px-6 flex justify-center md:justify-between items-center transition-all duration-500 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${
      isScrolled 
        ? 'bg-cream/95 backdrop-blur-md text-sage py-3' 
        : 'bg-transparent text-cream py-5'
    }`}>
      
      <div className="w-16 md:w-24 transition-transform duration-500 hover:scale-105 cursor-pointer">
        <a href="#" className="active:opacity-50 transition-opacity duration-300">
          <img 
            src={logo} 
            alt="Carezza Logo" 
            className={`w-full h-auto transition-all duration-500 ${!isScrolled ? 'brightness-0 invert' : ''}`} 
          />
        </a>
      </div>

      <nav className="hidden md:flex gap-x-10 font-semibold tracking-widest text-xs uppercase absolute left-1/2 transform -translate-x-1/2">
        <a href="#catalogo" className="transition-colors duration-300 active:opacity-50 hover:text-gold">Catálogo</a>
        <a href="#decantes" className="transition-colors duration-300 active:opacity-50 hover:text-gold">Decants</a>
        <a href="#sobre" className="transition-colors duration-300 active:opacity-50 hover:text-gold">Sobre Nós</a>
      </nav>

      <div className="hidden md:block">
        <button className={
          isScrolled 
            ? 'px-7 py-2.5 rounded-full transition-all duration-300 uppercase tracking-widest text-xs font-semibold active:scale-95 bg-sage-deep text-white shadow-md hover:brightness-110 hover:shadow-lg hover:shadow-sage-deep/30 hover:-translate-y-0.5' 
            : 'px-7 py-2.5 rounded-full transition-all duration-300 uppercase tracking-widest text-xs font-semibold active:scale-95 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md border border-white/20 text-white hover:from-gold/20 hover:to-gold/5 hover:border-gold hover:text-gold'
        }>
          Falar com Consultor
        </button>
      </div>
      
    </header>
  )
}
