import { useState, useEffect, useRef } from 'react'
import { useLocation, Link, useSearchParams } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import logo from '../assets/logo.svg'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)
  
  const location = useLocation()
  const isCatalogRoute = location.pathname === '/catalogo'

  const [searchParams, setSearchParams] = useSearchParams()
  const searchQuery = searchParams.get('q') || ''

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newParams = new URLSearchParams(searchParams)
    if (e.target.value) {
      newParams.set('q', e.target.value)
    } else {
      newParams.delete('q')
    }
    setSearchParams(newParams, { replace: true })
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const threshold = window.innerHeight - 100
      setIsScrolled(currentScrollY > threshold)

      if (currentScrollY < 10) {
        setIsVisible(true)
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
  }, [isCatalogRoute])

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const headerStyles = isCatalogRoute
    ? 'bg-white/5 backdrop-blur-2xl border-b border-white/5 text-cream py-3 md:py-4'
    : isScrolled
      ? 'bg-cream/95 backdrop-blur-md text-sage-deep py-3 shadow-sm' // <-- Ajustado para text-sage-deep para combinar perfeitamente
      : 'bg-transparent text-cream py-5'

  return (
    <header className={`fixed top-0 w-full z-50 px-4 md:px-6 transition-all duration-500 ease-in-out transform-gpu ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${headerStyles}`}>
      
      <div className="flex items-center justify-between w-full gap-3 md:gap-6">
        
        <div className="w-12 md:w-24 flex-shrink-0 transition-transform duration-500 hover:scale-105 cursor-pointer">
          <Link to="/" onClick={handleLogoClick} className="active:opacity-50 transition-opacity duration-300 block">
            <img
              src={logo}
              alt="Carezza Logo"
              className={`w-full h-auto transition-all duration-500 ${
                (isCatalogRoute || !isScrolled) ? 'brightness-0 invert' : ''
              }`}
            />
          </Link>
        </div>

        {!isCatalogRoute && (
          <nav className="hidden md:flex gap-x-10 font-semibold tracking-widest text-xs uppercase absolute left-1/2 transform -translate-x-1/2">
            <a href="#catalogo" className="transition-colors duration-300 active:opacity-50 hover:text-gold">Catálogo</a>
            <a href="#decantes" className="transition-colors duration-300 active:opacity-50 hover:text-gold">Decants</a>
            <a href="#sobre" className="transition-colors duration-300 active:opacity-50 hover:text-gold">Sobre Nós</a>
          </nav>
        )}

        {isCatalogRoute && (
          <div className="flex-1 max-w-md relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-300 group-focus-within:text-gold text-cream/60">
              <FaSearch className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </div>
            <input
              type="text"
              placeholder="Pesquise uma fragrância..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full bg-sage-deep border border-white/20 rounded-full py-2 md:py-2.5 pl-10 pr-4 text-xs md:text-sm text-cream placeholder-cream/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all duration-300 shadow-inner transform-gpu"
            />
          </div>
        )}

        <div className="hidden md:block flex-shrink-0">
          <button className={`
            px-7 py-2.5 rounded-full transition-all duration-300 uppercase tracking-widest text-xs font-semibold active:scale-95
            ${isCatalogRoute || !isScrolled
              ? 'bg-gradient-to-br from-white/20 to-white/5 border border-white/20 text-white hover:from-gold/20 hover:to-gold/5 hover:border-gold hover:text-gold'
              : 'bg-sage-deep text-white shadow-md hover:brightness-110 hover:shadow-lg hover:shadow-sage-deep/30 hover:-translate-y-0.5'
            }
          `}>
            Falar com Consultor
          </button>
        </div>

      </div>
    </header>
  )
}