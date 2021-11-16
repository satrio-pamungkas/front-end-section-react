import { Header } from '../components/Beranda/Header';
import { CountdownSection } from '../components/Beranda/CountdownSection';
import { Register } from '../components/Beranda/Register';
import { Speakers } from '../components/Beranda/Speakers';
import { Footer } from '../components/Beranda/Footer';
import { Acara } from '../components/Beranda/Acara';
import { Kontak } from '../components/Beranda/Kontak';

export const Beranda = () => {
  return (
    <div className="beranda">
      <Header />
      <CountdownSection />
      <Acara />
      <Speakers />
      <Register />
      <Kontak />
      <Footer />
    </div>
  );
};
