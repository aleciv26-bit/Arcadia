import { useEffect } from 'react';
import { X, Download, Globe, Leaf } from 'lucide-react';
import { menuLanguages } from '@/data';

type MenuModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function MenuModal({ open, onClose }: MenuModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Scarica il Menù"
    >
      <div
        className="absolute inset-0 bg-wood-900/70 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-cream-50 shadow-2xl animate-fade-up">
        <button
          onClick={onClose}
          aria-label="Chiudi"
          className="absolute right-4 top-4 z-10 rounded-full p-2 text-wood-500 transition-colors hover:bg-cream-200 hover:text-wood-700"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="bg-wood-700 px-8 py-6 text-center">
          <h3 className="font-serif text-2xl text-cream-50">Scarica il Menù</h3>
          <p className="mt-1 text-sm text-cream-300">
            Scegli la lingua e la versione del menù
          </p>
        </div>

        <div className="space-y-6 p-8">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-honey-500">
              <Globe className="h-4 w-4" />
              <span>Lingua</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {menuLanguages.map((lang) => (
                <div
                  key={lang.label}
                  className="flex flex-col items-center gap-1 rounded-xl border border-cream-300 bg-cream-100 px-3 py-4 text-center transition-colors hover:border-terracotta-300 hover:bg-cream-200"
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <span className="text-sm font-medium text-wood-700">
                    {lang.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-honey-500">
              <Leaf className="h-4 w-4" />
              <span>Versione</span>
            </div>
            <div className="space-y-3">
              {menuLanguages.map((lang) => (
                <div
                  key={lang.label}
                  className="rounded-xl border border-cream-300 bg-cream-100 p-4"
                >
                  <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-wood-700">
                    <span className="text-lg">{lang.flag}</span>
                    {lang.label}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={lang.files.standard}
                      download
                      className="flex items-center justify-center gap-1.5 rounded-lg bg-terracotta-400 px-3 py-2.5 text-xs font-semibold text-cream-50 transition-colors hover:bg-terracotta-500"
                    >
                      <Download className="h-3.5 w-3.5" />
                      Standard
                    </a>
                    <a
                      href={lang.files.glutenfree}
                      download
                      className="flex items-center justify-center gap-1.5 rounded-lg border border-honey-400 bg-honey-50 px-3 py-2.5 text-xs font-semibold text-honey-700 transition-colors hover:bg-honey-100"
                    >
                      <Download className="h-3.5 w-3.5" />
                      Senza Glutine
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
