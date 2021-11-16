import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './components/Beranda/Navbar';
import { Beranda } from './pages/Beranda';
import { FAQ } from './pages/FAQ';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faEnvelope, faYoutube, faInstagram);

export const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Beranda/>}/>
                <Route path="/faq" element={<FAQ/>}/>
            </Routes>
        </BrowserRouter>
    );
}

