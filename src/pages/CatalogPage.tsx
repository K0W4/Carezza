import { useState, useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CatalogFilter } from '../components/CatalogFilter';
import { produtosCatalogo } from '../data/products';

const WHATSAPP_NUMBER = '5500000000000';

export function CatalogPage() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [searchParams, setSearchParams] = useSearchParams();
  const queryFromUrl = searchParams.get('q') || '';
  
  const rawFilter = searchParams.get('filtro');
  const activeFilter = (rawFilter && ['Importados', 'Nacionais', 'Decants', 'Árabes'].includes(rawFilter)) 
    ? rawFilter 
    : 'Todos';

  const [debouncedQuery, setDebouncedQuery] = useState(queryFromUrl);

  const handleFilterChange = (newFilter: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (newFilter === 'Todos') {
      newParams.delete('filtro'); 
    } else {
      newParams.set('filtro', newFilter);
    }
    setSearchParams(newParams, { replace: true });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(queryFromUrl), 300);
    return () => clearTimeout(timer);
  }, [queryFromUrl]);

  const filteredProducts = produtosCatalogo.filter((produto) => {
    let matchesCategory = true;
    if (activeFilter !== 'Todos') {
      if (activeFilter === 'Decants') matchesCategory = produto.frascosDisponiveis.some(f => f.includes('Decant'));
      else if (activeFilter === 'Importados') matchesCategory = produto.origem === 'Importado';
      else if (activeFilter === 'Nacionais') matchesCategory = produto.origem === 'Nacional';
      else if (activeFilter === 'Árabes') matchesCategory = produto.origem === 'Árabe';
    }
    let matchesSearch = true;
    if (debouncedQuery.trim() !== '') {
      const query = debouncedQuery.toLowerCase();
      const searchTarget = `${produto.nome} ${produto.marca} ${produto.notasPrincipais.join(' ')}`.toLowerCase();
      matchesSearch = searchTarget.includes(query);
    }
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-24 md:py-32 bg-sage-deep relative z-20 min-h-screen overflow-hidden">
      <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-gold/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-sage/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-cream/50 hover:text-cream text-[10px] uppercase tracking-widest transition-colors duration-300 mb-10"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Voltar à Vitrine
          </button>
          <h2 className="uppercase tracking-[0.3em] text-xs font-semibold mb-4 text-gold">O Nosso Acervo</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-cream leading-tight mb-8">
            Curadoria Exclusiva
          </h3>
          <div className="w-16 h-px bg-gold/50 mx-auto mb-10"></div>
        </div>

        <CatalogFilter activeFilter={activeFilter} setActiveFilter={handleFilterChange} />

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10 pb-4 items-stretch content-start min-h-[60vh] relative"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((produto) => {
              const mensagem = `Olá! Gostaria de consultar a disponibilidade do perfume ${produto.nome} (${produto.marca}).`;
              const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;

              return (
                <motion.div
                  layout
                  key={produto.id}
                  initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  whileHover={{ y: -8 }}
                  className="group relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden flex flex-col hover:bg-white/10 hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/10 transition-colors duration-300"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-black/20">
                    <img
                      src={produto.imagemUrl}
                      alt={produto.nome}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute top-4 left-4 bg-sage-deep/80 backdrop-blur-md border border-white/20 text-cream text-[9px] uppercase tracking-widest px-3 py-1 rounded-full">
                      {produto.origem}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gold text-[10px] uppercase tracking-widest">{produto.marca}</span>
                      <span className="text-cream/50 text-[10px] uppercase tracking-widest">{produto.mls}</span>
                    </div>

                    <h4 className="text-2xl font-serif text-cream mb-4">{produto.nome}</h4>

                    <div className="mb-6 space-y-2">
                      <span className="text-[9px] text-cream/40 uppercase tracking-widest block">Notas Principais:</span>
                      <p className="text-cream/80 text-xs italic font-serif leading-relaxed">
                        {produto.notasPrincipais.join(' • ')}
                      </p>
                    </div>

                    <div className="mt-auto space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {produto.frascosDisponiveis.map(frasco => (
                          <span
                            key={frasco}
                            className="text-[9px] uppercase tracking-wider text-cream/80 bg-white/5 px-2 py-1 rounded-md border border-white/10"
                          >
                            {frasco}
                          </span>
                        ))}
                      </div>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center bg-transparent border border-gold text-gold px-4 py-3 rounded-full transition-all duration-300 font-semibold tracking-widest uppercase text-[10px] hover:bg-gold hover:text-white active:scale-95"
                      >
                        Consultar Disponibilidade
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          <AnimatePresence>
            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-x-0 top-10 text-center py-20"
              >
                <p className="text-cream/50 text-lg font-serif italic mb-2">
                  Nenhuma fragrância encontrada.
                </p>
                <p className="text-cream/30 text-sm">
                  Tente pesquisar por outras notas ou limpe o filtro atual.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}