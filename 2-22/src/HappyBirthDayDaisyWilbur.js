import React, { Component } from 'react'
import { Cow, Pig } from './Moo'

/**class components */
class AddMovie extends Component {

    state = {
        daisyAge: 1,
        wilburAge: 2
    }

    addNewYear = () => {
        console.log("HAPPY BIRTHDAY!!!")
        this.setState({
            daisyAge: this.state.daisyAge + 1,
            wilburAge: this.state.wilburAge + 1
        })
        // this.state.daisyAge = newAge  NOPE
    }

    randNum = () => Math.random() * 255


    render() {
        return (
            <div style={{ background: `rgb(${this.randNum()}, ${this.randNum()}, ${this.randNum()})` }}>


                <button onClick={this.addNewYear}>Happy Birthday!</button>
                <Cow name="Daisy" age={this.state.daisyAge} />
                <Pig name="Wilbur" age={this.state.wilburAge} />
            </div>
        )
    }
}






export default AddMovie