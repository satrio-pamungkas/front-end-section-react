import React from 'react';
import parse from 'html-react-parser';

export const FAQ = () => {
  const listFaqs = [
    {
      question: 'Apa itu Section Vol.2 ?',
      answer: `<p>
      Section Vol.2 singkatan dari Software Engineering Creation Volume 2 merupakan <i>event</i> tahunan dari Himpunan Mahasiswa Rekayasa Perangkat Lunak di Universitas Pendidikan Indonesia. <i>Event</i> ini diadakan setahun sekali dimana kali ini merupakan tahun kedua. Tema yang diangkat untuk tahun ini yaitu tentang <strong><i>"The Future of Finance is FinTech"</i></strong>.
      </p>`,
    },
    {
      question: 'Berapa biaya yang dibutuhkan untuk mengikuti Section Vol.2 ?',
      answer: `<p>
      Biaya yang dikenakan adalah <strong>GRATIS</strong>. Peserta dapat langsung mendaftar melalui website Section Vol.2, kemudian join meeting melalui link yang akan disebarkan pada grup para peserta.
      </p>`,
    },
    {
      question: 'Apakah saya perlu mendaftar terlebih dahulu ?',
      answer: `<p>
      Ya. Para peserta diwajibkan untuk mendaftar terlebih dahulu untuk mengikuti <i>event</i> pada Section Vol.2
      </p>`,
    },
    {
      question: 'Bagaimana cara mendapatkan sertifikat untuk peserta ?',
      answer: `<p>
      Peserta cukup mendaftar pada website lalu mengikuti semua kegiatan Section Vol.2. Baik hari ke-1, ke-2, dan ke-3. Lalu, kami akan mengirimkan sertifikat anda melalui email yang telah terdaftar
      </p>`,
    },
    {
      question: 'Bagaimana saya bisa mensponsori acara ini ?',
      answer: `<p>
      Silahkan kirim email ke <a href="mailto:rplfestupi@gmail.com" style="text-decoration: none; color: #FFC700">rplfestupi@gmail.com dan</a> tim kami akan segera menghubungi anda
      </p>`,
    },
    {
      question: 'Bagaimana saya bisa menghubungi penyelenggara acara ini ?',
      answer: `<p>
      Silahkan hubungi di <a href="https://api.whatsapp.com/send?phone=6288224381926&text=Kami%20berminat%20untuk%20menjadi%20Sponsor,%20Support%20atau%20Media%20Partner%20pada%20kegiatan%20anda" style="text-decoration: none; color: #FFC700">+62 882-2438-1926</a> atas nama Naufal atau bisa melalui email ke <a href="mailto:rplfestupi@gmail.com" style="text-decoration: none; color: #FFC700">rplfestupi@gmail.com</a> dan tim kami akan segera menghubungi anda
      </p>`,
    },
  ];

  return (
    <>
      <div className="faq">
        <div className="container">
          <h2 className="text-center">F.A.Q Seputar Section</h2>
          <div className="row justify-content-center">
            <div className="col-md-9 col-xs-12 mb-4">
              <div className="accordion accordion-flush" id="accordionFaq">
                {listFaqs.map((faq, i) => (
                  <div className="accordion-item" key={i}>
                    <h2
                      className="accordion-header"
                      id={`heading-${i.toString()}`}
                    >
                      <button
                        className={`accordion-button ${
                          i !== 0 ? 'collapsed' : ''
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${i.toString()}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${i.toString()}`}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse-${i.toString()}`}
                      className={`accordion-collapse collapse ${
                        i === 0 ? 'show' : ''
                      } `}
                      aria-labelledby={`heading-${i.toString()}`}
                      data-bs-parent="#accordionFaq"
                    >
                      <div className="accordion-body">{parse(faq.answer)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
