import { Coffee, Leaf, Heart, Award } from 'lucide-react'

const values = [
  {
    icon: Coffee,
    title: 'Qualidade Superior',
    description: 'Grãos selecionados das melhores regiões produtoras, torrados artesanalmente para extrair o melhor sabor.',
  },
  {
    icon: Leaf,
    title: 'Sustentabilidade',
    description: 'Comprometidos com práticas sustentáveis, desde a origem do grão até o descarte consciente.',
  },
  {
    icon: Heart,
    title: 'Comunidade',
    description: 'Mais que uma cafeteria, somos um ponto de encontro para a comunidade local.',
  },
  {
    icon: Award,
    title: 'Excelência',
    description: 'Baristas certificados e treinados para entregar a melhor experiência em cada xícara.',
  },
]

const timeline = [
  { year: '2019', title: 'O Início', description: 'Nascemos como um pequeno café de bairro em São José dos Campos.' },
  { year: '2020', title: 'Superação', description: 'Mantivemos nossas portas abertas com delivery e adaptação ao digital.' },
  { year: '2022', title: 'Expansão', description: 'Reformamos e ampliamos nosso espaço para receber mais clientes.' },
  { year: '2024', title: 'Reconhecimento', description: 'Eleita a melhor cafeteria da região pelo guia local.' },
  { year: '2026', title: 'Inovação', description: 'Lançamento do cardápio digital e novas experiências para clientes.' },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1920&h=600&fit=crop"
            alt="Grãos de café"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Sobre a DNC Coffee
          </h1>
          <p className="text-white/70 max-w-xl mx-auto text-lg">
            Conheça nossa história, nossos valores e o que nos move a servir
            o melhor café todos os dias.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-primary mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-gray-warm leading-relaxed">
                <p>
                  A DNC Coffee nasceu da paixão de conectar pessoas através do café.
                  Começamos como um pequeno espaço aconchegante no coração de São José dos Campos,
                  com o sonho de oferecer não apenas um café excepcional, mas uma experiência
                  genuína e acolhedora.
                </p>
                <p>
                  Hoje, somos referência na região. Selecionamos cuidadosamente grãos das
                  melhores fazendas brasileiras — do Cerrado Mineiro à Alta Mogiana —
                  e trabalhamos com torra artesanal de micro-lotes para garantir frescor e
                  qualidade em cada xícara.
                </p>
                <p>
                  Nosso time de baristas é certificado pela SCA (Specialty Coffee Association)
                  e está sempre em busca de novas técnicas e sabores para surpreender nossos clientes.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=300&h=400&fit=crop"
                alt="Barista preparando café"
                className="rounded-2xl w-full h-64 object-cover"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=300&h=400&fit=crop"
                alt="Grãos de café"
                className="rounded-2xl w-full h-64 object-cover mt-8"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-primary mb-4">
              Nossos Valores
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="text-center p-6">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-primary mb-2">{v.title}</h3>
                <p className="text-gray-warm text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-primary mb-4">
              Nossa Jornada
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-cream-dark" />
            <div className="space-y-10">
              {timeline.map((item) => (
                <div key={item.year} className="relative flex gap-6">
                  <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0 z-10">
                    {item.year.slice(2)}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-semibold text-primary mb-1">
                      {item.year} — {item.title}
                    </h3>
                    <p className="text-gray-warm text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '+2.000', label: 'Clientes mensais' },
              { value: '27', label: 'Itens no cardápio' },
              { value: '4.9★', label: 'Avaliação média' },
              { value: '+5', label: 'Anos de história' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-accent mb-1">{stat.value}</p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
