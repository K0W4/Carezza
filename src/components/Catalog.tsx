import internacionalImg from '../assets/images/Internacional.jpg'
import arabeImg from '../assets/images/Arabe.jpg'
import nacionalImg from '../assets/images/Nacional.png'

const categorias = [
  { id: 1, name: "Importados", image: internacionalImg },
  { id: 2, name: "Árabes", image: arabeImg },
  { id: 3, name: "Nacionais", image: nacionalImg },
]

export function Catalog() {
  return (
    <section id="catalogo" className="py-12 md:py-16 bg-sage relative z-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-cream font-serif font-normal mb-4">Catálogo</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
          <p className="text-cream/80 text-sm md:text-base uppercase tracking-widest">A excelência em cada nota olfativa</p>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:pb-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible [&::-webkit-scrollbar]:hidden">
          {categorias.map((categoria) => (
            <div 
              key={categoria.id}
              className="group flex-none w-[85vw] sm:w-[320px] md:w-auto bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl md:rounded-[2rem] p-4 md:p-6 snap-center transition-all duration-700 hover:from-sage-deep/20 hover:to-sage-deep/5 hover:border-sage-deep"
            >
              <div className="text-center mb-4">
                <h3 className="text-2xl font-serif font-normal text-cream transition-colors duration-500 group-hover:text-sage-deep">{categoria.name}</h3>
              </div>
              
              <div className="bg-sage-dark/10 aspect-[3/4] rounded-xl md:rounded-[1.5rem] mb-6 flex items-center justify-center overflow-hidden relative">
                <img 
                  src={categoria.image} 
                  alt={categoria.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="text-center px-2 pb-2">
                <a href="#" className="inline-block p-3 -m-3 uppercase tracking-widest text-xs font-semibold text-cream transition-all duration-300 hover:text-gold active:opacity-50">
                  Ver Coleção
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex md:hidden items-center justify-center gap-2 mt-6 text-cream">
          <span className="text-[10px] uppercase tracking-widest">Deslize para explorar</span>
          <svg className="w-4 h-4 animate-bounce-x" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
