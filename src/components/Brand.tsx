import auxiliarVideo from '../assets/video/Auxiliar.mp4'

export function Brand() {
  return (
    <section id="sobre" className="py-12 md:py-16 bg-cream relative z-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto lg:max-w-none mb-10 lg:mb-12">
              <div className="absolute top-0 left-0 w-[85%] h-[90%] bg-sage-dark/10 rounded-t-full flex items-center justify-center overflow-hidden">
                <span className="text-sage-dark/50 uppercase tracking-[0.2em] text-xs text-center px-4">Foto das Sócias</span>
              </div>
              
              <div className="absolute bottom-0 right-0 w-[45%] aspect-square border-2 border-gold/60 rounded-2xl shadow-2xl shadow-gold/20 overflow-hidden">
                <video
                  src={auxiliarVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="max-w-md mx-auto lg:max-w-none lg:pr-12">
              <div className="border-l-2 border-gold pl-5">
                <p className="text-xl md:text-2xl text-sage-dark/90 italic font-serif leading-snug">
                  "Perfumar é assinar a própria presença."
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="uppercase tracking-widest text-xs font-semibold mb-4 text-gold">
              Sobre nós
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-sage-deep leading-tight mb-8">
              A alma por trás de cada frasco.
            </h3>

            <div className="space-y-6 text-base md:text-lg text-sage-dark font-normal leading-relaxed mb-10 text-justify md:text-left">
              <p className="first-letter:text-6xl first-letter:font-serif first-letter:text-gold first-letter:mr-2 first-letter:float-left">
                A Carezza nasceu da união e da paixão genuína de três mulheres por eternizar memórias através dos sentidos. Criada para pessoas exigentes que veem na perfumaria uma extensão de suas próprias identidades.
              </p>
              <p>
                Cada fragrância do nosso acervo é rigorosamente selecionada entre as casas de perfumaria mais prestigiadas do mundo, do Oriente ao Ocidente. Nossa missão não é apenas perfumar, mas assinar a sua presença em cada momento de forma luxuosa, inesquecível e profundamente pessoal.
              </p>
            </div>
            
            <button className="bg-sage-deep text-cream px-10 py-4 rounded-full transition-all duration-300 uppercase tracking-widest text-xs font-semibold active:scale-95 hover:brightness-125 hover:shadow-lg hover:shadow-sage-deep/30 hover:-translate-y-0.5">
              Falar com um Consultor
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
