import React, { Component } from 'react'
import Navagation from '../Navagation/Navagation'
import './Writing.css'

class Writing extends Component {
    state = {
        section1: 'red',
        section2: 'yellow',
        section3: 'yellow',
        section4: 'blue',
        section5: 'white',
        section6: 'white',
        section7: 'yellow',
        section8: 'white',
        section9: 'white',
        section10: 'blue',
        section11: 'red',
        section12: 'white'
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

    render () {
    return (
        <>
            <Navagation />
            <div className="containerWriting">



                <section className="writing_title">
                    <h1 className="writing_title_Text">
                        Who Am I
                    </h1>
                </section>
                <article className="writing_article">
                    <p className="paragraphWriting">
                        I have a philosophy that values open communication and community collaboration to solves complex coding problems.
                        Recently I finished a teaching assisting at a dynamic Professional Software Developer Program.
                        I learned how to cultivate a successful learning environment that empowers all voices in the (Zoom) room.
                        I observed firsthand how sustained and progressive success can only be obtained through open community and strong teamwork.
                    </p>
                </article>
                
                <button
                    onClick={(e) => this.handleClick(e, this.state.section1)}
                    style={{ backgroundColor: this.state.section1 }}
                    className="writing_section_1"
                    value='section1'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section2)}
                    style={{ backgroundColor: this.state.section2 }}
                    className="writing_section_2"
                    value='section2'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section3)}
                    style={{ backgroundColor: this.state.section3 }}
                    className="writing_section_3"
                    value='section3'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section4)}
                    style={{ backgroundColor: this.state.section4 }}
                    className="writing_section_4"
                    value='section4'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section5)}
                    style={{ backgroundColor: this.state.section5 }}
                    className="writing_section_5"
                    value='section5'>
                </button>
                
                <button
                    onClick={(e) => this.handleClick(e, this.state.section6)}
                    style={{ backgroundColor: this.state.section6 }}
                    className="writing_section_6"
                    value='section6'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section7)}
                    style={{ backgroundColor: this.state.section7 }}
                    className="writing_section_7"
                    value='section7'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section8)}
                    style={{ backgroundColor: this.state.section8 }}
                    className="writing_section_8"
                    value='section8'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section9)}
                    style={{ backgroundColor: this.state.section9 }}
                    className="writing_section_9"
                    value='section9'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section10)}
                    style={{ backgroundColor: this.state.section10 }}
                    className="writing_section_10"
                    value='section10'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section11)}
                    style={{ backgroundColor: this.state.section11 }}
                    className="writing_section_11"
                    value='section11'>
                </button>

                <button
                    onClick={(e) => this.handleClick(e, this.state.section12)}
                    style={{ backgroundColor: this.state.section12 }}
                    className="writing_section_12"
                    value='section12'>
                </button>
            </div>
        </>
    )
}
}

export default Writing