import React from 'react';
import './App.css';
import { SocialIcon } from 'react-social-icons'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import myImage from './myImage.jpg'
import hi from './Hi.png'
import {Resume} from './Components/Resume'

function App() {
  return (
      <div className="Page">
        <div className="Socials">
          <Container>
            <Row>
              <Col><SocialIcon url="https://www.linkedin.com/in/ellen-avrumova/" label="LinkedIn" style={{ margin:15, left:100 }}/></Col>
              <Col><SocialIcon url="https://github.com/ellenAvrumova" label="GitHub" style={{ margin:15, left:100 }}/></Col>
              <Col><SocialIcon url="mailto:e.avrumova@gmail.com?" label="Gmail" style={{ margin:15, left:100 }} bgColor="#de5246"/></Col>
            </Row>
          </Container>
        </div>

        <div className="Intro">
          <Container>
            <Row>
              <Col sm={{ offset: 2, span:2 }}>
                <img width="100%" src={hi} alt="hello" />
              </Col>
              <Col sm={{ offset: 2 }} ><br /><br /><h2>ELLEN AVRUMOVA</h2></Col>
            </Row>
            <Row>
              <Col sm = {{ span: 4 }}>
                <img width="100%" src={myImage} className='img-thumbnail' alt="Me" style={{ maxWidth: '24rem' }} />
              </Col>
              <Col md = {8}>
                <div id ="hello">
                  <p>Hello! I'm a freshman at Hunter College. I'm part of the</p>
                  <p>Daedalus Honors Program and have coded since 10th grade.</p>
                </div>
                {/* RESUME */}
              </Col>
            </Row>
          </Container>
        </div>

        <div className="Work">
          <Container>
            <Row>
              <Col>
                {/* <p>Work Experience</p> */}
              </Col>
            </Row>
          </Container>
        </div>
    </div>
  );
}

export default App;
