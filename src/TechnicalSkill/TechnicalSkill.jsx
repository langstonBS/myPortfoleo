import React, { Component } from 'react'
import Navagation from '../Navagation/Navagation'
import './TechicalSkill.css'

class TechnicalSkill extends Component {

    state = {
        section1: 'red',
        section2: 'yellow',
        section3: 'white',
        section4: 'red',
        section5: 'white',
        section6: 'yellow',
        section7: 'blue',
        section8: 'black',
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
                        TechnicalSkill
                    </h1>
                </section>
                <article className="technical_article">
                 
                    <table className="technical_paragraph_table">
                        <tbody>
                            <tr>
                                <td className="technical_paragraph">Javascript</td>
                                <td className="technical_paragraph">CSS</td>
                                <td className="technical_paragraph">React</td>
                                <td className="technical_paragraph">HTML</td>
                            </tr>
                            <tr>
                                <td className="technical_paragraph">SQL</td>
                                <td className="technical_paragraph">Jest</td>
                                <td className="technical_paragraph">Python</td>
                                <td className="technical_paragraph">Express</td>
                            </tr>
                            <tr>
                                <td className="technical_paragraph">Node.js</td>
                                <td className="technical_paragraph">Next.js</td>
                            </tr>
                        </tbody>
                    </table>
                </article>
                <button
                    onClick={(e) => this.handleClick(e, this.state.section1)}
                    style={{ backgroundColor: this.state.section1 }}
                    className="technical_section_1"
                    value='section1'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section2)}
                    style={{ backgroundColor: this.state.section2 }}
                    className="technical_section_2"
                    value='section2'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section3)}
                    style={{ backgroundColor: this.state.section3 }}
                    className="technical_section_3"
                    value='section3'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section4)}
                    style={{ backgroundColor: this.state.section4 }}
                    className="technical_section_4"
                    value='section4'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section5)}
                    style={{ backgroundColor: this.state.section5 }}
                    className="technical_section__5"
                    value='section5'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section6)}
                    style={{ backgroundColor: this.state.section6 }}
                    className="technical_section__6"
                    value='section6'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section7)}
                    style={{ backgroundColor: this.state.section7 }}
                    className="technical_section__7"
                    value='section7'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section9)}
                    style={{ backgroundColor: this.state.section9 }}
                    className="technical_section__9"
                    value='section9'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section10)}
                    style={{ backgroundColor: this.state.section10 }}
                    className="technical_section__10"
                    value='section10'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section11)}
                    style={{ backgroundColor: this.state.section11 }}
                    className="technical_section__11"
                    value='section11'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section12)}
                    style={{ backgroundColor: this.state.section12 }}
                    className="technical_section__12"
                    value='section12'>
                </button>
     
                <button
                    onClick={(e) => this.handleClick(e, this.state.section13)}
                    style={{ backgroundColor: this.state.section13 }}
                    className="technical_section__13"
                    value='section13'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section14)}
                    style={{ backgroundColor: this.state.section14 }}
                    className="technical_section__14"
                    value='section14'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section15)}
                    style={{ backgroundColor: this.state.section15 }}
                    className="technical_section__15"
                    value='section15'>
                </button>
            </div>
        </>
    )
    }
}

export default TechnicalSkill