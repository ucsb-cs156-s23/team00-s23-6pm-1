import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AppNavbar() {
  return (
    <>
      <Navbar
        expand="xl"
        variant="dark"
        bg="dark"
        sticky="top"
        data-testid="AppNavbar"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            Demo React Example
          </Navbar.Brand>

          <Navbar.Toggle />

          <>
            {/* be sure that each NavDropdown has a unique id and data-testid */}
          </>

          <Navbar.Collapse>
            {/* This `nav` component contains all navigation items that show up on the left side */}
            <Nav className="me-auto">
              <NavDropdown title="Towns" id="appnavbar-towns" data-testid="appnavbar-towns" >
                <NavDropdown.Item as={Link} to="/towns/ArroyoGrande">Arroyo Grande</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/towns/AvilaBeach">Avila Beach</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/towns/LosAlamos">Los Alamos</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/towns/Copenhagen">Copenhagen</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/towns/LosAngeles">Los Angeles</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/towns/Valencia">Valencia</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/towns/LagunaBeach">Laguna Beach</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/towns/Fremont">Fremont</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/towns/SanFrancisco">San Francisco</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
