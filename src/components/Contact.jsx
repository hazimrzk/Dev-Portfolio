import abtData from "../data/aboutData"

export default function Contact() {

    return (
        <>
            <div className="container-main container-contacts">
                <h3 className="hidden">Send a message!</h3>
                <p className="hidden">sHave any inquiries? Don't hesitate to <strong>reach out</strong>.</p>
                <span className="contacts-icons hidden">
                    {abtData.contact.map((item) => {
                        return (
                            <>
                                <a href={item.link}><i className={item.icon} aria-hidden="true"></i></a>
                            </>
                        )
                    })}
                </span>
            </div>
        </>
    )
}