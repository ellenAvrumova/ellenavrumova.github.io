import React from 'react';
import './App.css';
import { SocialIcon } from 'react-social-icons'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import myImage from './myImage.jpg'

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
        <Container>
          <Row>
            <Col>
              <h2>Ellen Avrumova</h2>
            </Col>
            <Col sm = {{ offset: 5, span: 5 }}>
              <img width="100%" src={myImage} alt="Me" />
            </Col>
          </Row>
        </Container>
        <Container>

        </Container>
      </header>
    </div>
  );
}

export default App;
