import React from 'react'
import './Project.scss'

function Project(props) {
    return (
        <div class="innerBox">
            <article>
                <h2>{props.title}</h2>

                <p>{props.discription}</p>
                <ul>{props.usedTec.map(item => <li>{item}</li>)}</ul>
                <a href={props.gitHubUrl} target="_blank" rel="noreferrer">github</a>
                {props.isLive ? <a href={props.gitHubUrl} target="_blank" rel="noreferrer">github</a> :
                    ""}

            </article>
        </div>
    )
}



export default Project

