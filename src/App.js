import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './components/Beranda/Navbar';
import { Beranda } from './pages/Beranda';
import { FAQ } from './pages/FAQ';

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

