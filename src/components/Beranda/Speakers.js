import React from 'react';

export const Speakers = () => {
  const speakers = [
        {
        name: 'Jhon Titor',
        job: 'Ketua Advokasi',
        },
        {
        name: 'Jhon Titor',
        job: 'Ketua Advokasi',
        },
        {
        name: 'Jhon Titor',
        job: 'Ketua Advokasi',
        },
    ];

    return (
        <div id="speakers">
            <div className="container">
                <div className="row text-center">
                    <div className="col header">
                    <h2 className="mb-3">Mengenal Pembicara pada SECTION</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                        sint, reiciendis mollitia at, a dolore odio maiores, ipsam magnam
                        delectus error nulla quos fugiat? Aliquid asperiores eaque possimus
                        porro a.
                    </p>
                    </div>
                </div>

                <div className="row text-center">
                    {speakers.map((speaker, i) => (
                        <div className="col-md-4" key={i}>
                            <h4>Section Talks #{i + 1}</h4>
                            <img
                                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                alt="Speaker 1"
                                className="rounded-circle"
                            />
                            <h4 className="speaker-name">{speaker.name}</h4>
                            <p>
                                <span>{speaker.job}</span>
                                <b className="d-block mt-2">HIMARPL</b>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
