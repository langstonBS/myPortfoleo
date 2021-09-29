import React from 'react'
import './Project.scss'

function Project(props) {
    return (
        <article className="innerBox">
            <div className="project_section_1"></div>
            <div className="project_section_2"></div>
            <div className="title"><h2>{props.title}</h2></div>
            {props.isImage ?
                <figure className="immage_box">
                    <img src={props.image} alt={props.title} />
                    <figcaption>{props.title}</figcaption>
                </figure> : ""}
            <section className="discript_project"><p >{props.discription}</p></section>
            <section className="used_tech"><ul>{props.usedTec.map(item => <li key={Math.random().toString(36).substr(2, 9)} > {item}</li>)}</ul></section>
            <section className="github"><h5><a href={props.gitHubUrl} target="_blank" rel="noreferrer"> github</a>
                {props.isLive ? <a href={props.liveURL} target="_blank" rel="noreferrer">  Live</a> :
                    ""
                }</h5></section>
            <div className="project_section_3"></div>
            <div className="project_section_4"></div>
            <div className="project_section_5"></div>
            <div className="project_section_6"></div>
        </article>



    )
}



export default Project

