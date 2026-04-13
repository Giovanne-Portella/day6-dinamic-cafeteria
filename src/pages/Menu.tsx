import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search } from 'lucide-react'
import { products, categories, type Category } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Menu() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('categoria') as Category | null
  const [activeCategory, setActiveCategory] = useState<Category | 'todos'>(
    initialCategory ?? 'todos'
  )
  const [search, setSearch] = useState('')

  const handleCategoryChange = (cat: Category | 'todos') => {
    setActiveCategory(cat)
    if (cat === 'todos') {
      searchParams.delete('categoria')
    } else {
      searchParams.set('categoria', cat)
    }
    setSearchParams(searchParams, { replace: true })
  }

  const filtered = products.filter((p) => {
    const matchesCategory = activeCategory === 'todos' || p.category === activeCategory
    const matchesSearch =
      !search ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.tags?.some((t) => t.toLowerCase().includes(search.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <>
      {/* Header */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Nosso Cardápio
          </h1>
          <p className="text-white/70 max-w-lg mx-auto">
            Explore nossa seleção completa de cafés, bebidas, doces e salgados.
            Tudo preparado com ingredientes frescos e muito carinho.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row gap-6 mb-10">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-warm" />
              <input
                type="text"
                placeholder="Buscar por nome, descrição ou tag..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-cream-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => handleCategoryChange('todos')}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === 'todos'
                  ? 'bg-primary text-white'
                  : 'bg-white text-primary hover:bg-cream-dark'
              }`}
            >
              Todos
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-primary hover:bg-cream-dark'
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p className="text-sm text-gray-warm mb-6">
            {filtered.length} {filtered.length === 1 ? 'item encontrado' : 'itens encontrados'}
          </p>

          {/* Products Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl mb-2">😕</p>
              <p className="text-gray-warm">
                Nenhum item encontrado. Tente uma busca diferente.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
