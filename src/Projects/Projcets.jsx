import React from 'react'
import './Projects.css'
import Project from '../Project/Project'


const projetData = [
    {
        title: "project one",
        discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ea fuga maxime deleniti dicta itaque veniam doloribus et facilis dignissimos, provident ab aliquid debitis fugit doloremque culpa perferendis quod nesciunt.',
        image: 'http://placekitten.com/g/200/300',
        usedTec: ["usb", "otherShit", "node"],
        gitHubUrl: "https://github.com/langstonBS",
        isLive: true,
        liveURL: "https://github.com/langstonBS"
    },
    {
        title: "project one",
        discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ea fuga maxime deleniti dicta itaque veniam doloribus et facilis dignissimos, provident ab aliquid debitis fugit doloremque culpa perferendis quod nesciunt.',
        image: 'http://placekitten.com/g/200/300',
        usedTec: ["usb", "otherShit", "node"],
        gitHubUrl: "https://github.com/langstonBS",
        isLive: true,
        liveURL: "https://github.com/langstonBS"
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
