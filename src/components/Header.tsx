import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Coffee, Menu, X } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/cardapio', label: 'Cardápio' },
  { path: '/sobre', label: 'Sobre' },
  { path: '/contato', label: 'Contato' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group no-underline">
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center group-hover:bg-accent-dark transition-colors">
              <Coffee className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-[family-name:var(--font-display)] font-bold text-primary">
              DNC Coffee
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors no-underline ${
                  location.pathname === link.path
                    ? 'text-accent-dark'
                    : 'text-primary hover:text-accent'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/cardapio"
              className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-light transition-colors no-underline"
            >
              Fazer Pedido
            </Link>
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-primary"
            aria-label="Abrir menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-cream-dark">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`py-2 text-sm font-medium no-underline ${
                  location.pathname === link.path
                    ? 'text-accent-dark'
                    : 'text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/cardapio"
              onClick={() => setMenuOpen(false)}
              className="bg-primary text-white text-center px-6 py-3 rounded-full text-sm font-semibold no-underline"
            >
              Fazer Pedido
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
