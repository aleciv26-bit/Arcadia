export type Dish = {
  id: number;
  image: string;
  name: string;
  tag?: string;
};

export const dishes: Dish[] = [
  // --- SALATO ---
  {
    id: 1,
    image: '/images/Mezzelune ripiene al branzino.jpg',
    name: 'Mezzelune ripiene al branzino',
    tag: 'Salato',
  },
  {
    id: 2,
    image: '/images/Saute di cozze e vongole.jpg',
    name: 'Sautè di cozze e vongole',
    tag: 'Salato',
  },
  {
    id: 3,
    image: '/images/Spaghetti alla scogliera.jpg',
    name: 'Spaghetti alla scogliera',
    tag: 'Salato',
  },
  {
    id: 4,
    image: '/images/Zuppa di Pesce.jpg',
    name: 'Zuppa di Pesce',
    tag: 'Salato',
  },
   {
    id: 5,
    image: '/images/Antipasto misto mare.jpg',
    name: 'Antipasto misto mare',
    tag: 'Salato',
  },
   {
    id: 6,
    image: '/images/Risotto alla pescatora.jpg',
    name: 'Risotto alla pescatora',
    tag: 'Salato',
  },
  {
    id: 7,
    image: '/images/Scialatielli alla scogliera.jpg',
    name: 'Scialatielli alla scogliera',
    tag: 'Salato',
  },
  {
    id: 8,
    image: '/images/Scialatielli alle vongole.jpg',
    name: 'Scialatielli alle vongole',
    tag: 'Salato',
  },

  // --- DOLCI ---
  {
    id: 9,
    image: '/images/Crostata golosa.jpg',
    name: 'Crostata Golosa',
    tag: 'Dessert',
  },
  {
    id: 10,
    image: '/images/Pastiera Napoletana.jpg',
    name: 'Pastiera Napoletana',
    tag: 'Dessert',
  },
  {
    id: 11,
    image: '/images/Sinfonia.jpg',
    name: 'Sinfonia',
    tag: 'Dessert',
  },
  {
    id: 12,
    image: '/images/Tiramisu.jpg',
    name: 'Tiramisù',
    tag: 'Dessert',
  },
];

export const galleryImages: string[] = [
  '/images/gallery-1.jpg',
  '/images/gallery-2.jpg',
  '/images/gallery-3.jpg',
  '/images/gallery-4.jpg',
  '/images/gallery-5.jpg',
  '/images/gallery-6.jpg',
  '/images/gallery-7.jpg',
  '/images/gallery-8.jpg',
  '/images/gallery-9.jpg',
  '/images/gallery-10.jpg',
];

export type MenuOption = {
  label: string;
  flag: string;
  files: { standard: string; glutenfree: string };
};

export const menuLanguages: MenuOption[] = [
  {
    label: 'Italiano',
    flag: '🇮🇹',
    files: {
      standard: '/menu-it.pdf',
      glutenfree: '/menu-it-glutenfree.pdf',
    },
  },
  {
    label: 'English',
    flag: '🇬🇧',
    files: {
      standard: '/menu-en.pdf',
      glutenfree: '/menu-en-glutenfree.pdf',
    },
  },
  {
    label: 'Deutsch',
    flag: '🇩🇪',
    files: {
      standard: '/menu-de.pdf',
      glutenfree: '/menu-de-glutenfree.pdf',
    },
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Filosofia', href: '#filosofia' },
  { label: 'Menù', href: '#menu' },
  { label: 'Galleria', href: '#galleria' },
  { label: 'Contatti', href: '#contatti' },
];
