export type Frasco = 'Perfume Completo' | 'Decant 10ml' | 'Decant 5ml';
export type Origem = 'Importado' | 'Árabe' | 'Nacional';
export type Marca = 'Victoria\'s Secret' | 'La Rive' | 'Lattafa' | 'Natura' | 'O Boticário' | 'Avon' | 'O.U.i' | 'Eudora' | 'Quem Disse, Berenice?';

export interface Produto {
  id: string;
  nome: string;
  marca: Marca;
  origem: Origem;
  frascosDisponiveis: Frasco[];
  mls: string;
  imagemUrl: string;
  notasPrincipais: string[];
}

export const produtosCatalogo: Produto[] = [
  {
    id: "p1",
    nome: "Yara Tous",
    marca: "Lattafa",
    origem: "Árabe",
    frascosDisponiveis: ["Perfume Completo", "Decant 5ml", "Decant 10ml"],
    mls: "100ml",
    imagemUrl: "/src/assets/images/Arabe.jpg",
    notasPrincipais: ["Manga", "Coco", "Maracujá"]
  },
  {
    id: "p2",
    nome: "Donna",
    marca: "La Rive",
    origem: "Importado",
    frascosDisponiveis: ["Perfume Completo"],
    mls: "90ml",
    imagemUrl: "/src/assets/images/Internacional.jpg",
    notasPrincipais: ["Limão Siciliano", "Jasmim", "Madeira de Cedro"]
  },
  {
    id: "p3",
    nome: "Lily Eau de Parfum",
    marca: "O Boticário",
    origem: "Nacional",
    frascosDisponiveis: ["Perfume Completo", "Decant 5ml"],
    mls: "75ml",
    imagemUrl: "/src/assets/images/Nacional.png",
    notasPrincipais: ["Lírio", "Mandarina", "Sândalo"]
  },
  {
    id: "p4",
    nome: "Bare Vanilla",
    marca: "Victoria's Secret",
    origem: "Importado",
    frascosDisponiveis: ["Decant 10ml"],
    mls: "250ml",
    imagemUrl: "/src/assets/images/Decantes.jpg",
    notasPrincipais: ["Baunilha Batida", "Caxemira Suave", "Flor de Maçã"]
  }
];
