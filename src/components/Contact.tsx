import { MapPin, Phone, Euro, Star, Instagram, Facebook } from 'lucide-react';

const contactItems = [
  {
    icon: MapPin,
    label: 'Indirizzo',
    value: 'Via Udine, 13, 33040 Povoletto (UD)',
    href: 'https://www.google.com/maps/search/?api=1&query=Via+Udine+13+Povoletto+UD',
  },
  {
    icon: Phone,
    label: 'Telefono',
    value: '351 491 7569',
    href: 'tel:+393514917569',
  },
];

export default function Contact() {
  return (
    <section id="contatti" className="section-pad bg-cream-200">
      <div className="container-x">
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow mb-4">Contatti</p>
          <h2 className="font-serif text-4xl font-bold text-wood-700 md:text-5xl">
            Vieni a trovarci
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Info card */}
          <div className="flex flex-col justify-between rounded-2xl bg-cream-50 p-8 shadow-lg md:p-10">
            <div className="space-y-6">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-terracotta-100 text-terracotta-500">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-honey-500">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-lg font-medium text-wood-700 transition-colors hover:text-terracotta-500"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg font-medium text-wood-700">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* Rating */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-honey-100 text-honey-600">
                  <Star className="h-6 w-6 fill-honey-400 text-honey-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-honey-500">
                    Valutazione
                  </p>
                  <p className="text-lg font-medium text-wood-700">
                    4,4 / 5 · oltre 1.100 recensioni
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-10 flex items-center gap-4 border-t border-cream-300 pt-8">
              <span className="text-sm font-medium text-wood-600">
                Seguici:
              </span>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta-400 text-cream-50 transition-colors hover:bg-terracotta-500"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta-400 text-cream-50 transition-colors hover:bg-terracotta-500"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-2xl shadow-lg lg:min-h-[420px]">
            <iframe
              title="Mappa Arcadia - Via Udine 13, Povoletto UD"
              src="https://www.google.com/maps?q=Via+Udine+13,+33040+Povoletto+UD&output=embed"
              className="h-full min-h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
