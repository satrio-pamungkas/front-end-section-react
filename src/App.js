import './App.scss';
import './css/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Beranda } from './pages/Beranda';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faEnvelope, faYoutube, faInstagram);

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Beranda/>}/>
            </Routes>
        </BrowserRouter>
    );
}

