import { Header } from '../components/Beranda/Header';
import { Navbar } from '../components/Beranda/Navbar';
import { CountdownSection } from '../components/Beranda/CountdownSection';
import { Register } from '../components/Beranda/Register';
import { Speakers } from '../components/Beranda/Speakers';

export const Beranda = () => {
  return (
    <div className="beranda">
      <Navbar />
      <Header />
      <CountdownSection />
      <Speakers />
      <Register />
    </div>
  );
};
