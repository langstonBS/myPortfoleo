import React from 'react'
import { NavLink } from "react-router-dom";
import Style from './Navagation.scss'



const NavStyle = {
    fontWeight: "bold",
    backgroundColor: "red",
    textAlign: "center"
}




const Navagation = () => {
    return (
        <nav className={Style.Navagation}>
            <ul className="navContainer">
                <li className="nameElement" >
                    Langston's Portfolio
                </li>
                <li>
                    <NavLink
                        className="navElements"
                        exact to="/"
                        activeStyle={NavStyle}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className="navElements"
                        exact to="/Projects"
                        activeStyle={NavStyle}
                    >
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink className="navElements"
                        exact to="/writing"
                        activeStyle={NavStyle}>
                        Philosophy
                    </NavLink>
                </li>
                <li>
                    <NavLink className="navElements"
                        exact to="/learning"
                        activeStyle={NavStyle}>
                        Learning
                    </NavLink>
                </li>
                <li>
                    <NavLink className="navElements"
                        exact to="/resume"
                        activeStyle={NavStyle}>
                        Resume
                    </NavLink>
                </li>
                <li>
                    <NavLink className="navElements"
                        exact to="/technical"
                        activeStyle={NavStyle}>
                        Technical Skill
                    </NavLink>
                </li>

            </ul>
        </nav>
    );
}

export default Navagation
