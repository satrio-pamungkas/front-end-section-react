import { LinkGroup } from "../../api/LinkGroup";

export const JoinButton = () => {
    return (
        <>
            {LinkGroup().map((item) => (
            <a href={item.link}>
                <div className="btn btn-warning">
                    Bergabung Grup WhatsApp
                </div>
            </a>
            ))}
        </>
    )
}