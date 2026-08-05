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
        {/* Overlay sfumato più nitido al centro */}
        <div className="absolute inset-0 bg-gradient-to-b from-wood-900/60 via-wood-900/40 to-wood-900/70" />
      </div>

      {/* Content */}
      <div className="container-x relative z-10 flex flex-col items-center text-center">
        <p className="eyebrow mb-6 text-honey-300 font-semibold tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] animate-fade-in">
          Ristorante Pizzeria · Povoletto (UD)
        </p>

        {/* Titolo con ombra intensa per separarlo dall'insegna sottostante */}
        <h1 className="max-w-4xl font-serif text-5xl font-bold leading-tight text-cream-50 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] md:text-7xl lg:text-8xl animate-fade-up">
          Arcadia
        </h1>

        {/* Sottotitolo font-medium e ombra definita */}
        <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-cream-50 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] md:text-xl animate-fade-up [animation-delay:200ms] opacity-0">
          I sapori autentici della tradizione, pensati per tutti.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-up [animation-delay:400ms] opacity-0">
          <a href="#menu" className="btn-primary shadow-xl">
            Scopri il Menù
          </a>

          {/* TASTO CHIAMA DIRETTAMENTE con sfondo sfocato per leggibilità */}
          <a
            href="tel:+393514917569"
            className="btn-outline border-cream-50 text-cream-50 backdrop-blur-sm bg-wood-900/20 hover:bg-wood-900/40 shadow-xl"
          >
            Prenota un Tavolo
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#filosofia"
        aria-label="Scorri verso il basso"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream-100/70 transition-colors hover:text-honey-300 drop-shadow-md"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </a>
    </section>
  );
}
