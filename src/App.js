import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import myImage from './myImage.jpg'

function App() {
  return (
      <div className="Page">
        <div className="Intro">
          <Container>
            <Row>
              <Col sm = {{ span: 4 }}>
                <img width="100%" src={myImage} className='img-thumbnail' alt="Me" style={{ maxWidth: '24rem', marginTop: 50, marginLeft: -10 }} />
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
              {/* <Col sm={{ offset: 2, span:2 }}>
                <img width="100%" src={hi} alt="hello" />
              </Col> */}
            </Row>
          </Container>
        </div>
        <br />
        <br />
        <div className="Work">
          <Container>
            <Row>
              <Col>
                <h2>WORK EXPERIENCE</h2>

              </Col>
            </Row>
          </Container>
        </div>
    </div>
  );
}

export default App;
