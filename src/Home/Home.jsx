import React from 'react'
import './Home.scss'



const Home = () => {
    return (
        <div className="outerGrid">

            <section className="introduction">
                <h1>Welcome</h1>
                <p>I am a Software Engineer who thrives in collaborative and dynamic teams and values great communication, makes sure everyone's voice is heard, and brings great empathy to any environment.</p>
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
                <p>I have a coding philosophy that values communication and community to solve complex problems. Having just finished being a teaching assistant for a coding school, I have learned how to cultivate an environment that empowers all voices in the (Zoom) room. I also saw firsthand how success can only be attained through open communication.</p>
                <p>I’m currently working on a project to better reach the disabled community, who we are interviewing to guide our design using semantic HTML. We are using the most up-to-date React practices and the latest testing libraries to ensure that our website is fully accessible for everyone. Using these skills, along with new ones I am constantly obtaining, I am sure to learn through my life. I want to bring the same focus on community by using open communication and accessibility driven development to future projects.</p>
            </section>

        </div>
    )
}

export default Home
