import LogoFinansialku from "../../assets/img/LogoFinansialku.png";
import LogoInez from "../../assets/img/LogoInez.png";

export const Partnership = () => {
    return (
        <div id="partnership" className="pt-5">
            <div className="container text-white text-center">
                <div className="row mb-4">
                    <div className="col-10 m-auto">
                        <h2 className="fw-bolder mb-3">Sponsorship</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-2 col-md-1">
                        {/* <div className="card">
                            <div className="card-body">
                                <img src={Logo} alt="Logo Finansialku" width="85%"/>
                            </div>
                        </div> */}
                    </div>
                    <div className="col-lg-4 col-md-5 col-sm-12">
                        <a href="https://www.finansialku.com/" target="_blank" rel="noopener noreferrer">
                            <div className="card">
                                <div className="card-body">
                                    <img src={LogoFinansialku} alt="Logo Finansialku" width="85%"/>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-5 col-sm-12">
                        <a href="https://www.instagram.com/inezcosmetics/" target="_blank" rel="noopener noreferrer">
                            <div className="card">
                                <div className="card-body">
                                        <img id="logo-inez" src={LogoInez} alt="Logo Finansialku" width="85%"/>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-1">
                        {/* <div className="card">
                            <div className="card-body">
                                <img src={Logo} alt="Logo Finansialku" width="85%"/>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}