import React from 'react'
import './Footer.scss'

export default function Footer() {
    return (
        <footer className="outFoot">
            <address className="footContaner">
                <h6 className="footerNameText">Langston Beckwith-Stanley</h6>
                <p className="footerLinks">
                    <a href="https://github.com/langstonBS" target="_blank" rel="noreferrer"> Github </a> -
                    <a href="https://www.linkedin.com/in/langston-beckwith-stanley/" target="_blank" rel="noreferrer"> LinkedIn </a>
                </p>
            </address>
        </footer>
    )
}
