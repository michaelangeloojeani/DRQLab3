import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavigationBar = () => {
  return (
    // Navbar component from react-bootstrap with dark theme
    <Navbar bg="dark" data-bs-theme="dark">
      {/* Container ensures the content is responsive and properly aligned */}
      <Container>
        {/* Navbar.Brand displays the brand name/logo, linking back to the homepage */}
        <Navbar.Brand href="/">Navbar</Navbar.Brand>

        {/* Nav contains the navigation links for different routes */}
        <Nav className="me-auto">
          {/* Link to the homepage */}
          <Nav.Link href="/">Home</Nav.Link>

          {/* Link to the "create" page */}
          <Nav.Link href="/create">Create</Nav.Link>

          {/* Link to the "read" page */}
          <Nav.Link href="/read">Read</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

// Export the NavigationBar component so it can be used in other parts of the application
export default NavigationBar;