import { Heading } from "../components/Presensi/Heading";
import { FormSejutaCita } from "../components/Presensi/FormSejutaCita";
import { FormWebsite } from "../components/Presensi/FormWebsite";
import { useState } from "react";

export const Presensi = () => {
    const [website, setWebsite] = useState();
    const [sejutaCita, setSejutaCita] = useState();

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
}