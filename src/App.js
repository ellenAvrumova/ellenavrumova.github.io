import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import myImage from './myImage.jpg'
import amex from './American-Express-logo.png'
import { Socials } from './Components/Socials.js'
import { Cards } from './Components/Card.js'

function App() {
  const scrollListener = () => {
    let section = document.querySelectorAll("section");
    let menu = document.querySelectorAll("header nav a");

    window.onscroll = () => {
      section.forEach((i) => {
        let top = window.scrollY;
        let offset = i.offsetTop - 150;
        let height = i.offsetHeight;
        let id = i.getAttribute("id");

        if (top >= offset && top < offset + height) {
          menu.forEach((link) => {
            link.classList.remove("active");
            document
              .querySelector("header nav a[href*=" + id + "]")
              .classList.add("active");
          });
        }
      })
    };
    clearInterval(scrollTimer);
  };
  const scrollTimer = setInterval(scrollListener, 1000);

  return (
    <div className="Page">
        <header>
          <nav>
            <a href="#about" className="active">About me</a>
            <a href="#work">Work Experience</a>
            <a href="#contact">Contacts</a>
          </nav>
        </header>

        <section id="about">
          <div className="container reveal">
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
          <div className="container reveal">
            <br />
            <br />
            <Container>
              <Row>
                <Col sm = {{ offset: 4 }}>
                  <div id="header">
                    <p>WORK EXPERIENCE</p>
                  </div>
                </Col>
              </Row>
              <Row>
                {/* Insert Col here when adding new job */}
                <Col>
                  <div id="internName">
                    <p><u>Software Engingeer Intern</u></p>
                  </div>
                    <div id="list">
                      <p>Used:</p>
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
                  <img width="100%" src={amex} className='amex' alt="amex" style={{ maxWidth: '24rem', marginLeft: -380, marginTop: 40 }} />
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        
        <section id="contact">
          <div className="container reveal">
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
                  <br />
                </Col>
              </Row>
            </Container>
            <Cards />
            <br />
            <br />
          </div>
          </section>
      </div>
  );
}

export default App;
