import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './Home.css'



class Home extends Component {

    state = {
        section2: 'white',
        section3: 'red',
        section4: 'white',
        section5: 'blue',
        section6: 'red',
        section7: 'white',
        section8: 'white',
        section9: 'white',
        section10: 'blue',
        section11: 'white',
        section12: 'red',
        section13: 'white',
        section14: 'blue',
        section15: 'yellow',
        section16: 'white',
        section18: 'blue',
        section20: 'white',
        section21: 'yellow',
        section22: 'blue',
        section24: 'blue',
        section25: 'yellow',
        section26: 'red',
        section27: 'blue',
        section28: 'white',
        section29: 'red',
        section31: 'yellow',
        section32: 'white',
        section33: 'white'
    }


    handleClick(e, color) {

        const newState = e.currentTarget.value;
        if (color === 'white') {
            this.setState({ [newState]: 'blue' })
        }
        if (color === 'blue') {
            this.setState({ [newState]: 'yellow' })
        }
        if (color === 'yellow') {
            this.setState({ [newState]: 'red' })
        }
        if (color === 'red') {
            this.setState({ [newState]: 'white' })
        }


    }


    render() {

        return (
            <div className="container">
                <button
                    onClick={(e) => this.handleClick(e, this.state.section2)}
                    style={{ backgroundColor: this.state.section2 }}
                    className="section-2"
                    value='section2'>
                </button>
                <button
                    onClick={(e) => this.handleClick(e, this.state.section3)}
                    style={{ backgroundColor: this.state.section3 }}
                    className="section-3"
                    value='section3'>
                </button>
                <button
                    onClick={(e) => this.handleClick(e, this.state.section4)}
                    style={{ backgroundColor: this.state.section4 }}
                    className="section-4"
                    value='section4'>
                </button>
                <button
                    onClick={(e) => this.handleClick(e, this.state.section5)}
                    style={{ backgroundColor: this.state.section5 }}
                    className="section-5"
                    value='section5'>
                </button>
                <button
                    onClick={(e) => this.handleClick(e, this.state.section6)}
                    style={{ backgroundColor: this.state.section6 }}
                    className="section-6"
                    value='section6'>
                </button>
                <button
                    onClick={(e) => this.handleClick(e, this.state.section7)}
                    style={{ backgroundColor: this.state.section7 }}
                    className="section-7"
                    value='section7'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section9)}
                    style={{ backgroundColor: this.state.section9 }}
                    className="section-9"
                    value='section9'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section11)}
                    style={{ backgroundColor: this.state.section11 }}
                    className="section-11"
                    value='section11'>
                </button>
                <button
                    onClick={(e) => this.handleClick(e, this.state.section12)}
                    style={{ backgroundColor: this.state.section12 }}
                    className="section-12"
                    value='section12'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section13)}
                    style={{ backgroundColor: this.state.section13 }}
                    className="section-13"
                    value='section13'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section14)}
                    style={{ backgroundColor: this.state.section14 }}
                    className="section-14"
                    value='section14'>
                </button>
                <button
                    onClick={(e) => this.handleClick(e, this.state.section15)}
                    style={{ backgroundColor: this.state.section15 }}
                    className="section-15"
                    value='section15'>
                </button>
                <button
                    onClick={(e) => this.handleClick(e, this.state.section15)}
                    style={{ backgroundColor: this.state.section15 }}
                    className="section-15"
                    value='section15'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section18)}
                    style={{ backgroundColor: this.state.section18 }}
                    className="section-18"
                    value='section18'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section20)}
                    style={{ backgroundColor: this.state.section20 }}
                    className="section-20"
                    value='section20'>
                </button>
                <button
                    onClick={(e) => this.handleClick(e, this.state.section21)}
                    style={{ backgroundColor: this.state.section21 }}
                    className="section-21"
                    value='section21'>
                </button>
                <button
                    onClick={(e) => this.handleClick(e, this.state.section22)}
                    style={{ backgroundColor: this.state.section22 }}
                    className="section-22"
                    value='section22'>
                </button>
                <button
                    onClick={(e) => this.handleClick(e, this.state.section23)}
                    style={{ backgroundColor: this.state.section23 }}
                    className="section-23"
                    value='section23'>
                </button>
                <button
                    onClick={(e) => this.handleClick(e, this.state.section24)}
                    style={{ backgroundColor: this.state.section24 }}
                    className="section-24"
                    value='section24'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section25)}
                    style={{ backgroundColor: this.state.section25 }}
                    className="section-25"
                    value='section25'>
                </button>


                <button
                    onClick={(e) => this.handleClick(e, this.state.section26)}
                    style={{ backgroundColor: this.state.section26 }}
                    className="section-26"
                    value='section26'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section27)}
                    style={{ backgroundColor: this.state.section27 }}
                    className="section-27"
                    value='section27'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section29)}
                    style={{ backgroundColor: this.state.section29 }}
                    className="section-29"
                    value='section29'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section30)}
                    style={{ backgroundColor: this.state.section30 }}
                    className="section-30"
                    value='section30'>
                </button>
                <button
                    onClick={(e) => this.handleClick(e, this.state.section31)}
                    style={{ backgroundColor: this.state.section31 }}
                    className="section-31"
                    value='section31'>
                </button>
                <button
                    onClick={(e) => this.handleClick(e, this.state.section32)}
                    style={{ backgroundColor: this.state.section32 }}
                    className="section-32"
                    value='section32'>
                </button>
                <button
                    onClick={(e) => this.handleClick(e, this.state.section33)}
                    style={{ backgroundColor: this.state.section33 }}
                    className="section-33"
                    value='section33'>
                </button>

                <div className="section-8"><h1 className="titleClassMain">Langston Beckwith-Stanley</h1><p>Software Engineer</p></div>
                <Link to="/projects" className="section-10"> <p>Projects </p></Link>
                <Link to="/writing" className="section-16" onMouseOver={this.handleMouseOver} Style={{ backgroundColor: this.state.bgColor }}><p>Philosophy</p></Link>

                <a href="https://drive.google.com/file/d/1UlsdyaC8GP0OKb9kWJhCN-HjPmP2k2Yw/view?usp=sharing"
                    target="_Blank"
                    className="section-19"
                    rel="noreferrer"
                >
                    Resume
                </a>

                <a href="https://www.linkedin.com/in/langston-beckwith-stanley/"
                    target="_Blank"
                    className="section-23"
                    rel="noreferrer"
                >
                    <p>LinkedIn</p>
                </a>

                <a href="https://github.com/langstonBS/"
                    className="section-28"
                    target="_Blank"
                    rel="noreferrer"
                ><p>Github</p></a>
                <Link to="/technical" className="section-17"><p>Technical Skills</p></Link>
                <Link to="/learning" className="section-30"><p>Learning</p></Link>
            </div >
        )
    }
}

export default Home
