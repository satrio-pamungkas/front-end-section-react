import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { Beranda } from './pages/Beranda';
import { FAQ } from './pages/FAQ';
import { Register } from './pages/Register';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ProtectedRoute from './services/ProtectedRoute';
import { JoinGroup } from './pages/JoinGroup';

library.add(fab, faEnvelope, faYoutube, faInstagram);

export const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path="/faq" element={<FAQ/>}/>
                    <Route path="/daftar" element={<Register/>}/>
                    <Route 
                        path="/bergabung" 
                        element={
                            <ProtectedRoute>
                                <JoinGroup/>
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/" element={<Beranda/>}/>
                </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

