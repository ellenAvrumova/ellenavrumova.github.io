import React, { useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import myImage from './Ellen_Avrumova.jpeg'
import amex from './Logos/American-Express-logo.png'
import upperlineCode from './Logos/UpperlineCodeLogo.jpeg'
import unadat from './Logos/Unadat.jpeg'
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
      <Container>
          <header>
            <nav>
                <Row>
                  <Col sm ={4}>
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
                <Col sm ={{ span: 5 }}>
                  <img width="100%" src={myImage} className='img-thumbnail' alt="Me" style={{ maxWidth: '24rem', marginLeft: -40 }} />
                </Col>
                <Col>
                  <br />
                  <h2>ELLEN AVRUMOVA</h2>
                  <div id ="hello">
                    <p>Hello! I'm a student at Hunter College. I'm part of the Daedalus Honors Program and have been coding since 10th grade.</p>
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
                <Col>
                  <div id="header">
                    <p>WORK EXPERIENCE</p>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col sm = {{span: 1}}>
                  <img width="100%" src={unadat} className='unadat' alt="Unadat" style={{ maxWidth: '24rem', marginLeft: 0, marginTop: 0 }} />
                </Col>
                <Col>
                  <div id="internName">
                    <p><u>Product Manager Intern</u></p>
                  </div>
                  <div id="description">
                      <p>I managed a team of 6 software engineers and 5 designers to create a new product called "Challenges." I led daily morning stand-ups where
                        I created weekly tickets on Asana and organized sub-teams to work on these tickets. I assisted the CS Team by having my own engineering
                        tickets and coding in PHP, JS, and SQL. I assisted the Design Team by using previously received market research to create new features
                        that need to be designed.
                      </p>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col sm = {{ span: 1 }}>
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

                <Col sm = {{ span: 1 }}>
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
              <Row>
                <Col>
                  <Cards />
                </Col>
              </Row>
            </Container>
            <br />
            <br />
          </div>
          </section>
          </Container>
      </div>
  );
}

export default App;
