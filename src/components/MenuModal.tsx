import { X, Globe, Download } from 'lucide-react';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuModal({ isOpen, onClose }: MenuModalProps) {
  if (!isOpen) return null;

  // Ricordati di verificare che i nomi dei file PDF corrispondano a quelli nella cartella /public
  const menuOptions = [
    {
      code: 'it',
      name: 'Italiano',
      subtitle: '+ Senza Glutine (in fondo)',
      flag: '🇮🇹',
      file: '/menu-italiano.pdf', 
    },
    {
      code: 'en',
      name: 'English',
      subtitle: null,
      flag: '🇬🇧',
      file: '/menu-english.pdf',
    },
    {
      code: 'de',
      name: 'Deutsch',
      subtitle: null,
      flag: '🇩🇪',
      file: '/menu-deutsch.pdf',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-cream-50 shadow-2xl">
        
        {/* Header del Modal */}
        <div className="bg-wood-900 px-6 py-6 text-center text-cream-50">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-cream-300 transition-colors hover:text-cream-50"
            aria-label="Chiudi"
          >
            <X className="h-6 w-6" />
          </button>
          <h3 className="font-serif text-2xl font-bold">Scarica il Menù</h3>
          <p className="mt-1 text-sm text-cream-300">
            Scegli la lingua per scaricare il PDF
          </p>
        </div>

        {/* Corpo del Modal con le 3 Lingue */}
        <div className="p-6">
          <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-honey-600">
            <Globe className="h-4 w-4" />
            <span>Seleziona Lingua</span>
          </div>

          <div className="grid gap-3">
            {menuOptions.map((option) => (
              <a
                key={option.code}
                href={option.file}
                download
                onClick={onClose}
                className="group flex items-center justify-between rounded-xl border border-cream-300 bg-cream-100/50 p-4 transition-all hover:border-honey-400 hover:bg-cream-100 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl" role="img" aria-label={option.name}>
                    {option.flag}
                  </span>
                  <div className="text-left">
                    <p className="font-semibold text-wood-800 transition-colors group-hover:text-honey-600">
                      {option.name}
                    </p>
                    {option.subtitle && (
                      <p className="text-xs font-medium text-terracotta-500">
                        {option.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-200 text-wood-700 transition-colors group-hover:bg-honey-500 group-hover:text-cream-50">
                  <Download className="h-4 w-4" />
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
