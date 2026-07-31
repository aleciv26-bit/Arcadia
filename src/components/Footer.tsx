import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-wood-900 py-12 text-cream-300">
      <div className="container-x">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-serif text-2xl font-bold text-cream-50">
              Arcadia
            </p>
            <p className="mt-1 text-sm text-cream-400">
              Ristorante Pizzeria · Povoletto (UD)
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-wood-700 text-cream-200 transition-colors hover:bg-terracotta-400 hover:text-cream-50"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-wood-700 text-cream-200 transition-colors hover:bg-terracotta-400 hover:text-cream-50"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-wood-700 pt-6 text-center text-xs text-cream-400">
          <p>
            Via Udine, 13, 33040 Povoletto (UD) · Tel. 351 491 7569
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} Arcadia Ristorante Pizzeria. Tutti i
            diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}
