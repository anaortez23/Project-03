import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Song from './components/Song'
import Contact from './components/Contact'

const songs = [
  { title: "Thriller", id: 1 },
  { title: "Dirty Diana", id: 2 },
  { title: "WAP", id: 3 },
  { title: "Te Bote", id: 4 },
  { title: "Thats what friends are for", id: 5 },
]


class App extends Component {

  componentDidMount() {
    //Happens just once when component mounts
  }

  showSongs = () => {
    return songs.map(eachSong => {
      return (<li>
        <Link to={`/song/${eachSong.id}`}>{eachSong.title}</Link>
      </li>)
    })
  }

  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="song">Song</Link>
          <Link to="contact">Contact</Link>
        </nav>

        <div>
          <h2>All Songs:</h2>
          {this.showSongs()}
        </div>


        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route exact path="/contact" render={(props) => <Contact {...props} />} />
          <Route exact path="/song/:id" render={(props) => <Song {...props} />} />


        </Switch>



      </div>
    );
  }
}

export default App;
