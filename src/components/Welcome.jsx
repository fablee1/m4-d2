import { Row, Col, Container, Jumbotron } from 'react-bootstrap'
import Book from '../book-svgrepo-com.svg'
import React from 'react'

const Welcome = () => (
    <Container>
        <Jumbotron fluid>
            <Container>
                <Row>
                    <Col className="text-center">
                        <h1>My book store</h1>
                        <p>
                            Hi, this is my supercool book store:D
                        </p>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <img className="mr-5" src={Book} alt="" />
                        <img className="d-none d-sm-inline mr-5" src={Book} alt="" />
                        <img className="d-none d-md-inline mr-5" src={Book} alt="" />
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    </Container>
)

export default Welcome