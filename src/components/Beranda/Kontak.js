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
          <div className="col-md-4 col-xs-12" id="narahubung-1">
            <h4>Naufal Fawwaz</h4>
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <FontAwesomeIcon icon={faWhatsapp} listItem size="lg" />
                </span>
                <a href="https://api.whatsapp.com/send?phone=6288224381926&text=Kami%20berminat%20untuk%20menjadi%20Sponsor,%20Support%20atau%20Media%20Partner%20pada%20kegiatan%20anda">
                  0882-2438-1926
                </a>
              </li>
              <li>
                <span className="fa-li">
                  <FontAwesomeIcon icon={faEnvelope} listItem size="lg" />
                </span>
                <a href="mailto:narahubung@gmail.com">narahubung@gmail.com</a>
              </li>
            </ul>
          </div>

          <div className="line col-md-2 col-xs-12"></div>

          <div className="col-md-4 col-xs-12" id="narahubung-2">
            <h4>Nama Narahubung Satu</h4>
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <FontAwesomeIcon icon={faWhatsapp} listItem size="lg" />
                </span>
                <a href="https://api.whatsapp.com/send?phone=62xxxxxxxx&text=Kami%20berminat%20untuk%20menjadi%20Sponsor,%20Support%20atau%20Media%20Partner%20pada%20kegiatan%20anda">
                  08xxxxxxxxx
                </a>
              </li>
              <li>
                <span className="fa-li">
                  <FontAwesomeIcon icon={faEnvelope} listItem size="lg" />
                </span>
                <a href="mailto:narahubung@gmail.com">narahubung@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
