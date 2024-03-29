import React from 'react'
import './Projects.scss'
import Navagation from '../Navagation/Navagation'
import Project from '../Project/Project'


const projectData = [
    {
        title: "Memory Organizer",
        discription: 'Memories is a back-end project designed for users to create a personal journal, including photos.  A week-long project completed remotely with four developers. This project allowed a user to search journal entries by text or keywords provided by Google Vision API.  I created the routes and a service that sends the photo to Google Vision API and reseves the data back.',
        isImage: false,
        image: 'http://placekitten.com/g/200/300',
        usedTec: ["Google Cloud Vision", "Node.js", "Express", "MongoDB"],
        gitHubUrl: "https://github.com/MemoryOrganizer/memory-organizer-be",
        isLive: false,
        liveURL: ""
    },
    {
        title: "Project Spender",
        discription: 'Backend project to help people track their spending habits I created the backend for Spender in SQL',
        isImage: false,
        image: 'http://placekitten.com/g/200/300',
        usedTec: ["SQL", "Express", "Node.js"],
        gitHubUrl: "https://github.com/Project-Spendr/Spendr-be-sql",
        isLive: false,
        liveURL: ""
    },
    {
        title: "Night Sky",
        discription: 'Night Sky finds constellations based on location and allows the user to save personal notes tied to them.  I collaborated with a team of four software developers remotely to build, design, and create the application.  I design the front-end using Material-UI.',
        isImage: false,
        image: 'http://placekitten.com/g/200/300',
        usedTec: ["Material UI", "React.js"],
        gitHubUrl: "https://github.com/langstonBS/burning-suns-fr",
        isLive: true,
        liveURL: "https://burningsuns.herokuapp.com/"
    },
    {
        title: "Rapid Health",
        discription: 'Front end development focusing heavily on accessibility design.  The Project uses the most up to date react practices Material-UI and the latest testing libraries to ensure that our website is fully accessible for everyone.  project is now defunct.',
        isImage: false,
        image: 'http://placekitten.com/g/200/300',
        usedTec: ["Material UI", "React.js", "Graph QL", "Dreamwever"],
        gitHubUrl: "https://github.com/langstonBS",
        isLive: false,
        liveURL: "https://burningsuns.herokuapp.com/"
    },
    {
        title: "Florifile",
        discription: 'Florifile is a website that informs the user about plants. I developed the backend which holds all fetch calls to the API and seeds the database with the relevant return data from the API. I created a top search method that returns to the user suggestions based on popular searches/clicks',
        isImage: false,
        image: 'http://placekitten.com/g/200/300',
        usedTec: ["React.js", "Node.js", "MongoDB"],
        gitHubUrl: "https://github.com/GOATDreamTeam",
        isLive: false,
        liveURL: "https://burningsuns.herokuapp.com/"
    }

]

const Projcets = () => {
    return (
        <>
            <Navagation />
            <div className="box">
                {
                    projectData.map(item => <Project key={Math.random()}  {...item} />)
                }
            </div>
        </>
    )
}

export default Projcets
