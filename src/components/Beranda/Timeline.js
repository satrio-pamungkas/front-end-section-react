export const Timeline = () => {
    return (
        <div id="timeline" className="pt-5">
            <div className="container text-white text-center">
                <div className="row mb-4">
                    <div className="col-10 m-auto">
                        <h2 className="fw-bolder mb-3">Liminasa Kegiatan SECTION</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12 my-5">
                        <h5 className="">Section Talks #1</h5>
                        <p>4 Desember 2021</p>
                        <div className="position one">
                        <div className="col-12 line-timeline m-auto"></div>
                        </div>
                        <div className="circle mt-3"></div>
                        <p>Introduction to Fintech</p>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 my-5">
                        <h5 className="">Section Talks #2</h5>
                        <p>5 Desember 2021</p>
                        <div className="position two">
                        <div className="col-8 line-timeline m-auto"></div>
                        </div>
                        <div className="circle mt-3"></div>
                        <p>The Future of Fintech</p>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 my-5">
                        <h5 className="">Section Talks #3</h5>
                        <p>12 Desember 2021</p>
                        <div className="position three">
                        <div className="col-12 line-timeline m-auto"></div>
                        </div>
                        <div className="circle mt-3"></div>
                        <p>Building a Sustainable <br/> Startup Fintech</p>
                    </div>
                </div>
            </div>
        </div>
    );
};