import { Wheat, Leaf, Sparkles } from 'lucide-react';

const pillars = [
  {
    icon: Wheat,
    title: 'Impasti ad Alta Digeribilità',
    text: 'Lievitazioni lunghe fino a 48 ore e farine selezionate per un impasto leggero, fragrante e facilmente digeribile.',
  },
  {
    icon: Leaf,
    title: 'Senza Glutine senza Rinunce',
    text: 'Massima attenzione al Gluten-Free con impasti dedicati e procedure di lavorazione sicure, per un\'esperienza inclusiva.',
  },
  {
    icon: Sparkles,
    title: 'Ingredienti Selezionati',
    text: 'Materie prime di stagione, provenienza locale e filiera corta. Il gusto autentico parte dalla qualità.',
  },
];

export default function Philosophy() {
  return (
    <section id="filosofia" className="section-pad bg-cream-100">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Image side */}
        <div className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-wood-900/20">
            <img
              src="/images/gallery-1.jpg"
              alt="La cucina di Arcadia"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-terracotta-400 px-8 py-6 text-cream-50 shadow-xl md:block">
            <p className="font-serif text-3xl font-bold">100%</p>
            <p className="text-xs uppercase tracking-wider">Fatto in casa</p>
          </div>
        </div>

        {/* Text side */}
        <div className="order-1 lg:order-2">
          <p className="eyebrow mb-4">La nostra filosofia</p>
          <h2 className="font-serif text-4xl font-bold leading-tight text-wood-700 md:text-5xl">
            Il gusto autentico, pensato per tutti.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-wood-600">
            Da Arcadia, ci impegniamo a offrirvi solo il meglio. 
            Ogni pizza è realizzata con ingredienti selezionati, provenienti 
            da produttori locali del Friuli Venezia Giulia, per garantire freschezza 
            e qualità. La nostra pasta è a lievitazione naturale, 
            per una digeribilità ottimale e un sapore inconfondibile.
            Anche <strong className="font-semibold text-terracotta-500">Senza Glutine</strong>,
            perché nessuno debba rinunciare al piacere di un buon pasto.
          </p>

          <div className="mt-10 space-y-6">
            {pillars.map((p) => (
              <div key={p.title} className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-terracotta-100 text-terracotta-500">
                  <p.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-wood-700">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-wood-600">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
