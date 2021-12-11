import Presence from "../../assets/img/Presence.svg";
import { useState } from "react";

export const Heading = (props) => {
    const [hideWebsite, setHideWebsite] = useState();
    const [hideSejutaCita, setHideSejutaCita] = useState();

    return (
        <div className="head">
            <h2>Presensi SECTION Talks #3</h2>
            <h5>Presensi <strong>Section Talks #3</strong> dengan judul <strong>Building a Sustainable Startup Fintech</strong></h5>
            <hr/>
            <div className="nav justify-content-center">
                <img className="presence-image" src={Presence} alt="Presence"/>
            </div>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <button disabled={hideWebsite} className="btn btn-warning" aria-current="page" onClick={() => {
                        props.setSejutaCita(false);
                        props.setWebsite(true);
                        setHideWebsite(true);
                        setHideSejutaCita(false);
                    }}>Pendaftar dari Website</button>
                </li>
                <li className="nav-item">
                    <button disabled={hideSejutaCita} className="btn btn-warning" onClick={() => {
                        props.setSejutaCita(true);
                        props.setWebsite(false);
                        setHideWebsite(false);
                        setHideSejutaCita(true);
                    }}>Pendaftar dari SejutaCita</button>
                </li>
            </ul>
        </div>
    );
}