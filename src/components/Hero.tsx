import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Arcadia Ristorante Pizzeria"
          className="h-full w-full object-cover animate-slow-zoom"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-wood-900/70 via-wood-900/50 to-wood-900/80" />
      </div>

      {/* Content */}
      <div className="container-x relative z-10 flex flex-col items-center text-center">
        <p className="eyebrow mb-6 text-honey-300 animate-fade-in">
          Ristorante Pizzeria · Povoletto (UD)
        </p>
        <h1 className="max-w-4xl font-serif text-5xl font-bold leading-tight text-cream-50 drop-shadow-lg md:text-7xl lg:text-8xl animate-fade-up">
          Arcadia
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-cream-100/90 md:text-xl animate-fade-up [animation-delay:200ms] opacity-0">
          I sapori autentici della tradizione, pensati per tutti.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-up [animation-delay:400ms] opacity-0">
          <a href="#menu" className="btn-primary">
            Scopri il Menù
          </a>

          {/* TASTO CHIAMA DIRETTAMENTE */}
          <a href="tel:+393514917569" className="btn-outline">
            Prenota un Tavolo
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#filosofia"
        aria-label="Scorri verso il basso"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream-100/60 transition-colors hover:text-honey-300"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </a>
    </section>
  );
}
