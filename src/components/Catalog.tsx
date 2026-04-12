import { useNavigate } from 'react-router-dom'

const categorias = [
  { id: 1, name: "Perfumaria", image: "/images/Perfumes.png" },
  { id: 2, name: "Corpo & Banho", image: "/images/Cuidado&Banho.jpg" },
  { id: 3, name: "Maquiagem", image: "/images/Maquiagem.jpg" },
  { id: 4, name: "Kits", image: "/images/Kits.jpg" },
]

export function Catalog() {
  const navigate = useNavigate()
  return (
    <section id="catalogo" className="py-16 md:py-24 bg-sage relative z-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-cream font-serif font-normal mb-4">Catálogo</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
          <p className="text-cream/80 text-sm md:text-base tracking-widest">Um universo completo de autocuidado</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {categorias.map((categoria) => (
            <div
              key={categoria.id}
              className="group bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-4 transition-all duration-700 hover:from-gold/20 hover:to-gold/5 hover:border-gold shadow-lg hover:shadow-2xl flex flex-col h-full"
            >
              <div className="bg-sage-dark/10 aspect-[3/4] rounded-xl mb-6 flex items-center justify-center overflow-hidden relative shadow-inner">
                <img
                  src={categoria.image}
                  alt={categoria.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

              <div className="text-center flex flex-col flex-grow justify-between">
                <h3 className="text-2xl font-serif font-normal text-cream transition-colors duration-500 group-hover:text-cream mb-4">{categoria.name}</h3>

                <button
                  onClick={() => navigate('/catalogo?filtro=' + encodeURIComponent(categoria.name))}
                  className="inline-block p-2 uppercase tracking-widest text-[10px] md:text-xs font-semibold text-cream transition-all duration-300 hover:text-gold active:opacity-50 mt-auto"
                >
                  Ver Coleção
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
