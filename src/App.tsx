import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MenuModal from '@/components/MenuModal';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream-100">
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Menu onOpenModal={() => setMenuOpen(true)} />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <MenuModal open={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}

export default App;
