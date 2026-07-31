export type Dish = {
  id: number;
  image: string;
  name: string;
  description: string;
  price: string;
  tag?: string;
};

export const dishes: Dish[] = [
  {
    id: 1,
    image: '/images/dish-1.jpg',
    name: 'Marghereta Arcadia',
    description:
      'Pomodoro San Marzano DOP, mozzarella fior di latte, basilico fresco. Impasto ad alta idratazione, 48h di lievitazione.',
    price: '12 €',
    tag: 'Classica',
  },
  {
    id: 2,
    image: '/images/dish-2.jpg',
    name: 'Diavola del Bosco',
    description:
      'Pomodoro, mozzarella, salame piccante, funghi porcini, miele al rosmarino. Un incontro di dolce e piccante.',
    price: '15 €',
    tag: 'Speciale',
  },
  {
    id: 3,
    image: '/images/dish-3.jpg',
    name: 'Senza Glutine del Contadino',
    description:
      'Impasto senza glutine a base di riso e quinoa, verdure di stagione, stracchino e crudo di Parma 24 mesi.',
    price: '14 €',
    tag: 'Gluten-Free',
  },
  {
    id: 4,
    image: '/images/dish-4.jpg',
    name: 'Tagliatelle al Tartufo',
    description:
      'Pasta fresca tirata a mano, crema di parmigiano 30 mesi, tartufo nero estivo. Un classico del territorio.',
    price: '18 €',
    tag: 'Stagionale',
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
