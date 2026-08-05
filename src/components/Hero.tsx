import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-start pt-28 sm:pt-36 overflow-hidden"
    >
      {/* Background image naturale SENZA overlay scuro pesante */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Arcadia Ristorante Pizzeria"
          className="h-full w-full object-cover animate-slow-zoom"
          loading="eager"
        />
        {/* Leggerissima sfumatura solo in alto sul cielo per garantire leggibilità al testo */}
        <div className="absolute inset-0 bg-gradient-to-b from-wood-900/40 via-transparent to-wood-900/30" />
      </div>

      {/* Content spostato in alto verso il cielo */}
      <div className="container-x relative z-10 flex flex-col items-center text-center w-full">
        <p className="eyebrow mb-3 text-honey-300 font-semibold tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] animate-fade-in">
          Ristorante Pizzeria · Povoletto (UD)
        </p>

        {/* Titolo nel cielo con forte ombra per staccare senza scurire la foto */}
        <h1 className="max-w-4xl font-serif text-5xl font-bold leading-tight text-cream-50 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] md:text-7xl lg:text-8xl animate-fade-up">
          Arcadia
        </h1>

        <p className="mt-4 max-w-2xl text-lg font-medium leading-relaxed text-cream-50 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] md:text-xl animate-fade-up [animation-delay:200ms] opacity-0">
          I sapori autentici della tradizione, pensati per tutti.
        </p>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row animate-fade-up [animation-delay:400ms] opacity-0">
          <a href="#menu" className="btn-primary shadow-2xl">
            Scopri il Menù
          </a>

          <a
            href="tel:+393514917569"
            className="btn-outline border-cream-50 text-cream-50 backdrop-blur-md bg-wood-900/30 hover:bg-wood-900/50 shadow-2xl"
          >
            Prenota un Tavolo
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#filosofia"
        aria-label="Scorri verso il basso"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-cream-100/80 transition-colors hover:text-honey-300 drop-shadow-md"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </a>
    </section>
  );
}
