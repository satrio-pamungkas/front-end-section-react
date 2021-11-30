import Logo from "../../assets/img/LogoFinansialku.png";

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
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        {/* <div className="card">
                            <div className="card-body">
                                <img src={Logo} alt="Logo Finansialku" width="85%"/>
                            </div>
                        </div> */}
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <a href="https://www.finansialku.com/" target="_blank" rel="noopener noreferrer">
                            <div className="card">
                                <div id="sponsorship" className="card-body">
                                        <img src={Logo} alt="Logo Finansialku" width="85%"/>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
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