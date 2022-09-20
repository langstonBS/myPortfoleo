import React, { Component } from 'react'
import Navagation from '../Navagation/Navagation'
import './Learning.css'

class Learning extends Component {

    state = {
        section1: 'red',
        section2: 'yellow',
        section3: 'white',
        section4: 'blue',
        section5: 'white',
        section6: 'yellow',
        section7: 'yellow',
        section8: 'white',
        section9: 'white',
        section10: 'blue',
        section11: 'red',
        section12: 'red',
        section13: 'red',
        section14: 'blue',
        section15: 'blue'
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
        <>
            <Navagation />
            <div className="containerWriting">



                <section className="learning_title">
                    <h1 className="learning_title_text">
                        Learning
                    </h1>
                </section>
                <article className="learning_article">
                    <ul className="learning_paragraph">
                        <li><p className="learning_paragraph">Rust</p></li>
                        <li><p className="learning_paragraph">React Native</p></li>
                        <li><p className="learning_paragraph">Styling (css, css3 and scss sass)</p></li>
                        <li> <p className="learning_paragraph">Graph QL</p></li>
                        <li> <p className="learning_paragraph">TypeScript</p></li>
                        <li> <p className="learning_paragraph">Java</p></li>
                    </ul>
                </article>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section1)}
                    style={{ backgroundColor: this.state.section1 }}
                    className="learning_section_1"
                    value='section1'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section2)}
                    style={{ backgroundColor: this.state.section2 }}
                    className="learning_section_2"
                    value='section1'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section3)}
                    style={{ backgroundColor: this.state.section3 }}
                    className="learning_section_3"
                    value='section3'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section4)}
                    style={{ backgroundColor: this.state.section4 }}
                    className="learning_section_4"
                    value='section4'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section5)}
                    style={{ backgroundColor: this.state.section5 }}
                    className="learning_section_5"
                    value='section5'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section6)}
                    style={{ backgroundColor: this.state.section6 }}
                    className="learning_section_6"
                    value='section6'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section7)}
                    style={{ backgroundColor: this.state.section7 }}
                    className="learning_section_7"
                    value='section7'>
                </button>


                <button
                    onClick={(e) => this.handleClick(e, this.state.section9)}
                    style={{ backgroundColor: this.state.section9 }}
                    className="learning_section_9"
                    value='section9'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section10)}
                    style={{ backgroundColor: this.state.section10 }}
                    className="learning_section_10"
                    value='section10'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section11)}
                    style={{ backgroundColor: this.state.section11 }}
                    className="learning_section_11"
                    value='section11'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section12)}
                    style={{ backgroundColor: this.state.section12 }}
                    className="learning_section_12"
                    value='section12'>
                </button>
     
                <button
                    onClick={(e) => this.handleClick(e, this.state.section13)}
                    style={{ backgroundColor: this.state.section13 }}
                    className="learning_section_13"
                    value='section13'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section14)}
                    style={{ backgroundColor: this.state.section14 }}
                    className="learning_section_14"
                    value='section14'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section15)}
                    style={{ backgroundColor: this.state.section15 }}
                    className="learning_section_15"
                    value='section15'>
                </button>
            </div>
        </>
    )

}}

export default Learning
