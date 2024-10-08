import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

export class Socials extends Component {
    render() {
        return (
            <div className="Socials">
                <Container>
                    <Row>
                        <Col>
                            <SocialIcon url="https://www.linkedin.com/in/ellen-avrumova/" label="LinkedIn" style={{ left: 120 }} />
                        </Col>
                        <Col>
                            <SocialIcon url="https://github.com/ellenAvrumova" label="GitHub" style={{ left: 120 }} />
                        </Col>
                        <Col>
                            <SocialIcon url="mailto:e.avrumova@gmail.com?" label="Gmail" style={{ left: 120 }} bgColor="#de5246" />
                        </Col>
                    </Row>
                    <br></br>
                    <Row className="justify-content-center">
                        <Col className="d-flex justify-content-center">
                            <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/18mA78XSODA0vlPLz2bNoC67HvjR5xazG/view?usp=sharing" title="Resume">
                                <Badge bg="primary" text="light">For more information about me, here's my resume! :D</Badge>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}