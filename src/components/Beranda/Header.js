import Logo from '../../assets/img/LogoSection.svg';

export const Header = () => {
  return (
    <div id="header">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <img className="logo-section img-fluid" src={Logo} alt="LogoSection"></img>
          <h1 className="title">
            The Future of Finance is <strong>Fintech</strong>
          </h1>
          <h1 className="subtitle-form">4 - 12 DESEMBER 2021</h1>
          <button className="btn btn-warning daftar me-lg-3 mt-2">DAFTAR PESERTA</button>
          <button className="btn btn-warning agenda ms-lg-3 mt-2">LIHAT AGENDA</button>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};
