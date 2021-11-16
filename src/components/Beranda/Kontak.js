import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export const Kontak = () => {
  return (
    <div id="kontak">
      <div className="container">
        <div className="row mb-4">
          <div className="col text-center">
            <h2 className="mb-3">Informasi Narahubung SECTION</h2>
            <p>
              Ingin menjadi <strong>Sponsor</strong>, <strong>Support</strong>,
              atau <strong>Media Partner</strong> dalam kegiatan SECTION ?
              Silakan hubungi narahubung kami berikut :
            </p>
          </div>
        </div>

        <div className="row justify-content-center kontak-narahubung">
          <div className="col-md-4 col-xs-12">
            <div className="card mb-4">
              <div className="card-body">
                <h4 className="card-title text-center mb-3">Naufal Fawwaz</h4>
                <ul className="narahubung">
                  <li>
                    <FontAwesomeIcon
                      className="icon"
                      icon={faWhatsapp}
                      size="lg"
                    />
                    <a href="https://api.whatsapp.com/send?phone=6288224381926&text=Kami%20berminat%20untuk%20menjadi%20Sponsor,%20Support%20atau%20Media%20Partner%20pada%20kegiatan%20anda">
                      0882-2438-1926
                    </a>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="icon"
                      icon={faEnvelope}
                      size="lg"
                    />
                    <a href="mailto:fawaznaufal23@upi.edu">
                      fawaznaufal23@upi.edu
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
