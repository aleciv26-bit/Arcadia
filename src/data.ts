export type Dish = {
  id: number;
  image: string;
  name: string;
  description: string;
  price: string;
  tag?: string;
};

export const dishes: Dish[] = [
  // --- SALATO ---
  {
    id: 1,
    image: '/images/mezzelune-branzino.jpg', // Modifica il nome del file con il tuo reale
    name: 'Mezzelune ripiene al branzino',
    description: 'Pasta fresca ripiena di delicato branzino, servita con un condimento leggero.',
    price: '16 €', // Inserisci il prezzo corretto
    tag: 'Salato',
  },
  {
    id: 2,
    image: '/images/saute-cozze-vongole.jpg',
    name: 'Sauté di cozze e vongole',
    description: 'Cozze e vongole fresche saltate in padella con aglio, prezzemolo e crostini di pane.',
    price: '14 €',
    tag: 'Salato',
  },
  {
    id: 3,
    image: '/images/spaghetti-scogliera.jpg',
    name: 'Spaghetti alla scogliera',
    description: 'Spaghetti trafilati al bronzo con frutti di mare freschi e pomodorini sfumati al vino bianco.',
    price: '18 €',
    tag: 'Salato',
  },
  {
    id: 4,
    image: '/images/zuppa-pesce.jpg',
    name: 'Zuppa di Pesce',
    description: 'Ricca e gustosa zuppa con il pescato del giorno servita con crostini dorati.',
    price: '20 €',
    tag: 'Salato',
  },

  // --- DOLCI ---
  {
    id: 5,
    image: '/images/cheesecake-frutti-bosco.jpg',
    name: 'Cheesecake ai frutti di bosco',
    description: 'Cremosa cheesecake artigianale arricchita con una salsa ai frutti di bosco freschi.',
    price: '6 €',
    tag: 'Dessert',
  },
  {
    id: 6,
    image: '/images/mousse-tre-cioccolati.jpg',
    name: 'Mousse ai tre cioccolati',
    description: 'Delicata mousse a tre strati: cioccolato fondente, al latte e bianco.',
    price: '7 €',
    tag: 'Dessert',
  },
  {
    id: 7,
    image: '/images/souffle-cioccolato.jpg',
    name: 'Soufflé al cioccolato con cuore caldo',
    description: 'Soffice tortino al cioccolato servito caldo con cuore cremoso e fondente.',
    price: '7 €',
    tag: 'Dessert',
  },
  {
    id: 8,
    image: '/images/tiramisu.jpg',
    name: 'Tiramisù',
    description: 'Il classico dessert italiano fatto in casa con crema al mascarpone e caffè.',
    price: '6 €',
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
