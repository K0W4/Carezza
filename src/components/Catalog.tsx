import { useNavigate } from 'react-router-dom'
import internacionalImg from '../assets/images/Internacional.jpg'
import arabeImg from '../assets/images/Arabe.jpg'

const categorias = [
  { id: 1, name: "Importados", image: internacionalImg },
  { id: 2, name: "Árabes", image: arabeImg },
]

export function Catalog() {
  const navigate = useNavigate()
  return (
    <section id="catalogo" className="py-16 md:py-24 bg-sage relative z-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-cream font-serif font-normal mb-4">Catálogo</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
          <p className="text-cream/80 text-sm md:text-base uppercase tracking-widest">A excelência em cada nota olfativa</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 max-w-6xl mx-auto">
          {categorias.map((categoria) => (
            <div 
              key={categoria.id}
              className="group w-full md:w-1/2 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl md:rounded-[2rem] p-5 md:p-8 transition-all duration-700 hover:from-sage-deep/20 hover:to-sage-deep/5 hover:border-sage-deep shadow-lg hover:shadow-2xl"
            >
              <div className="text-center mb-6">
                <h3 className="text-3xl font-serif font-normal text-cream transition-colors duration-500 group-hover:text-sage-deep">{categoria.name}</h3>
              </div>
              
              <div className="bg-sage-dark/10 aspect-[4/5] rounded-xl md:rounded-[1.5rem] mb-8 flex items-center justify-center overflow-hidden relative shadow-inner">
                <img 
                  src={categoria.image} 
                  alt={categoria.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              
              <div className="text-center px-2 pb-2">
                <button
                  onClick={() => navigate('/catalogo?filtro=' + categoria.name)}
                  className="inline-block p-3 -m-3 uppercase tracking-widest text-xs font-semibold text-cream transition-all duration-300 hover:text-gold active:opacity-50"
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
