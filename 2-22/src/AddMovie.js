import React, { Component } from 'react';
import { movies } from './movies'

class AddMovie extends Component {
    state = {
        title: "...",
        director: '...',
        movies: movies,
        randomColor: '',
        show: true

    }
    handleChange = (e) => {
        this.setState({ //setState takes some time 
            [e.target.name]: e.target.value
        }, () => { {/*Accepts callback*/ } })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit movie')
        console.log(this.state)
        let copyMovies = [...this.state.movies]
        copyMovies.unshift({
            director: this.state.director,
            title: this.state.title
        })
        this.setState({ movies: copyMovies })

    }

    deleteMovie = (movie, i) => {
        console.log('delete movie??', movie, i)
        let movies = [...this.state.movies]
        movies.splice(i, 1)
        this.setState({
            movies
        })
    }

    showMovies = () => {
        return this.state.movies.map((eachMovie, i) => {
            return (
                <li key={i} style={{ background: "#" + ((1 << 24) * Math.random() | 0).toString(16) }}>
                    <span>{eachMovie.title}</span>
                    <span>{eachMovie.director}</span>
                    <button onClick={(e) => this.deleteMovie(eachMovie, i)}>Delete</button>
                </li>
            )
        })
    }

    sortByName = () => {
        let copyMovies = [...this.state.movies]
        copyMovies.sort((a, b) => b.title.localeCompare(a.title))
        this.setState({ movies: copyMovies })
    }

    toggleForm = () => {

        this.setState({ show: !this.state.show })

        //this.setState({ show: this.state.show ? false : true })

        // if (this.state.show === false) {
        //     this.setState({ show: true })
        // } else {
        //     this.setState({ show: false })
        // }
    }

    filterMovies = () => {
        let copyMovies = [...this.state.movies]
        let filterMovies = copyMovies.filter(eachMovie => eachMovie.title.includes('The'))
        this.setState({ movies: filterMovies })
    }

    render() {
        return (
            <>


                <h3>Title: {this.state.title}</h3>
                <h3>Director: {this.state.director}</h3>

                {this.state.show && (
                    <form onSubmit={this.handleSubmit}>
                        {/* <form hidden={this.state.show} onSubmit={this.handleSubmit}> */}
                        <input type="text" name="title" placeholder="title" onChange={this.handleChange} />

                        <input type="text" name="director" placeholder="director" onChange={this.handleChange} />

                        <button>Add Movie</button>
                    </form>)}

                < br />

                <button onClick={this.toggleForm} >Toggle Form</button>

                <button onClick={this.filterMovies} >Filter Movies</button>

                <button onClick={this.sortByName}>Sort Movies</button>


                <ul>

                    {this.showMovies()}


                    {/* ALTERNATIVE OPTIONS {showTheMovies()}  <ShowDeesMovies /> */}
                </ul>

            </>
        );
    }
}







// function showTheMovies() {
//     return 'show THE movies'
// }

// function ShowDeesMovies() {
//     return 'show DEES movies'
// }


export default AddMovie;



