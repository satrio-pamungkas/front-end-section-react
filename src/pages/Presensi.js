import { Heading } from "../components/Presensi/Heading";
import { FormSejutaCita } from "../components/Presensi/FormSejutaCita";
import { FormWebsite } from "../components/Presensi/FormWebsite";
import Presence from "../assets/img/Presence.svg";
import { AktivasiPresensi } from "../api/AktivasiPresensi";
import { useState } from "react";

export const Presensi = () => {
    const [website, setWebsite] = useState();
    const [sejutaCita, setSejutaCita] = useState();

    if (AktivasiPresensi() === 1) {
        return (
            <div className="presensi">
                <div className="container presensi">
                    <div className="row">
                        <div className="col-sm-0 col-md-1 col-lg-2"></div>
                        <div className="col-sm-12 col-md-10 col-lg-8">
                            <div className="card">
                                <div className="card-body">
                                    <Heading 
                                        setWebsite={setWebsite} 
                                        setSejutaCita={setSejutaCita}
                                    />
                                    {website && (<FormWebsite/>)}
                                    {sejutaCita && (<FormSejutaCita/>)}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-0 col-md-1 col-lg-2"></div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="presensi">
                <div className="container presensi">
                    <div className="row">
                        <div className="col-sm-0 col-md-1 col-lg-2"></div>
                        <div className="col-sm-12 col-md-10 col-lg-8">
                            <div className="card">
                                <div className="card-body">
                                    <div className="head">
                                        <h2>Presensi SECTION Talks #1</h2>
                                        <h5>Presensi <strong>Section Talks #1</strong> dengan judul <strong>Basic Financial Planning</strong></h5>
                                        <hr/>
                                        <div className="nav justify-content-center">
                                            <img className="presence-image" src={Presence} alt="Presence"/>
                                        </div>
                                        <div id="timeout" className="alert alert-warning" role="alert">
                                            Waktu presensi telah berakhir, silakan hubungi narahubung untuk <i>request</i> presensi
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-0 col-md-1 col-lg-2"></div>
                    </div>
                </div>
            </div>
        );
    }
}