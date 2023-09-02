import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
export default function NavBar(props) {
    return (
      <Navbar bg={props.mode} data-bs-theme={props.mode}>
        <Container fluid>
          <Navbar.Brand href="/">{props.title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/textarea">Editor</Link>
              <Link to="/about">About</Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="/">Action</NavDropdown.Item>
                <NavDropdown.Item href="/">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="/">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Form inline>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>
        </Container>
      </Navbar>
    );
  }
  NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
  };
  NavBar.defaultProps = {
    title: "Your Title Here",
  };
