import type { Product } from '../data/products'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {product.featured && (
          <span className="absolute top-3 left-3 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
            Destaque
          </span>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-[family-name:var(--font-display)] font-semibold text-lg text-primary">
            {product.name}
          </h3>
          <span className="text-accent-dark font-bold text-lg whitespace-nowrap">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
        </div>
        <p className="text-gray-warm text-sm leading-relaxed mb-4">
          {product.description}
        </p>
        {product.tags && (
          <div className="flex flex-wrap gap-1.5">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-cream px-2.5 py-1 rounded-full text-primary-light"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
