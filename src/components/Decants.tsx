import { useNavigate } from 'react-router-dom'
import decantesImg from '../assets/images/Decantes.jpg'

export function Decants() {
  const navigate = useNavigate()
  return (
    <section id="decantes" className="py-12 md:py-16 bg-gold relative z-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
          
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
            <span className="inline-block uppercase tracking-widest text-white text-xs md:text-sm font-semibold mb-6 px-4 py-1.5 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm">
              Experimente Antes
            </span>
            
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-serif font-normal text-white leading-none mb-8">
              Descubra em<br/>Pequenas Doses
            </h2>
            
            <p className="text-base md:text-lg lg:text-xl text-white/90 font-normal leading-relaxed mb-10 max-w-lg text-justify md:text-left">
              Não tem certeza de qual fragrância escolher? Explore o mundo da alta perfumaria através dos nossos decants. Frações originais de 10ml, perfeitas para você testar na pele antes de investir no frasco completo.
            </p>
            
            <button
              onClick={() => navigate('/catalogo?filtro=Decants')}
              className="bg-white text-gold px-10 py-5 rounded-full transition-all duration-300 font-semibold tracking-widest uppercase text-xs active:scale-95 hover:bg-white hover:shadow-xl hover:shadow-white/40 hover:-translate-y-0.5"
            >
              Ver Decants
            </button>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative aspect-[3/4] w-full max-w-sm lg:max-w-md bg-white/20 rounded-2xl md:rounded-[2rem] flex items-center justify-center overflow-hidden transition-transform duration-700">
              <img src={decantesImg} alt="Kit Descoberta em Decantes" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
