import React from 'react'
import { NavLink } from "react-router-dom";
import './Navagation.css'


const NavStyle = {
    fontWeight: "bold",
    color: "red",
    textAlign: "center"
}



const Navagation = () => {
    return (
        <>
            <ul className="navContainer">
                <li className="NameElement" >
                    Langston's Portfolieo
                </li>
                <li>
                    <NavLink
                        className="NavElements"
                        exact to="/"
                        activeStyle={NavStyle}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="NavElements"
                        exact to="/About"
                        activeStyle={NavStyle}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink className="NavElements"
                        exact to="/Projects"
                        activeStyle={NavStyle}>
                        Projects
                    </NavLink>
                </li>
            </ul>
        </>
    );
}

export default Navagation
