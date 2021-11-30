import { Header } from '../components/Beranda/Header';
import { CountdownSection } from '../components/Beranda/CountdownSection';
import { Register } from '../components/Beranda/Register';
import { Speakers } from '../components/Beranda/Speakers';
import { Acara } from '../components/Beranda/Acara';
import { Kontak } from '../components/Beranda/Kontak';
import { Partnership } from '../components/Beranda/Partnership';
import { Timeline } from '../components/Beranda/Timeline';

export const Beranda = () => {
  return (
    <div className="beranda">
      <Header />
      <CountdownSection />
      <Acara />
      <Timeline />
      <Speakers />
      <Register />
      <Partnership />
      <Kontak />
    </div>
  );
};
