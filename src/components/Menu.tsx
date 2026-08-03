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
            Una selezione delle nostre pizze e piatti speciali.
          </p>
          <button onClick={onOpenModal} className="btn-primary mt-8">
            <Download className="h-4 w-4" />
            Scarica il Menù
          </button>
        </div>

        {/* Dish cards */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {dishes.map((dish) => (
            <article
              key={dish.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-wood-700 shadow-lg ring-1 ring-wood-600/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-wood-900/40"
            >
              <div>
                <div className="relative overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-28 w-full object-cover sm:h-36 sm:aspect-[4/3] transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {dish.tag && (
                    <span className="absolute left-2 top-2 rounded-full bg-terracotta-400 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cream-50 shadow-md sm:left-3 sm:top-3 sm:px-3 sm:py-1 sm:text-xs">
                      {dish.tag}
                    </span>
                  )}
                </div>
                <div className="p-3 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="font-serif text-base sm:text-xl font-semibold text-cream-50 leading-tight">
                      {dish.name}
                    </h3>
                    <span className="font-serif text-sm sm:text-lg font-bold text-honey-300 shrink-0">
                      {dish.price}
                    </span>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-cream-300 line-clamp-3 sm:line-clamp-none">
                    {dish.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
