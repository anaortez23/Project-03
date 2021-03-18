import React, { Component } from 'react';
import axios from 'axios'

class ProjectDetail extends Component {

    state = {
        project: {},
        edit: false,
        title: '',
        description: ''
    }

    async componentDidMount() {
        let res = await axios.get(`http://localhost:5000/api/projects/${this.props.match.params.projectId}`)
        this.setState({ project: res.data })
    }

    deleteThisProject = async () => {
        let res = await axios.delete(`http://localhost:5000/api/projects/${this.props.match.params.projectId}`)
        console.log(res)
        alert(res.data.message)
        this.props.history.push(`/project-list`)
    }

    blurDiv = async (e) => {
        console.log('bluurrrr', e.target.value, e.target.innerText, e.target.id, e.target)

        let res = await axios
            .put(`http://localhost:5000/api/projects/${this.props.match.params.projectId}`,
                { [e.target.id]: e.target.innerText }
            )

        this.setState({ edit: false })
    }




    render() {
        return (
            <div>

                <h1
                    id="title"
                    style={{ background: this.state.edit ? '#bbb' : '' }}
                    onBlur={this.blurDiv}
                    contentEditable={this.state.edit}>{this.state.project.title}</h1>
                <p id="description" style={{ background: this.state.edit ? '#bbb' : '' }} onBlur={this.blurDiv} contentEditable={this.state.edit}>{this.state.project.description}</p>
                <button onClick={() => this.setState({ edit: !this.state.edit })} >✏️ Edit </button>
                <button onClick={this.deleteThisProject} > ☠️ Delete ☠️</button>

            </div>
        );
    }
}

export default ProjectDetail;