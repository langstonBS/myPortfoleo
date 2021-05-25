import React from 'react'
import './Home.scss'



const Home = () => {
    return (
        <div className="outerGrid">

            <section className="introduction">
                <h1>Welcome</h1>
                <p>I am a Software Developer who thrives in a collaborative environment working with a dynamic team.  I value open communication which supports and empowers everyone on the team to make their fullest contribution.  I am empathetic and supportive of my coworkers.</p>
            </section>



            <section className="knownSkills">
                <h2>Known Skills</h2>
                <ul className="listClass">

                    <li>
                        Node.js
                    </li>
                    <li>
                        MongoDB
                    </li>
                    <li>
                        Semantic HTML
                    </li>
                    <li>
                        React
                    </li>
                    <li>
                        Styling (css, css3 and scss sass)
                    </li>
                    <li>
                        PostgreSQL
                    </li>
                </ul>
            </section>

            <section className="learningSkills">
                <h2> Learning</h2>
                <ul>
                    <li>
                        Rust
                    </li>
                    <li>
                        React Native
                    </li>
                    <li>
                        Styling (css, css3 and scss sass)
                    </li>
                    <li>
                        Graph QL
                    </li>
                </ul>
            </section>
            <section className="aboutMe">
                <h2>Who Am I</h2>
                <p>I have a philosophy that values open communication and community collaboration to solves complex coding problems.  Recently I finished a teaching assisting at a dynamic Professional Software Developer Program.  I learned how to cultivate a successful learning environment that empowers all voices in the (Zoom) room.  I observed firsthand how sustained and progressive success can only be obtained through open community and strong teamwork.</p>
                <p>I am currently working on a project to develop a web portal to host instructional videos for recently disabled individuals.  Interviews with members of the disabled community are being used to guide design choices and proper development techniques to ensure accessibility. The team is using the most up to date React practices and the latest testing libraries to ensure usability and accessibility.  </p>
            </section>

        </div>
    )
}

export default Home
