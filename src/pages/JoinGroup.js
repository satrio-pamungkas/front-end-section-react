import { JoinButton } from "../components/JoinGroup/JoinButton";
import Illustration from "../assets/img/joingroup.svg"

export const JoinGroup = () => {
    return (
        <div className="join-group">
            <div className="container join-group">
                <div className="row">
                    <div className="col-sm-0 col-md-1 col-lg-2"></div>
                    <div className="col-sm-12 col-md-10 col-lg-8">
                        <div class="card">
                            <div class="card-body">
                                <h1>Terima Kasih Telah Mendaftar</h1>
                                <h4>
                                    Silakan bergabung pada grup WhatsApp untuk mendapatkan informasi selengkapnya mengenai kegiatan SECTION melalui tombol 
                                    berikut atau melalui pesan surel (e-mail) yang dikirimkan
                                </h4>
                                <img src={Illustration} alt="join-group-illustration"/>
                                <h5>
                                    Klik Tombol Berikut
                                </h5>
                                <JoinButton/>   
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-0 col-md-1 col-lg-2"></div>
                </div>
            </div>
        </div>
    );
}