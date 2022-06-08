import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import myImage from './myImage.jpg'

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

          <br />
          <br />
          
          <section id="work">
            <div class="container reveal">
            <Container>
              <Row>
                <Col>
                  <h2>WORK EXPERIENCE</h2>
                  <p>You are viewing dummy text in English. Offices parties lasting outward nothing age few resolve. Impression to discretion understood to we interested he excellence. Him remarkably use projection collecting. Going about eat forty world has round miles. Attention affection at my preferred offending shameless me if agreeable. Life lain held calm and true neat she. Much feet each so went no from. Truth began maids linen an mr to after. Did shy say mention enabled through elderly improve. As at so believe account evening behaved hearted is. House is tiled we aware. It ye greatest removing concerns an overcame appetite. Manner result square father boy behind its his. Their above spoke match ye mr right oh as first. Be my depending to believing perfectly concealed household. Point could to built no hours smile sense. On am we offices expense thought. Its hence ten smile age means. Seven chief sight far point any. Of so high into easy. Dashwoods eagerness oh extensive as discourse sportsman frankness. Husbands see disposed surprise likewise humoured yet pleasure. Fifteen no inquiry cordial so resolve garrets as. Impression was estimating surrounded solicitude indulgence son shy.</p>
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
