import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import myImage from './myImage.jpg'
import amex from './American-Express-logo.png'
import { Socials } from './Components/Socials.js'

function App() {
  return (
    <body>
      <div className="Page">
          <header>
            <nav>
              <a href="#about" class="active">About me</a>
              <a href="#work">Work Experience</a>
              <a href="#contact">Contacts</a>
            </nav>
          </header>
          <section id="about">
            <div class="container reveal">
              <Container>
                <br />
                <br />
                <Row>
                  <Col sm = {{ span: 5 }}>
                    <img width="100%" src={myImage} className='img-thumbnail' alt="Me" style={{ maxWidth: '24rem', marginTop: 80, marginLeft: -40 }} />
                  </Col>
                  <Col>
                    <br />
                    <h2>ELLEN AVRUMOVA</h2>
                    <div id ="hello">
                      <p>Hello! I'm a freshman at Hunter College. I'm part of the Daedalus Honors Program and have been coding since 10th grade.</p>
                      <p><u>Currently I am: </u><br />Exploring career paths in technology!</p>
                      <p><u>My Current Goal: </u><br />Gain experience through internships!</p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </section>
          
          <section id="work">
            <div class="container reveal">
              <br />
              <br />
              <Container>
                <Row>
                  <Col>
                    <div id="header">
                      <p>WORK EXPERIENCE</p>
                    </div>
                    <div id="intern">
                      <p>Software Engingeer Intern</p>
                      <p>I used:</p>
                      <ul>
                        <li>Couchbase</li>
                        <li>NoSQL</li>
                        <li>JavaScript</li>
                        <li>Postman</li>
                        <li>React.js</li>
                      </ul>
                    </div>
                  </Col>
                  <Col sm = {{ span: 3 }}>
                    <img width="100%" src={amex} className='amex' alt="amex" style={{ maxWidth: '24rem', marginLeft: -380, marginTop: 120 }} />
                  </Col>
                </Row>
              </Container>
            </div>
          </section>
          
          <section id="contact">
            <div class="container reveal">
              <br />
              <br />
              <Container>
                <Row>
                  <Col sm = {{ offset: 5 }}>
                  <div id="header">
                    <p>CONTACTS</p>
                  </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Socials />
                  </Col>
                </Row>
              </Container>
            </div>
            </section>
        </div>
      </body>
  );
}

export default App;
