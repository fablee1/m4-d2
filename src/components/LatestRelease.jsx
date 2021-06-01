import { Row, Col, Container, Button } from 'react-bootstrap'
import React, { Component } from 'react'
import MyCard from './MyCard'
import Fantasy from '../data/fantasy.json'
import History from '../data/history.json'
import Horror from '../data/horror.json'
import Romance from '../data/romance.json'
import Scifi from '../data/scifi.json'


class LatestRelease extends Component {
    
    state = {
        selectedCatName: null,
        selectedCategory: null
    }
    
    categories = {'Fantasy': Fantasy, 'History': History, 'Horror': Horror, 'Romance': Romance, 'Scifi': Scifi}

    render() {
        return (
            <Container>
                <Row className="mb-5 d-flex justify-content-center">
                    {
                        Object.keys(this.categories).map((cat, i) => {   
                        return <Col key={i} xs={6} sm={4} md={2} className="d-flex justify-content-center px-4 mb-2">
                                    <Button variant="success" className="w-100" onClick={() => this.setState({selectedCategory: this.categories[cat], selectedCatName: cat})}>{cat}</Button>
                                </Col>
                        })
                    }
                </Row>
                <Row className="mb-4">
                    <Col>
                        <Row className="d-flex justify-content-center mb-4 text-center">
                        {
                            this.state.selectedCatName ? <h2>{this.state.selectedCatName}</h2> : <h2>Select A Category To View Books!</h2>
                        }
                        </Row>
                        <Row className="d-flex justify-content-center">
                        {   
                            this.state.selectedCategory ? this.state.selectedCategory.map((c, i) => (
                                <MyCard {...c} key={i} />
                            )) : null
                        }
                        </Row>
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default LatestRelease