import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Beranda } from './pages/Beranda';

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Beranda/>}/>
            </Routes>
        </BrowserRouter>
    );
}

