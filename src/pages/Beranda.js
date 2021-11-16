import { Header } from '../components/Beranda/Header';
import { Navbar } from '../components/Beranda/Navbar';
import { CountdownSection } from '../components/Beranda/CountdownSection';
import { Register } from '../components/Beranda/Register';
import { Speakers } from '../components/Beranda/Speakers';
import { Footer } from '../components/Beranda/Footer';
import { Acara } from '../components/Beranda/Acara';

export const Beranda = () => {
  return (
    <div className="beranda">
      <Navbar />
      <Header />
      <CountdownSection />
      <Acara />
      <Speakers />
      <Register />
      <Footer />
    </div>
  );
};
