export type Categoria = 'Perfumaria' | 'Corpo & Banho' | 'Maquiagem' | 'Kits' | 'Acessórios';

export interface Produto {
  id: string;
  nome: string;
  marca: string;
  categoria: Categoria;
  opcoesDisponiveis: string[];
  tamanho?: string;
  imagemUrl: string;
  detalhes: string[];
}

export const produtosCatalogo: Produto[] = [
  {
    id: "p1",
    nome: "Yara Tous",
    marca: "Lattafa",
    categoria: "Perfumaria",
    opcoesDisponiveis: ["Perfume Completo", "Decant 10ml"],
    tamanho: "100ml",
    imagemUrl: "/images/Perfumes.png",
    detalhes: ["Manga", "Coco", "Maracujá"]
  },
  {
    id: "p2",
    nome: "Creme Acetinado Lily",
    marca: "O Boticário",
    categoria: "Corpo & Banho",
    opcoesDisponiveis: ["Tamanho Único"],
    tamanho: "250g",
    imagemUrl: "/images/Cuidado&Banho.jpg",
    detalhes: ["Toque Acetinado", "Fragrância Intensa", "Hidratação Prolongada"]
  },
  {
    id: "p3",
    nome: "Kit Tododia Algodão",
    marca: "Natura",
    categoria: "Kits",
    opcoesDisponiveis: ["Kit Completo"],
    imagemUrl: "/images/Kits.jpg",
    detalhes: ["Hidratante 400ml", "Body Splash 200ml", "Sabonete em Barra"]
  },
  {
    id: "p4",
    nome: "Batom Ultra Matte Amora",
    marca: "Avon",
    categoria: "Maquiagem",
    opcoesDisponiveis: ["Tamanho Único"],
    tamanho: "3.6g",
    imagemUrl: "/images/Maquiagem.jpg",
    detalhes: ["Acabamento Matte Real", "Alta Cobertura", "Não resseca os lábios"]
  }
];
