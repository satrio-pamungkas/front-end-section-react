import Logo from '../../assets/img/LogoSection.svg';

export const Header = () => {
    return (
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
                <img className="logo-section" src={Logo} alt="LogoSection"></img>
                <h1 className="title">The Future of Finance is <strong>Fintech</strong></h1>
                <h1 className="subtitle-form">4 - 12 DESEMBER 2021</h1>
                <span>
                    <button className="btn btn-warning daftar">DAFTAR PESERTA</button>
                    <button className="btn btn-warning agenda">LIHAT AGENDA</button>
                </span>
            </div>
            <div className="col-3"></div>
        </div>
    );
}