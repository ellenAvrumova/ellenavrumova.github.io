import React,{Component} from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class Cards extends Component {
    render() {
        return(
            <div className="Card">
                <Container>
                    <Row>
                        <Col sm={{ offset: 1 }}>
                            <Card border="info" style={{ width: '50rem', left:20}}>
                                <Card.Header>Resume</Card.Header>
                                <Card.Body>
                                  <Card.Title>Click below if you'd like to learn more details about me!</Card.Title>
                                  <Card.Text><a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/18mA78XSODA0vlPLz2bNoC67HvjR5xazG/view?usp=sharing" title="Resume">Please click me</a></Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}