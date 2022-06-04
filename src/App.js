import React from 'react';
import './App.css';
import { SocialIcon } from 'react-social-icons'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Container>
      <Row>
        <Col><SocialIcon url="https://www.linkedin.com/in/ellen-avrumova/" label="LinkedIn" style={{ margin:15, left:100 }}/></Col>
        <Col><SocialIcon url="https://github.com/ellenAvrumova" label="GitHub" style={{ margin:15, left:100 }}/></Col>
        <Col><SocialIcon url="mailto:e.avrumova@gmail.com?" label="Gmail" style={{ margin:15, left:100 }} bgColor="#de5246"/></Col>
      </Row>
    </Container>
      <h2><center> Ellen Avrumova</center></h2>
        <p1>Hello! I'm a freshman at Hunter College.<br></br>I'm part of the Daedalus Program.</p1>
      </header>
    </div>
  );
}

export default App;
