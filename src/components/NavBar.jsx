import { Navbar, Nav, Container } from 'react-bootstrap'

const NavBar = () => (
    <Navbar bg="dark" variant="dark" className="mb-4">
        <Container>
            <Navbar.Brand className="mr-5" href="#">Viljams Book Store</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#" active>Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Browse</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
)

export default NavBar