import { Header } from "../components/Beranda/Header";
import { Navbar } from "../components/Beranda/Navbar";
import { CountdownSection } from "../components/Beranda/CountdownSection"

export const Beranda = () => {
    return (
        <div className="beranda">
            <Navbar/>
            <Header/>
            <CountdownSection/>
        </div>
    );
}