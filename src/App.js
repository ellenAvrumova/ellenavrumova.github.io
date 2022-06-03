import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { SocialIcon } from 'react-social-icons'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <SocialIcon url="https://www.linkedin.com/in/ellen-avrumova/" label="LinkedIn" style={{ margin:15,height: 50, width: 50 }}/>
      <SocialIcon url="https://github.com/ellenAvrumova" label="GitHub" style={{ margin:15 }}/> 
      <h2><center>Ellen Avrumova</center></h2>
        <p1>Hello! I'm a freshman at Hunter College.<br></br>I'm part of the Daedalus Program.</p1>
      </header>
    </div>
  );
}

export default App;
