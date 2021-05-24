import React from 'react'
import './Project.scss'

function Project(props) {
    return (

        <article class="innerBox">
            <h2>{props.title}</h2>
            {props.isImage ?
                <figure>
                    <img src={props.image} alt={props.title} />
                    <figcaption>{props.title}</figcaption>
                </figure> : ""}
            <p>{props.discription}</p>
            <ul>{props.usedTec.map(item => <li>{item}</li>)}</ul>
            <a href={props.gitHubUrl} target="_blank" rel="noreferrer">github</a>
            {props.isLive ? <a href={props.liveURL} target="_blank" rel="noreferrer">Live</a> :
                ""}

        </article>

    )
}



export default Project

