import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import myImage from './Ellen_Avrumova.jpeg'
import amex from './Logos/American-Express-logo.png'
import upperlineCode from './Logos/UpperlineCodeLogo.jpeg'
import unadat from './Logos/Unadat.jpeg'
import { Socials } from './Components/Socials.js'
import futeur from './Logos/TheFuteur.jpg'

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
      <Container>
        <header>
          <nav>
            <Row>
              <Col sm={4}>
                <a href="#about" className="active">About me</a>
              </Col>
              <Col sm={4}>
                <a href="#work">Work Experience</a>
              </Col>
              <Col sm={4}>
                <a href="#contact">Contacts</a>
              </Col>
            </Row>
          </nav>
        </header>


        <section id="about">
          <div className="container reveal">
            <Container>
              <br />
              <br />
              <Row>
                <Col sm={5}>
                  <img width="100%" src={myImage} className='img-thumbnail' alt="Me" style={{ maxWidth: '24rem' }} />
                </Col>
                <Col sm={7}>
                  <br />
                  <h2>Hello World! I'm Ellen Avrumova :)</h2>
                  <div id="hello">
                    <p>I'm a student at Hunter College. I'm part of the Daedalus Honors Program and have been coding since 10th grade.</p>
                    <p><u>Currently I am: </u><br />Looking for a full-time SWE or PM position in NYC!</p>
                    {/* <p><u>My Current Goal: </u><br />Gain experience through internships!</p> */}
                    <p><u>My Skills: </u></p>
                    <Row>
                      <Col>
                        <ul>
                          <li className='title'>Front-End Development</li>
                          <ul>
                            <li className='skill'>React</li>
                            <li className='skill'>TypeScript</li>
                            <li className='skill'>HTML/JS/CSS</li>
                          </ul>
                        </ul>
                      </Col>
                      <Col>
                        <ul>
                          <li className='title'>Back-End Development</li>
                          <ul>
                            <li className='skill'>C++</li>
                            <li className='skill'>Python</li>
                            <li className='skill'>SQL & NoSQL</li>
                          </ul>
                        </ul>
                      </Col>
                      <Col>
                        <ul>
                          <li className='title'>Product Management</li>
                          <ul>
                            <li className='skill'>Asana</li>
                            <li className='skill'>Communication</li>
                            <li className='skill'>Leadership</li>
                          </ul>
                        </ul>
                      </Col>
                    </Row>
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
                <Col>
                  <div id="header">
                    <p>WORK EXPERIENCE</p>
                  </div>
                </Col>
              </Row>
              <Row className="slide">
                <Col sm={{ span: 1 }}>
                  <img width="100%" src={futeur} className='futeur' alt="Futeur" style={{ maxWidth: '24rem', marginLeft: 0, marginTop: 0 }} />
                </Col>
                <Col>
                  <div id="internName">
                    <p><u>Lead Engineer Intern</u></p>
                  </div>
                  <div id="description">
                    <p>I managed a team of 2 back-end developers and 1 mobile app developer, while solely working on front-end development to create a new website and app entirely from scratch.
                      I built the front-end using React and TypeScript and used Zustand for state-management.
                      Our product was a website that allows users to view all of their business credit scores and provide clear explanations for each score.
                      I was responsible for creating and assigning tickets and sub-tasks to everyone on Asana and created the roadmap for each new feature.
                      I developed a multi-step sign-up form, a login page, a settings page, a side navigation bar, a dashboard, a Credit Health page, and a Subscriptions page that dynamically updates based on the user's subscription status.
                    </p>
                  </div>
                </Col>
              </Row>

              <Row className="slide">
                <Col sm={{ span: 1 }}>
                  <img width="100%" src={unadat} className='unadat' alt="Unadat" style={{ maxWidth: '24rem', marginLeft: 0, marginTop: 0 }} />
                </Col>
                <Col>
                  <div id="internName">
                    <p><u>Product Manager Intern</u></p>
                  </div>
                  <div id="description">
                    <p>I managed a team of 6 software engineers and 5 designers to create a new product called "Challenges." I led daily morning stand-ups where
                      I created weekly tickets on Asana and organized sub-teams to work on these tickets. I assisted the CS Team by having my own engineering
                      tickets, coding in PHP, JS, and SQL, and helping anyone debug. I assisted the Design Team by using previously received market research
                      to ideate new features that needed to be designed.
                    </p>
                  </div>
                </Col>
              </Row>

              <Row className="slide">
                <Col sm={{ span: 1 }}>
                  <img width="100%" src={upperlineCode} className='upperlineCode' alt="Upperline Code" style={{ maxWidth: '24rem', marginLeft: 0, marginTop: 0 }} />
                </Col>
                <Col>
                  <div id="internName">
                    <p><u>Teaching Assistant</u></p>
                  </div>
                  <div id="description">
                    <p>I was a TA for an HTML/CSS/JavaScript class. I assisted
                      10th-grade students in making their own websites by debugging and answering their questions.
                      I collaborated with teachers to create a teaching plan and seating chart everyday.</p>
                  </div>
                </Col>
              </Row>

              <Row className="slide">
                <Col sm={{ span: 1 }}>
                  <img width="100%" src={amex} className='amex' alt="amex" style={{ maxWidth: '24rem', marginLeft: 0, marginTop: 0 }} />
                </Col>
                <Col>
                  <div id="internName">
                    <p><u>Software Engineer Intern</u></p>
                  </div>
                  <div id="description">
                    <p>I interned at AMEX and learned how to create Couchbase queries and APIs using node.js.
                      I also learned how to successfully render data onto a website.
                      I developed skills for coding in NoSQL, JavaScipt, React.js, and a bit of HTML.</p>
                  </div>
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
                <Col>
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
            <br />
            <br />
            <br />
            <br />
          </div>
        </section>
      </Container>
    </div>
  );
}

export default App;
