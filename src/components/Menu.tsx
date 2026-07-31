import { Download } from 'lucide-react';
import { dishes } from '@/data';

type MenuSectionProps = {
  onOpenModal: () => void;
};

export default function Menu({ onOpenModal }: MenuSectionProps) {
  return (
    <section id="menu" className="section-pad bg-wood-800 text-cream-100">
      <div className="container-x">
        {/* Heading + download */}
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow mb-4 text-honey-400">Il nostro menù</p>
          <h2 className="font-serif text-4xl font-bold text-cream-50 md:text-5xl">
            Creazioni da provare
          </h2>
          <p className="mt-4 max-w-xl text-cream-300">
            Una selezione delle nostre pizze e piatti speciali. Prezzo medio
            10-20 € a persona.
          </p>
          <button onClick={onOpenModal} className="btn-primary mt-8">
            <Download className="h-4 w-4" />
            Scarica il Menù
          </button>
        </div>

        {/* Dish cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {dishes.map((dish) => (
            <article
              key={dish.id}
              className="group overflow-hidden rounded-2xl bg-wood-700 shadow-lg ring-1 ring-wood-600/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-wood-900/40"
            >
              <div className="relative overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {dish.tag && (
                  <span className="absolute left-3 top-3 rounded-full bg-terracotta-400 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cream-50 shadow-md">
                    {dish.tag}
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-serif text-xl font-semibold text-cream-50">
                    {dish.name}
                  </h3>
                  <span className="font-serif text-lg font-bold text-honey-300">
                    {dish.price}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-cream-300">
                  {dish.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
