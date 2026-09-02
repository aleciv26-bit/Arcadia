import { MapPin, Phone, Star, Clock, Instagram, Facebook, ExternalLink } from 'lucide-react';

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

const openingHours = [
  { day: 'Lunedì', hours: '11:00–15:00, 18:00–00:00' },
  { day: 'Martedì', hours: '11:00–15:00, 18:00–00:00' },
  { day: 'Mercoledì', hours: 'Chiuso', isClosed: true },
  { day: 'Giovedì', hours: '11:00–15:00, 18:00–00:00' },
  { day: 'Venerdì', hours: '11:00–15:00, 18:00–00:00' },
  { day: 'Sabato', hours: '11:00–15:00, 18:00–00:00' },
  { day: 'Domenica', hours: '11:00–15:00, 18:00–00:00' },
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

              {/* Orari di Apertura */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-terracotta-100 text-terracotta-500">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="w-full">
                  <p className="text-xs font-semibold uppercase tracking-wider text-honey-500 mb-2">
                    Orari di Apertura
                  </p>
                  <div className="space-y-1 text-sm font-medium text-wood-700">
                    {openingHours.map((item) => (
                      <div key={item.day} className="flex justify-between border-b border-cream-200/60 pb-1">
                        <span>{item.day}</span>
                        <span className={item.isClosed ? 'font-semibold text-terracotta-500' : 'text-wood-600'}>
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Rating + Pulsante Recensione */}
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
                  <a
                    href="https://www.google.com/search?sca_esv=310041c079f8198e&sxsrf=APpeQnvlx_KFAT3g6XczeTA4RSvPJlu00Q:1788333531579&q=arcadia+povoletto&si=APenkKn5T4YN59srr511wD6k6Pufj9DEzRUvB1XJSwUeeT5afn9axYtyL8lPPBCtBIj3sOIFzRN1csmxyHK7wyGeZwGSgf2mvtkyoqg3T4TKGTdBpSHhINo%3D&uds=AJ5uw1_rUfMqrtZe7QfpdFGwaPC3VDg2wfLxxVqRW5yvjorc5kCe50gcV-Q7tt65o3HF10CBKM7n3xLlu2jnSC2gCn2t9LlQmeuQdC4-Su_PlNS57o2-yZc&sa=X&sqi=2&ved=2ahUKEwjdyo7Hrc-WAxWKhv0HHYsdB2QQ3PALegQIHhAE&biw=1284&bih=821&dpr=2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 rounded-lg bg-terracotta-500 px-3.5 py-2 text-xs font-semibold text-cream-50 transition-all hover:bg-terracotta-600 shadow-md hover:shadow-lg"
                  >
                    <span>Lascia la tua recensione</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-10 flex items-center gap-4 border-t border-cream-300 pt-8">
              <span className="text-sm font-medium text-wood-600">
                Seguici:
              </span>
              <a
                href="https://www.instagram.com/explore/locations/1632530180136762/pizzeria-arcadia-povoletto/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta-400 text-cream-50 transition-colors hover:bg-terracotta-500"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/p/Pizzeria-Arcadia-Povoletto-100063693066513/?locale=it_IT"
                target="_blank"
                rel="noopener noreferrer"
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
