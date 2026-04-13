import { type FormEvent, useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Fale Conosco
          </h1>
          <p className="text-white/70 max-w-lg mx-auto">
            Tem alguma dúvida, sugestão ou quer fazer uma reserva? Entre em contato conosco!
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-primary mb-8">
                Informações de Contato
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: 'Endereço',
                    lines: ['Rua José de Alencar, 111, Centro', 'São José dos Campos - SP', 'CEP: 12209-000'],
                  },
                  {
                    icon: Phone,
                    title: 'Telefone & WhatsApp',
                    lines: ['+55 (12) 3333-8000', '+55 (12) 99999-8000'],
                  },
                  {
                    icon: Mail,
                    title: 'E-mail',
                    lines: ['contato@dnccoffee.com.br'],
                  },
                  {
                    icon: Clock,
                    title: 'Horário de Funcionamento',
                    lines: ['Segunda a Sexta: 7h às 20h', 'Sábado: 8h às 18h', 'Domingo: 9h às 15h'],
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{item.title}</h3>
                      {item.lines.map((line) => (
                        <p key={line} className="text-gray-warm text-sm">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-10 rounded-2xl overflow-hidden h-64 bg-cream-dark">
                <iframe
                  title="Localização DNC Coffee"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.2!2d-45.886!3d-23.179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDEwJzQ0LjQiUyA0NcKwNTMnMDkuNiJX!5e0!3m2!1spt-BR!2sbr!4v1"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-primary mb-8">
                Envie uma Mensagem
              </h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-2">Mensagem enviada!</h3>
                  <p className="text-gray-warm">
                    Obrigado pelo contato. Responderemos em até 24 horas.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-accent-dark font-medium hover:text-accent"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary mb-1.5">
                        Nome
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white border border-cream-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary mb-1.5">
                        E-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white border border-cream-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1.5">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-cream-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                      placeholder="(12) 99999-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-primary mb-1.5">
                      Assunto
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-cream-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="duvida">Dúvida</option>
                      <option value="sugestao">Sugestão</option>
                      <option value="reserva">Reserva</option>
                      <option value="evento">Evento corporativo</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-1.5">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-cream-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent resize-none"
                      placeholder="Escreva sua mensagem..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-primary text-white px-8 py-3.5 rounded-full font-semibold hover:bg-primary-light transition-colors inline-flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
