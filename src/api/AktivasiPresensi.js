import { useState, useEffect } from "react";

export const AktivasiPresensi = () => {
    const [show, setShow] = useState([]);

    useEffect(() => {
        fetch('https://api.sectionrpl.com/aktivasi')
            .then((response) => response.json())
            .then((data) => {
                setShow(data.data[0].status);
                console.log(data.data[0].status);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    return show;
}