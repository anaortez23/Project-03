import React, { Component } from 'react'

class Contact extends Component {

    state = {
        email: ''
    }

    componentDidMount() {
        //I could theoretically go to the backend and grab my email  and set it to state without rerendering
        //Axios.get(http://blahblahblah).then(res => ...
        setTimeout(() => {
            this.setState({
                email: 'niko.tzikas@ironhack.com'
            })
        }, 2500)

        console.log(this, "component mounted")
    }
    render() {

        //this.setState({ email: 'infinite loop' })  Dont do this 

        return (
            <>
                <h3>Contact</h3>
                <p>Email: {this.state.email}</p>
            </>
        )
    }

}

export default Contact