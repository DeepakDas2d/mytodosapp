import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
function MyNavbar(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className=' sticky-top'>
      <Container>
        <Navbar.Brand as={Link}  to="/">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/mylist">My List</Nav.Link>  
           </Nav>
          {props.searchBar?<Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>:""}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
MyNavbar.defaultProps={
  title: "Navbar Title",
  searchBar :true
}
MyNavbar.propTypes={
  title:PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}