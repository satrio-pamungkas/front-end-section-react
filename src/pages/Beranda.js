import { Header } from "../components/Beranda/Header";
import { Navbar } from "../components/Beranda/Navbar";

export const Beranda = () => {
    return (
        <div className="beranda">
            <Navbar/>
            <Header/>
        </div>
    );
}