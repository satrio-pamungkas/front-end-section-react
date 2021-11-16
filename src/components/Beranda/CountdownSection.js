import Wave from "../../assets/img/wave.svg";
import Shapes from "../../assets/img/CountdownShapes.svg";
import Countdown from "react-countdown";

const date = new Date('December 4, 2021 09:30:00');

const renderer = ({ days, hours, minutes, seconds }) => {
    return (
        <>
            <div className="col-3">
                <h1 className="hari">{days}</h1>
            </div>
            <div className="col-3">
                <h1 className="jam">{hours}</h1>
            </div>
            <div className="col-3">
                <h1 className="menit">{minutes}</h1>
            </div>
            <div className="col-3">
                <h1 className="detik">{seconds}</h1>
            </div>
        </>
    );
}

export const CountdownSection = () => {
    return (
        <div className="col countdown">
            <img className="wave" src={Wave} alt="it just a wave"></img>
            <div className="container section">
                <h2>Hitung Mundur Menuju SECTION</h2>
                <div className="row shapes">
                    <img src={Shapes} alt="shapes"></img>
                    <Countdown date={date} renderer={renderer} />
                </div>
            </div>
        </div>
    );
}