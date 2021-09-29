import React from 'react'
import { NavLink } from "react-router-dom";
import Style from './Navagation.scss'



const NavStyle = {
    fontWeight: "bold",
    backgroundColor: "red",
    textAlign: "center"
}

const lastLine = {
    backgroundColor: "border-right: .3rem solid black"
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
            </ul>
        </nav>
    );
}

export default Navagation
