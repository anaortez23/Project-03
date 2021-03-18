import React, { Component } from "react";
import axios from "axios";

class AddProject extends Component {
  state = {
    title: "",
    description: "",
  };

  handleChange = (e) => {
    // console.log(e.target.title, e.target.value, e.target.placeholder)
    this.setState({
      [e.target.name]: e.target.value, //title : The title of project or //description: The description of project
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log("The project title is:", this.state.title);
    console.log("The project Descriptions is:", this.state.description);
    let res = await axios.post(
      `http://localhost:5000/api/projects`,
      this.state,
      { withCredentials: true }
    );
    //ALOT HAPPENS BETWEEN THESE TWO LINES>>> WE GO TO THE BACKEND
    console.log(res.data);
    this.props.history.push(`/project-list`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Add Project</label>
        <input
          onChange={this.handleChange}
          name="title"
          type="text"
          placeholder="Enter title..."
        />
        <input
          onChange={this.handleChange}
          name="description"
          type="text"
          placeholder="Enter Description ..."
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default AddProject;
