import React, { Component } from 'react'


const songsFromDB = [
    { title: "Thriller", id: 1, artist: 'A' },
    { title: "Dirty Diana", id: 2, artist: 'B' },
    { title: "WAP", id: 3, artist: 'C' },
    { title: "Te Bote", id: 4, artist: 'D' },
    { title: "Thats what friends are for", id: 5, artist: 'E' },
]



class Song extends Component {

    state = {
        song: {}
    }

    componentWillReceiveProps() {

        console.log(this.props.match.params)
        let song = songsFromDB.find(eachSong => eachSong.id == this.props.match.params.id)
        console.log(song)
        this.setState({ song })
        //Use this to get info and display it on the page... 


    }

    render() {
        return (
            <>
                <h3>Song {this.props.match.params.id}</h3>
                <h4>{this.state.song.title} by {this.state.song.artist}</h4>
            </>
        )
    }

}

export default Song