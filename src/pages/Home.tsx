import { Link } from 'react-router-dom'
import { ArrowRight, Star, Clock, MapPin } from 'lucide-react'
import { products, categories } from '../data/products'
import ProductCard from '../components/ProductCard'

const featuredProducts = products.filter((p) => p.featured).slice(0, 4)

const testimonials = [
  {
    name: 'Maria S.',
    text: 'O melhor café da região! O ambiente é incrível e o atendimento é impecável.',
    rating: 5,
  },
  {
    name: 'Carlos R.',
    text: 'O cappuccino deles é perfeito. Venho aqui todos os dias antes do trabalho.',
    rating: 5,
  },
  {
    name: 'Ana L.',
    text: 'Os doces são maravilhosos, especialmente o bolo de cenoura. Recomendo!',
    rating: 5,
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&h=800&fit=crop"
            alt="Café"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-44">
          <div className="max-w-2xl">
            <span className="inline-block text-accent font-medium text-sm tracking-widest uppercase mb-4">
              Bem-vindo à DNC Coffee
            </span>
            <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-display)] font-bold text-white leading-tight mb-6">
              Onde cada xícara conta uma história
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              Café artesanal de alta qualidade, grãos selecionados e torrados por
              especialistas. Um ambiente acolhedor para momentos especiais.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/cardapio"
                className="bg-accent text-white px-8 py-3.5 rounded-full font-semibold hover:bg-accent-dark transition-colors no-underline inline-flex items-center gap-2"
              >
                Ver Cardápio
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/sobre"
                className="border-2 border-white/30 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-colors no-underline"
              >
                Conheça-nos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Info Strip */}
      <section className="bg-white border-b border-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-5 h-5 text-accent" />
              <span className="text-sm text-primary">Seg-Sex: 7h - 20h | Sáb: 8h - 18h</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="text-sm text-primary">Rua José de Alencar, 111, Centro - SJC</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Star className="w-5 h-5 text-accent" />
              <span className="text-sm text-primary">Avaliação 4.9 ★ — +2.000 clientes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-primary mb-4">
              Nosso Cardápio
            </h2>
            <p className="text-gray-warm max-w-xl mx-auto">
              Descubra nossa seleção cuidadosa de cafés, bebidas, doces e salgados
              preparados com carinho e ingredientes de qualidade.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link
                to={`/cardapio?categoria=${cat.id}`}
                key={cat.id}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-md transition-all no-underline group"
              >
                <span className="text-3xl block mb-3">{cat.icon}</span>
                <span className="text-sm font-medium text-primary group-hover:text-accent transition-colors">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-primary mb-4">
                Destaques
              </h2>
              <p className="text-gray-warm">
                Os favoritos dos nossos clientes
              </p>
            </div>
            <Link
              to="/cardapio"
              className="hidden md:inline-flex items-center gap-2 text-accent-dark font-medium hover:text-accent transition-colors no-underline"
            >
              Ver Cardápio Completo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link
              to="/cardapio"
              className="inline-flex items-center gap-2 text-accent-dark font-medium no-underline"
            >
              Ver Cardápio Completo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=500&fit=crop"
                alt="Interior da cafeteria"
                className="rounded-2xl w-full object-cover h-[400px]"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-2xl shadow-lg hidden lg:block">
                <p className="text-3xl font-bold">+5</p>
                <p className="text-sm">anos de história</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-primary mb-6">
                Nossa Paixão por Café
              </h2>
              <p className="text-gray-warm leading-relaxed mb-4">
                Tudo o que fazemos procura respeitar a conexão entre o café e as pessoas,
                desde nosso compromisso com o café de melhor qualidade do mundo até a forma
                como interagimos com nossos clientes e nossas comunidades.
              </p>
              <p className="text-gray-warm leading-relaxed mb-8">
                Selecionamos grãos das melhores regiões produtoras do Brasil,
                torramos artesanalmente e preparamos cada xícara com dedicação
                e conhecimento.
              </p>
              <Link
                to="/sobre"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full font-semibold hover:bg-primary-light transition-colors no-underline"
              >
                Saiba Mais
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-primary mb-4">
              O Que Dizem Nossos Clientes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-cream rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-primary/80 mb-6 leading-relaxed italic">
                  "{t.text}"
                </p>
                <p className="font-semibold text-primary text-sm">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Pronto para um café especial?
          </h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto">
            Visite-nos ou faça seu pedido pelo nosso cardápio online.
          </p>
          <Link
            to="/cardapio"
            className="bg-white text-accent-dark px-8 py-3.5 rounded-full font-semibold hover:bg-cream transition-colors no-underline inline-flex items-center gap-2"
          >
            Fazer Pedido
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
