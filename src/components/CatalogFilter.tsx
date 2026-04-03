
interface CatalogFilterProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export const categoriasFiltro = ['Todos', 'Importados', 'Árabes', 'Nacionais', 'Decants'];

export function CatalogFilter({ activeFilter, setActiveFilter }: CatalogFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 px-4">
      {categoriasFiltro.map((categoria) => (
        <button
          key={categoria}
          onClick={() => setActiveFilter(categoria)}
          className={`px-6 py-2.5 rounded-full text-[10px] md:text-xs font-semibold tracking-widest uppercase transition-all duration-300 backdrop-blur-md border ${
            activeFilter === categoria
              ? 'bg-gold border-gold text-white shadow-[0_4px_20px_rgba(212,175,55,0.4)] scale-105'
              : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/15 hover:text-white hover:border-white/30'
          }`}
        >
          {categoria}
        </button>
      ))}
    </div>
  );
}
