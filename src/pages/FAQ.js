import React from 'react';
import parse from "html-react-parser";

export const FAQ = () => {
  const listFaqs = [
    {
      question: 'Accordion question #1 ?',
      answer: `<strong>This is the first item's accordion body.</strong> It
      is shown by default, until the collapse plugin adds the
      appropriate classes that we use to style each element. These
      classes control the overall appearance, as well as the
      showing and hiding via CSS transitions. You can modify any
      of this with custom CSS or overriding our default variables.
      It's also worth noting that just about any HTML can go
      within the <code>.accordion-body</code>, though the
      transition does limit overflow.`,
    },
    {
      question: 'Accordion question #2?',
      answer: `<strong>This is the second item's accordion body.</strong> It
      is shown by default, until the collapse plugin adds the
      appropriate classes that we use to style each element. These
      classes control the overall appearance, as well as the
      showing and hiding via CSS transitions. You can modify any
      of this with custom CSS or overriding our default variables.
      It's also worth noting that just about any HTML can go
      within the <code>.accordion-body</code>, though the
      transition does limit overflow.`,
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
                                <div className="accordion-body">
                                {parse(faq.answer)}
                                </div>
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
