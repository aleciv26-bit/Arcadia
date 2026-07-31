import { galleryImages } from '@/data';

export default function Gallery() {
  return (
    <section id="galleria" className="section-pad bg-cream-100">
      <div className="container-x">
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow mb-4">Galleria</p>
          <h2 className="font-serif text-4xl font-bold text-wood-700 md:text-5xl">
            L'atmosfera di Arcadia
          </h2>
          <p className="mt-4 max-w-xl text-wood-600">
            Uno sguardo ai nostri piatti, alla sala e ai momenti speciali.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((src, i) => (
            <div
              key={src}
              className={`group relative overflow-hidden rounded-xl shadow-md ${
                i === 0 || i === 5 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img
                src={src}
                alt={`Galleria Arcadia ${i + 1}`}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  i === 0 || i === 5
                    ? 'aspect-square md:aspect-[2/1]'
                    : 'aspect-[4/3]'
                }`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-wood-900/0 transition-colors duration-500 group-hover:bg-wood-900/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
