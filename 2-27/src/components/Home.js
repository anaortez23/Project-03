import React, { Component } from 'react'

class Home extends Component {

    componentDidMount() {
        console.log(this, "component mounted")
    }
    render() {
        return (
            <h3>Home</h3>
        )
    }

}

export default Home