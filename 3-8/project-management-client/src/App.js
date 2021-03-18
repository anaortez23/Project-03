import React, { Component } from "react";
import ProjectList from "./components/ProjectList";
import Home from "./components/Home";
import AddProject from "./components/AddProject";
import ProjectDetail from "./components/ProjectDetail";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import { Switch, Link, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
class App extends Component {
  state = {
    loggedInUser: null,
  };
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/loggedin", { withCredentials: true })
      .then((res) => console.log(res.data));
  }
  render() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/project-list">Project List</Link>
          <Link to="/add-project">Add Project</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="login">Log In</Link>
        </nav>
        <div id="main">
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route
              exact
              path="/project-list"
              render={(props) => <ProjectList {...props} />}
            />
            <Route
              exact
              path="/add-project"
              render={(props) => <AddProject {...props} />}
            />
            <Route
              exact
              path="/detail/:projectId"
              render={(props) => <ProjectDetail {...props} />}
            />
            <Route
              exact
              path="/signup"
              render={(props) => <SignUp {...props} />}
            />
            <Route
              exact
              path="/login"
              render={(props) => <LogIn {...props} />}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
