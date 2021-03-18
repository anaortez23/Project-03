import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class ProjectList extends Component {

    state = {
        projects: []
    }

    componentDidMount() {
        // console.log('this happens on mount')
        axios
            .get(`http://localhost:5000/api/projects`)
            .then(res => {
                console.log(res.data)
                this.setState({ projects: res.data })
            })
    }

    deleteThisProject = async (id) => {
        console.log(id)
        let res = await axios.delete(`http://localhost:5000/api/projects/${id}`)
        let newList = [...this.state.projects].filter(eachProject => eachProject._id !== id)

        this.setState({ projects: newList })
    }

    showProjects = () => {
        return this.state.projects.map((eachProject, i) => {
            return (
                <li>
                    <Link to={`/detail/${eachProject._id}`} ><h2>{eachProject.title}</h2></Link>
                    <i>{eachProject.description}</i>
                    <br></br>
                    <button onClick={(e) => this.deleteThisProject(eachProject._id)} >😵 {eachProject._id}</button>
                </li>
            )
        })
    }

    render() {
        // console.log("this also happens on mount")
        return (
            <div className="projectlist">
                <h1>Project List</h1>
                {this.showProjects()}
            </div>
        );
    }
}

export default ProjectList;