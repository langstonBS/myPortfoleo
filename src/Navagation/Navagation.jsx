import React from 'react'
import { NavLink } from "react-router-dom";
import Style from './Navagation.scss'



const NavStyle = {
    fontWeight: "bold",
    color: "yellow",
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
                        activeStyle={NavStyle}>
                        Projects
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navagation
