import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
const baseUrl = 'http://localhost:3000';

export const Footer = () => {
    return (
        <footer className="footer-clean">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-4 col-md-3 item">
                        <h3>KEGIATAN SECTION</h3>
                        <ul>
                            <li><a href={baseUrl + '#acara'}>Agenda Kegiatan</a></li>
                            <li><a href={baseUrl + '#timeline'}>Liminasa Kegiatan</a></li>
                            <li><a href="/faq">FAQs Kegiatan</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>PRANALA LUAR</h3>
                        <ul>
                            <li><a href={baseUrl}>Himpunan Mahasiswa RPL (HIMARPL)</a></li>
                            <li><a href="http://rpl.kd-cibiru.upi.edu">Program Studi Rekayasa Perangkat Lunak</a></li>
                            <li><a href="http://upi.edu">Universitas Pendidikan Indonesia</a></li>
                        </ul>
                    </div>
                        <div className="col-lg-3 item social"><a href="http://localhost:3000"> <FontAwesomeIcon icon={faEnvelope} style={{ color: '#FFC700' }} /> </a><a href="http://localhost:3000"> <FontAwesomeIcon icon={faYoutube} style={{ color: '#FFC700' }} /> </a><a href="http://localhost:3000"> <FontAwesomeIcon icon={faInstagram} style={{ color: '#FFC700' }} /> </a>
                        <p className="copyright">SECTION - HIMARPL © 2021</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};