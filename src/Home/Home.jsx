import React from 'react'
import './Home.scss'
import ScrollAnimation from 'react-animate-on-scroll';


const Home = () => {
    return (
        <div className="outerGrid">

            <section className="introduction">
                <h1>Welcom To Langstons Land</h1>
                <p>A portfoleo Deticated to Langston Becwith-Stanley and all things realated to Langston and Langstons Coding </p>
            </section>



            <section className="knownSkills">
                <h2> Known Skills</h2>
                <ul className="listClass">
                    <li>
                    </li>
                    <li>
                        node.js
                    </li>
                    <li>
                        MongoDB
                    </li>
                    <li>
                        SQL
                    </li>
                    <li>
                        React
                    </li>
                    <li>
                        css
                    </li>
                    <li>
                        Postgress
                    </li>
                </ul>
            </section>

            <section className="learningSkills">
                <h2> Learning</h2>
                <ul>
                    <li>
                        React Native
                    </li>
                    <li>
                        Styling (css, css3 and scss sass)
                    </li>
                </ul>
            </section>
            <section className="aboutMe">
                <h2>Who Am I</h2>
                <p>Software Engineer who thrives in collaborative and dynamic teams who values great communication,
                makes sure everyone's voice is heard, and brings great empathy to any environment. Loves slaying
                code in React and able to bring remote cohesiveness to any dev environment.
                </p>
            </section>

        </div>
    )
}

export default Home
