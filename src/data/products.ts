export interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: Category
  featured?: boolean
  tags?: string[]
}

export type Category = 'cafes' | 'especiais' | 'doces' | 'salgados' | 'bebidas-geladas' | 'cha'

export interface CategoryInfo {
  id: Category
  name: string
  icon: string
}

export const categories: CategoryInfo[] = [
  { id: 'cafes', name: 'Cafés Clássicos', icon: '☕' },
  { id: 'especiais', name: 'Cafés Especiais', icon: '✨' },
  { id: 'bebidas-geladas', name: 'Bebidas Geladas', icon: '🧊' },
  { id: 'cha', name: 'Chás', icon: '🍵' },
  { id: 'doces', name: 'Doces', icon: '🍰' },
  { id: 'salgados', name: 'Salgados', icon: '🥐' },
]

export const products: Product[] = [
  // Cafés Clássicos
  {
    id: 1,
    name: 'Espresso',
    description: 'Café puro e encorpado, extraído na pressão perfeita. Intenso e aromático.',
    price: 8.90,
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop',
    category: 'cafes',
    featured: true,
    tags: ['quente', 'clássico'],
  },
  {
    id: 2,
    name: 'Cappuccino',
    description: 'Espresso com leite vaporizado e espuma cremosa, finalizado com canela.',
    price: 14.90,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop',
    category: 'cafes',
    featured: true,
    tags: ['quente', 'clássico', 'leite'],
  },
  {
    id: 3,
    name: 'Café com Leite',
    description: 'O clássico brasileiro. Café coado fresco com leite quente na medida certa.',
    price: 10.90,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop',
    category: 'cafes',
    tags: ['quente', 'clássico', 'leite'],
  },
  {
    id: 4,
    name: 'Americano',
    description: 'Espresso diluído em água quente. Sabor suave com toda a essência do café.',
    price: 9.90,
    image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?w=400&h=300&fit=crop',
    category: 'cafes',
    tags: ['quente', 'clássico'],
  },
  {
    id: 5,
    name: 'Macchiato',
    description: 'Espresso marcado com uma camada de espuma de leite. Equilíbrio perfeito.',
    price: 11.90,
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&h=300&fit=crop',
    category: 'cafes',
    tags: ['quente', 'clássico'],
  },

  // Cafés Especiais
  {
    id: 6,
    name: 'Mocha',
    description: 'Espresso com chocolate belga, leite vaporizado e chantilly caseiro.',
    price: 18.90,
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&h=300&fit=crop',
    category: 'especiais',
    featured: true,
    tags: ['quente', 'chocolate', 'especial'],
  },
  {
    id: 7,
    name: 'Latte Caramelo',
    description: 'Café latte com calda de caramelo artesanal e toque de baunilha.',
    price: 17.90,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&h=300&fit=crop',
    category: 'especiais',
    featured: true,
    tags: ['quente', 'especial', 'doce'],
  },
  {
    id: 8,
    name: 'Flat White',
    description: 'Café australiano com micro-espuma de leite. Textura aveludada e sabor marcante.',
    price: 15.90,
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=400&h=300&fit=crop',
    category: 'especiais',
    tags: ['quente', 'especial'],
  },
  {
    id: 9,
    name: 'Affogato',
    description: 'Sorvete de baunilha afogado em espresso quente. Sobremesa e café em um só.',
    price: 19.90,
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=400&h=300&fit=crop',
    category: 'especiais',
    tags: ['especial', 'sobremesa'],
  },
  {
    id: 10,
    name: 'Café Turco',
    description: 'Preparado no ibrik tradicional com cardamomo. Uma experiência autêntica.',
    price: 16.90,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=400&h=300&fit=crop',
    category: 'especiais',
    tags: ['quente', 'especial', 'exótico'],
  },

  // Bebidas Geladas
  {
    id: 11,
    name: 'Iced Latte',
    description: 'Espresso com leite gelado e gelo. Refrescante e cremoso.',
    price: 16.90,
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&h=300&fit=crop',
    category: 'bebidas-geladas',
    featured: true,
    tags: ['gelado', 'leite'],
  },
  {
    id: 12,
    name: 'Frappuccino',
    description: 'Café batido com gelo, leite e chantilly. O favorito do verão.',
    price: 21.90,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop',
    category: 'bebidas-geladas',
    tags: ['gelado', 'doce'],
  },
  {
    id: 13,
    name: 'Cold Brew',
    description: 'Café extraído a frio por 12 horas. Suave, doce natural e refrescante.',
    price: 15.90,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&h=300&fit=crop',
    category: 'bebidas-geladas',
    tags: ['gelado', 'artesanal'],
  },
  {
    id: 14,
    name: 'Smoothie de Frutas',
    description: 'Blend de frutas frescas da estação com iogurte natural e mel.',
    price: 18.90,
    image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop',
    category: 'bebidas-geladas',
    tags: ['gelado', 'saudável', 'frutas'],
  },

  // Chás
  {
    id: 15,
    name: 'Chá Matcha Latte',
    description: 'Matcha japonês premium com leite vaporizado. Energizante e saudável.',
    price: 16.90,
    image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&h=300&fit=crop',
    category: 'cha',
    tags: ['quente', 'saudável'],
  },
  {
    id: 16,
    name: 'Chai Latte',
    description: 'Chá preto com especiarias indianas, leite e mel. Aconchegante e aromático.',
    price: 14.90,
    image: 'https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?w=400&h=300&fit=crop',
    category: 'cha',
    tags: ['quente', 'especiarias'],
  },
  {
    id: 17,
    name: 'Chá de Camomila',
    description: 'Infusão de camomila orgânica. Calmante e reconfortante.',
    price: 10.90,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400&h=300&fit=crop',
    category: 'cha',
    tags: ['quente', 'calmante'],
  },

  // Doces
  {
    id: 18,
    name: 'Bolo de Cenoura',
    description: 'Bolo fofinho de cenoura com cobertura generosa de chocolate.',
    price: 14.90,
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=300&fit=crop',
    category: 'doces',
    featured: true,
    tags: ['sobremesa', 'chocolate'],
  },
  {
    id: 19,
    name: 'Cheesecake de Frutas Vermelhas',
    description: 'Cheesecake cremoso com calda de frutas vermelhas frescas.',
    price: 18.90,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=300&fit=crop',
    category: 'doces',
    tags: ['sobremesa', 'frutas'],
  },
  {
    id: 20,
    name: 'Brownie',
    description: 'Brownie crocante por fora, molhadinho por dentro. Com nozes e chocolate 70%.',
    price: 12.90,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop',
    category: 'doces',
    tags: ['sobremesa', 'chocolate'],
  },
  {
    id: 21,
    name: 'Cookie Artesanal',
    description: 'Cookie crocante com gotas de chocolate belga e flor de sal.',
    price: 9.90,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop',
    category: 'doces',
    tags: ['sobremesa', 'chocolate'],
  },
  {
    id: 22,
    name: 'Pão de Mel',
    description: 'Pão de mel recheado com doce de leite e coberto com chocolate ao leite.',
    price: 8.90,
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop',
    category: 'doces',
    tags: ['sobremesa', 'doce de leite'],
  },

  // Salgados
  {
    id: 23,
    name: 'Croissant de Queijo e Presunto',
    description: 'Croissant folhado e amanteigado, recheado com queijo gruyère e presunto.',
    price: 15.90,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=400&h=300&fit=crop',
    category: 'salgados',
    featured: true,
    tags: ['café da manhã', 'queijo'],
  },
  {
    id: 24,
    name: 'Sanduíche Natural',
    description: 'Pão integral com frango desfiado, cenoura, milho e ervas finas.',
    price: 16.90,
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop',
    category: 'salgados',
    tags: ['saudável', 'almoço'],
  },
  {
    id: 25,
    name: 'Quiche Lorraine',
    description: 'Quiche clássica com bacon, queijo gruyère e creme fresco.',
    price: 17.90,
    image: 'https://images.unsplash.com/photo-1564671165093-20688ff1fffa?w=400&h=300&fit=crop',
    category: 'salgados',
    tags: ['almoço', 'clássico'],
  },
  {
    id: 26,
    name: 'Pão na Chapa com Manteiga',
    description: 'Pão francês tostado na chapa com manteiga de primeira qualidade.',
    price: 7.90,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop',
    category: 'salgados',
    tags: ['café da manhã', 'clássico'],
  },
  {
    id: 27,
    name: 'Torta de Frango',
    description: 'Torta de massa folhada recheada com frango cremoso e catupiry.',
    price: 14.90,
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop',
    category: 'salgados',
    tags: ['almoço', 'frango'],
  },
]
