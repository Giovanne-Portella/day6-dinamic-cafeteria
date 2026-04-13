import { Link } from 'react-router-dom'
import { Coffee, MapPin, Phone, Clock, Globe, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                <Coffee className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-[family-name:var(--font-display)] font-bold">
                DNC Coffee
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Café de qualidade, ambiente acolhedor e momentos especiais.
              Venha viver a experiência DNC Coffee.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/cardapio', label: 'Cardápio' },
                { to: '/sobre', label: 'Sobre Nós' },
                { to: '/contato', label: 'Contato' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/70 hover:text-accent text-sm transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                Rua José de Alencar, 111, Centro<br />
                São José dos Campos - SP
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                +55 (12) 3333-8000
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold mb-4">Horário</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 shrink-0" />
                <div>
                  <p>Seg - Sex: 7h às 20h</p>
                  <p>Sáb: 8h às 18h</p>
                  <p>Dom: 9h às 15h</p>
                </div>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-white/70 hover:text-accent transition-colors" aria-label="Instagram">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition-colors" aria-label="Site">
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/50">
          &copy; {new Date().getFullYear()} DNC Coffee. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
