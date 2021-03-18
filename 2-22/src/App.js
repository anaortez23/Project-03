import React, { Component, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import AddMovie from './AddMovie'
import { Cow, Pig } from './Moo'



/**functional components */
function App() {
  // let [lolaAge, setLolaAge] = useState(3)
  return (
    <div className="App">
      <AddMovie />

      {/* <button onClick={() => setLolaAge(lolaAge++)}>Intro to Hooks</button>
      <Cow name="Lola" age={lolaAge} />
      <Pig name="Lunch" age="4" /> */}
    </div>
  );
}



export default App;
