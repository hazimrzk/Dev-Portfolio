import projectData from "../data/projectData.js"

export default function Projects() {

    return (
        <>
            <div className="container-main">
                {projectData.map((proj) => {
                    return (
                        <><ProjCard desc={proj.desc} img={proj.img} /></>
                    )
                })}
            </div>
        </>
    )
}

function ProjCard({ desc, img }) {

    return (
        <div className={"container-projects project-" + desc.projectNum}>
            <div className="project-title">
                <ProjImage props={img} />
                <ProjDesc props={desc} />
            </div>
        </div>
    )
}

function ProjImage(props) {

    let images = props.props

    const imageElements = images.map((img) => {
        return (
            <><img className={"hidden project-image image-" + img.class} src={"assets/images/" + img.src} alt=""></img></>
        )
    })

    return (
        <>
            <div className="project-title-image">
                {imageElements}
            </div>
        </>
    )
}

function ProjDesc(props) {

    let techs = props.props.tech
    let roles = props.props.role
    let type = props.props.type
    let title = props.props.name
    let summary = props.props.summary
    let links = props.props.links

    const techLists = techs.map((lang) => {
        return (
            <>
                <span className='tech-icon'>
                    <img src={"assets/icons/" + lang + ".svg"} alt={lang}></img>
                    <span>{lang}</span>
                </span>
            </>
        )
    })

    const roleElements = roles.map((role) => {
        if (role.includes("(END)")) { return (<><span>{role.slice(0, -5)}</span></>) }
        return (
            <>
                <span>{role}</span>
                <span>&nbsp; • &nbsp;</span>
            </>
        )
    })

    return (
        <>
            <div className="project-title-description">
                <h6 className="hidden">{type}</h6>
                <h2 className="hidden">{title}</h2>
                <div className="project-tech hidden">
                    {techLists}
                </div>
                <div className="project-role hidden">
                    {roleElements}
                </div>
                <p className="hidden">{summary}</p>
                <div className="project-actions hidden">
                    <a href={links[0]}><button className="secondary-button">View Demo</button></a>
                    <a href={links[1]}><button className="primary-button">Github Link</button></a>
                </div>
            </div>
        </>
    )

}