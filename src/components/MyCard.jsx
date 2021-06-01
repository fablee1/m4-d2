import { Col, Card, Badge } from 'react-bootstrap'
import React from 'react'

const MyCard = (props) => (
    <Col xs={3} key={props.i}>
        <Card>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    Category: {props.category}
                </Card.Text>
                <Badge variant="warning">Price: {props.price}$</Badge>
            </Card.Body>
        </Card>
    </Col>
)

export default MyCard