import React,{Component} from 'react'
import { SocialIcon } from 'react-social-icons'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class Socials extends Component {
    render() {
        return(
            <div className="Socials">
            <Container>
                <Row>
                    <Col><SocialIcon url="https://www.linkedin.com/in/ellen-avrumova/" label="LinkedIn" style={{ left:120 }}/></Col>
                    <Col><SocialIcon url="https://github.com/ellenAvrumova" label="GitHub" style={{ left:120 }}/></Col>
                    <Col><SocialIcon url="mailto:e.avrumova@gmail.com?" label="Gmail" style={{ left:120 }} bgColor="#de5246"/></Col>
                </Row>
            </Container>
            </div>
        )
    }
}