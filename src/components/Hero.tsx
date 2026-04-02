export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        
      <div className="absolute inset-0 w-full h-full z-0 bg-black">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="/src/assets/video/poster-hero.jpg"
          className="w-full h-full object-cover opacity-90 transition-opacity duration-1000"
        >
          <source src="/src/assets/video/carezza-hero.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply pointer-events-none"></div>
        
        <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent h-40 pointer-events-none"></div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent h-56 pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center mt-16 md:mt-24 pointer-events-auto">
        
        <h2 className="text-xs md:text-sm lg:text-base tracking-[0.4em] uppercase mb-4 text-gold font-semibold animate-fade-in-up">
          O Toque da Beleza
        </h2>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal text-cream leading-tight mb-8 max-w-5xl animate-fade-in-up animation-delay-150">
          Desperte a sua <br className="md:hidden" /><span className="text-gold">essência.</span>
        </h1>
        
        <p className="text-base md:text-xl text-cream/90 mb-12 max-w-2xl mx-auto font-normal tracking-wide leading-relaxed animate-fade-in-up animation-delay-300">
          Fragrâncias luxuosas, selecionadas para marcar a sua presença e eternizar momentos.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto animate-fade-in-up animation-delay-500">
          <a href="#catalogo" className="bg-gold text-white px-8 py-4 rounded-full transition-all duration-300 uppercase tracking-widest text-xs font-semibold active:scale-95 text-center hover:brightness-110 hover:shadow-lg hover:shadow-gold/30 hover:-translate-y-0.5">
            Explorar Catálogo
          </a>
          <a href="#sobre" className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full hover:from-gold/20 hover:to-gold/5 hover:border-gold hover:text-gold transition-all duration-300 uppercase tracking-widest text-xs font-semibold active:scale-95 text-center">
            Conheça a Carezza
          </a>
        </div>
        
      </div>
    </section>
  )
}
