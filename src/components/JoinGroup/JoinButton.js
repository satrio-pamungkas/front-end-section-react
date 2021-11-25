import { LinkGroup } from "../../api/LinkGroup";

export const JoinButton = () => {
    return (
        <>
            {LinkGroup().map((item) => (
            <a href={item.link}>
                <button className="btn btn-warning">
                    BERGABUNG GRUP WHATSAPP
                </button>
            </a>
            ))}
        </>
    )
}