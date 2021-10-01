import React from 'react'
import Navagation from '../Navagation/Navagation'
import './Resume.css'


export default function Resume() {
    return (
        <>
            <Navagation />
            <div className="containerResume">
                <div className="resume_section_1"></div>
                <div className="resume_section_2"></div>
                <div className="resume_section_3"></div>
                <div className="resume_section_4"></div>
                <div className="resume_section_5"></div>
                <div className="resume_section_6"></div>
                <div className="resume_section_7">

                </div>
                <div className="resume_section_8"></div>
                <div className="resume_section_9"></div>
                <div className="resume_section_10"></div>
                <section className="resume_section_11">
                    <article>
                        <h3 className="resume_title_type">SOFTWARE DEVELOPER • FREELANCE </h3>
                        <h4 className="resume_section_type">Portland, OR • 2020 – Present</h4>
                        <p className="resume_paragraph_type">Recruited to build features for a website for recently physically disabled people. Developed using React, Material UI and the latest React testing library.</p>
                        <ul className="resume_list_type">
                            <li>Built post and comment components for the site in React; streamlined code reviews by implementing GitHub continuous integration on all development and production repositories.</li>
                            <li>Instrumental in planning, researching, and teaching core W3C principles of accessibility design to volunteer developers.</li>
                            <li>Created project-specific accessibility guidance documents for the development team and led introductory accessibility design sessions for volunteers.</li>
                            <li>Recruited and onboarded three volunteer developers to the project team over two weeks.</li>
                        </ul>
                    </article>
                    <article>
                        <h3 className="resume_title_type"> SOFTWARE DEVELOPER TEACHING ASSISTANT • ALCHEMY CODE LAB </h3>
                        <h4 className="resume_section_type">Portland, OR • 2020 – 2021 </h4>
                        <p className="resume_paragraph_type">Under the supervision of the lead instructor, taught JavaScript Node.js, React, and PostgreSQL to a group of five students during a six-month software development bootcamp.</p>
                        <ul className="resume_list_type">

                            <li>Graded, debugged, and provided feedback on Node.js, React, and SQL lessons; completed code review for student projects through GitHub pull requests.</li>
                            <li>Refined the instruction process to assist with online-only classes by utilizing smaller TA groups in the first week to mirror an in-person table discussion.</li>
                            <li>Taught PostgreSQL with one-week lead time by analyzing documentation, building small projects, and sandboxing code.</li>
                            <li>Developed documentation structure to detail and archive all Alchemy projects from 2019 to the present.</li>
                        </ul>
                    </article>
                    <article>
                        <h3 className="resume_title_type"> COMPUTER SCIENCE INTERN • PORTLAND STATE COMPUTER ACTION TEAM </h3>
                        <h4 className="resume_section_type">Portland, OR • 2016 – 2017 </h4>
                        <p className="resume_paragraph_type">Maintained computer systems in the Computer Science and Engineering Department at Portland State University</p>
                        <ul className="resume_list_type">
                            <li>Trained and advised users during computer setup and campus network onboarding.</li>
                            <li>Updated and maintained Red Hat servers and Ubuntu computer labs.</li>
                        </ul>
                    </article>

                </section>
                <div className="resume_section_12"></div>
                <div className="resume_section_13"></div>
                <div className="resume_section_14"></div>
                <div className="resume_section_15"></div>
                <div className="resume_section_16"></div>
            </div>
        </>
    )
}
