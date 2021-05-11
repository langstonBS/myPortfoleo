import React from 'react'
import './Projects.scss'
import Project from '../Project/Project'


const projetData = [
    {
        title: "Memory Organizer",
        discription: 'Backend (Node.js, Express, MongoDB) for a full-stack app that provides a repository for users to upload photos and notes about their memories. All photos utilize the Google Cloud Vision API to auto-tag the images for increased searchability.',
        image: 'http://placekitten.com/g/200/300',
        usedTec: ["Google Cloud Vision", "Node.js", "Express", "MongoDB"],
        gitHubUrl: "https://github.com/MemoryOrganizer/memory-organizer-be",
        isLive: false,
        liveURL: ""
    },
    {
        title: "Project Spender",
        discription: 'Backend project to help people track their spending habits',
        image: 'http://placekitten.com/g/200/300',
        usedTec: ["SQL", "Express", "Node.js"],
        gitHubUrl: "https://github.com/Project-Spendr/Spendr-be-sql",
        isLive: false,
        liveURL: ""
    },
    {
        title: "Project Spender",
        discription: 'Florafile || Backend codebase. Holds all fetch calls to APIs, relevant routes, and a TopSearch model that seeds a database (Heroku deployed). The database logic is google-akin in that it returns to the user (on the frontend) suggestions based on popular searches/clicks.',
        image: 'http://placekitten.com/g/200/300',
        usedTec: ["Express", "Node.js"],
        gitHubUrl: "https://github.com/GOATDreamTeam/backend",
        isLive: true,
        liveURL: "https://florafile.netlify.app/"
    },
    {
        title: "Project Spender",
        discription: 'Florafile || Backend codebase. Holds all fetch calls to APIs, relevant routes, and a TopSearch model that seeds a database (Heroku deployed). The database logic is google-akin in that it returns to the user (on the frontend) suggestions based on popular searches/clicks.',
        image: 'http://placekitten.com/g/200/300',
        usedTec: ["Express", "Node.js"],
        gitHubUrl: "https://github.com/GOATDreamTeam/backend",
        isLive: true,
        liveURL: "https://florafile.netlify.app/"
    },
    {
        title: "Burning Suns",
        discription: 'Front End Material-UI react application that shows the user a star map based on location.',
        image: 'http://placekitten.com/g/200/300',
        usedTec: ["Material UI", "React.js"],
        gitHubUrl: "https://github.com/langstonBS/burning-suns-fr",
        isLive: true,
        liveURL: "https://burningsuns.herokuapp.com/"
    }

]

const Projcets = () => {
    return (
        <div className="box">
            {
                projetData.map(item => <Project {...item} />)
            }
        </div>
    )
}

export default Projcets
