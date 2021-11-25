import { useState, useEffect } from "react";

export const LinkGroup = () => {
    const [link, setLink] = useState([]);

    useEffect(() => {
        fetch('https://api.sectionrpl.com/whatsapp')
            .then((response) => response.json())
            .then((data) => {
                setLink(data.data.prodi);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return link;
}