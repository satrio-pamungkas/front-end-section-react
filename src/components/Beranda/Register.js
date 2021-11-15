import React from 'react';
import Logo from '../../assets/img/logo-section-vol2.png';

export const Register = () => {
  return (
    <div id="register">
      <div className="container text-center">
        <img src={Logo} className="img-fluid my-4" alt="Logo Section Vol 2" />

        <div>
          <a href="#register" className="btn btn-warning my-4">
            Daftar Sekarang
          </a>
        </div>
      </div>
    </div>
  );
};
