import Hexa from "../../assets/img/Hexa.svg"
export const Acara = () => {
    return (
        <div id="acara" className="py-5">
            <div className="container text-white text-center">
                <div className="row mb-4">
                    <div className="col-10 m-auto">
                        <h2 className="fw-bolder mb-3">Software Engineering Creation Vol. 2.0</h2>
                        <p className="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore et delectus magni impedit pariatur necessitatibus, consectetur, voluptatum similique minus laborum consequuntur. In aliquam praesentium, culpa suscipit at tempore debitis. Quas minima voluptatibus odit perferendis suscipit recusandae. Voluptatibus porro, accusantium, voluptatem incidunt, rerum modi earum fugit nostrum impedit sapiente iste odio quod culpa. Facere, optio commodi ratione architecto consequuntur eaque vitae, assumenda, ipsam dignissimos ab cumque debitis dolores. Nihil vitae quod consequatur ea reprehenderit dolorem explicabo ducimus cum rem accusamus exercitationem, sequi doloribus, cupiditate suscipit sed, quidem odit quam iure nisi dolorum corporis impedit. Omnis vero, voluptate labore explicabo odit tempore.</p>
                    </div>
                </div>
                <div className="row mb-4">
                    <h4>"The Future of Finance is Fintech"</h4>
                </div>
                <div className="row mb-5">
                    <div class="col-4 line m-auto"></div>
                </div>
                <div className="row mb-4">
                    <div className="col-10 m-auto">
                        <h2 className="fw-bolder mb-3">Mengapa Perlu Mengikuti Section?</h2>
                        <p className="m-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ullam, doloremque alias, beatae voluptatem fugit minus obcaecati suscipit atque odio eum? Nesciunt distinctio nam rem.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12 my-5">
                        <img src={Hexa} alt="Hexagonal" width="65%"/>
                        <h4 className="benefit">Benefit 1</h4>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 my-5">
                        <img src={Hexa} alt="Hexagonal" width="65%"/>
                        <h4 className="benefit">Benefit 2</h4>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 my-5">
                        <img src={Hexa} alt="Hexagonal" width="65%"/>
                        <h4 className="benefit">Benefit 3</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};