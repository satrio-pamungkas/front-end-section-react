import React from 'react';

import Pemateri1 from "../../assets/img/RizqiSyam.png";
import Pemateri2 from "../../assets/img/IdaFarida.png";
import Pemateri3 from "../../assets/img/Achmad.png";

export const Speakers = () => {
  const speakers = [
        {   
            photo: Pemateri1,
            name: 'Rizqi Syam, BA., CFP®',
            job: 'Financial Planner Finansialku',
            topic: 'Basic Financial Planning'
        },
        {
            photo: Pemateri2,
            name: 'Dr. Ida Farida Adi Prawira, SE., M.Si',
            job: 'Dosen Program Studi Magister Ilmu Akuntansi FPEB UPI dan Direktur Keuangan BPPD Sumedang',
            topic: 'The Future of Fintech'
        },
        {
            photo: Pemateri3,
            name: 'Achmad Dirgantara S.IP., MT',
            job: 'Head of IDX Incubator Jawa Barat',
            topic: 'Building a Sustainable Startup Fintech'
        },
    ];

    return (
        <div id="speakers">
            <div className="container">
                <div className="row text-center">
                    <div className="col header">
                    <h2 className="mb-3">Mengenal Pembicara pada SECTION</h2>
                    <p>
                        Kegiatan <strong>SECTION</strong> tahun ini akan menghadirkan
                        narasumber-narasumber hebat yang berasal dari berbagai latar 
                        belakang seperti perusahaan <i>startup</i>, akademisi, lembaga sipil, 
                        hingga bursa efek.
                    </p>
                    </div>
                </div>

                <div className="row text-center">
                    {speakers.map((speaker, i) => (
                        <div className="col-md-4" key={i}>
                            <h4>Section Talks #{i + 1}</h4>
                            <img
                                src={speaker.photo}
                                alt="Speaker 1"
                                className="rounded-circle"
                            />
                            <h4 className="speaker-name">{speaker.name}</h4>
                            <p>
                                <span>{speaker.job}</span>
                                <b className="d-block mt-2">{speaker.topic}</b>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
