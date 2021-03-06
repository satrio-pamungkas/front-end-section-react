import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { Beranda } from './pages/Beranda';
import { FAQ } from './pages/FAQ';
import { Presensi } from './pages/Presensi';
import { Register } from './pages/Register';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ProtectedRoute from './services/ProtectedRoute';
import { JoinGroup } from './pages/JoinGroup';

library.add(fab, faEnvelope, faYoutube, faInstagram);

export const App = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Navbar/>
                <Routes>
                    <Route path="/front-end-section-react/faq" element={<FAQ/>}/>
                    <Route path="/front-end-section-react/daftar" element={<Register/>}/>
                    <Route path="/front-end-section-react/presensi" element={<Presensi/>}/>
                    <Route 
                        path="/front-end-section-react/bergabung" 
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

