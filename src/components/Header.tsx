import { useEffect, useState } from 'react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import { navLinks } from '@/data';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'bg-wood-800/95 py-3 shadow-lg shadow-wood-900/20 backdrop-blur-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-x flex items-center justify-between">
        {/* LOGO */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Arcadia Logo"
            className="h-10 w-auto object-contain transition-transform hover:scale-105 md:h-12"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wider text-cream-100/80 transition-colors hover:text-honey-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Link Social Desktop */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="https://www.instagram.com/explore/locations/1632530180136762/pizzeria-arcadia-povoletto/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-cream-100/80 transition-colors hover:text-honey-300"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://www.facebook.com/p/Pizzeria-Arcadia-Povoletto-100063693066513/?locale=it_IT"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-cream-100/80 transition-colors hover:text-honey-300"
          >
            <Facebook className="h-5 w-5" />
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Apri menu"
          aria-expanded={open}
          className="text-cream-50 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu - SFONDO SCURO COPRENTE AGGIUNTO */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <nav className="container-x flex flex-col gap-1 border-t border-cream-100/10 pt-4 bg-wood-800/95 backdrop-blur-lg rounded-b-2xl shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium uppercase tracking-wider text-cream-100/90 transition-colors hover:bg-wood-700 hover:text-honey-300"
            >
              {link.label}
            </a>
          ))}
          {/* Link Social Mobile */}
          <div className="mt-2 flex items-center gap-4 px-4 pb-2 pt-2 border-t border-cream-100/10">
            <a
              href="https://www.instagram.com/explore/locations/1632530180136762/pizzeria-arcadia-povoletto/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-cream-100/80 transition-colors hover:text-honey-300"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/p/Pizzeria-Arcadia-Povoletto-100063693066513/?locale=it_IT"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-cream-100/80 transition-colors hover:text-honey-300"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
