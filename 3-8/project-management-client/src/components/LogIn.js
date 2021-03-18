import React, { Component } from "react";
import axios from "axios";

class LogIn extends Component {
state = {
    username: "",
    password: "",
};

createNewUser = (e) => {
    e.preventDefault();
    console.log(this);

    axios.post("http://localhost:5000/api/login", this.state)
    .then(console.log)
    .catch(console.error);
};

handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
};

render() {
    return (
    <div>
        <form onSubmit={this.createNewUser}>
        <input
            onChange={this.handleChange}
            name="username"
            type="text"
            placeholder="Username"
        />
        <br />
        <input
            onChange={this.handleChange}
            name="password"
            type="password"
            placeholder="Password"
        />
        <button>Log In</button>
        </form>
    </div>
    );
}
}

export default LogIn;
