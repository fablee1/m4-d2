import { Row, Col, Container, Button } from 'react-bootstrap'
import { Component } from 'react'
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
                <Row className="mb-5">
                    {
                        Object.keys(this.categories).map((cat, i) => {   
                        return <Col key={i} className="d-flex justify-content-center px-4">
                                    <Button variant="success" className="w-100" onClick={() => this.setState({selectedCategory: this.categories[cat], selectedCatName: cat})}>{cat}</Button>
                                </Col>
                        })
                    }
                </Row>
                <Row className="mb-4 w-100">
                    <Col>
                        <Row>
                        {
                            this.state.selectedCatName ? <h2>{this.state.selectedCatName}</h2> : <h2>Select A Category To View Books!</h2>
                        }
                        </Row>
                        <Row>
                        {   
                            this.state.selectedCategory ? this.state.selectedCategory.map(c => (
                                <MyCard {...c} />
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