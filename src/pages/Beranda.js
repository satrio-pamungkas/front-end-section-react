import { Header } from '../components/Beranda/Header';
import { CountdownSection } from '../components/Beranda/CountdownSection';
import { Register } from '../components/Beranda/Register';
import { Speakers } from '../components/Beranda/Speakers';
import { Kontak } from '../components/Beranda/Kontak';

export const Beranda = () => {
  return (
    <div className="beranda">
      <Header />
      <CountdownSection />
      <Speakers />
      <Register />
      <Kontak />
    </div>
  );
};
