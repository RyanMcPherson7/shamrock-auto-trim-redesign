import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
  return (
    <>
      <Navbar
        id='navbar-container'
        bg='dark'
        variant='dark'
        fixed='top'
        expand='md'
        collapseOnSelect
      >
        <Navbar.Brand id='navbar-brand'>
          <a href='index.html'>Shamrock Auto Trim</a>
        </Navbar.Brand>

        <Navbar.Toggle id='navbar-toggle'/>
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#about'>About</Nav.Link>
            <NavDropdown title='Services'>
              <NavDropdown.Item href='index.html'>
                Convertible Tops
              </NavDropdown.Item>
              <NavDropdown.Item href='index.html'>Headliners</NavDropdown.Item>
              <NavDropdown.Item href='index.html'>Seats</NavDropdown.Item>
              <NavDropdown.Item href='index.html'>
                Motorcycle Seats
              </NavDropdown.Item>
              <NavDropdown.Item href='index.html'>
                Lamborghini Tonneau Cover
              </NavDropdown.Item>
              <NavDropdown.Item href='index.html'>
                Motorcycle Heat Shield
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Projects'>
              <NavDropdown.Item href='index.html'>
                2Fast2Furious Movie Cars
              </NavDropdown.Item>
              <NavDropdown.Item href='index.html'>
                Lenny Kravitz's Cadillac
              </NavDropdown.Item>
              <NavDropdown.Item href='index.html'>
                NFL Chad Ochocinco's Lamborghini
              </NavDropdown.Item>
              <NavDropdown.Item href='index.html'>
                NFL Ronnie Brown's Chevy
              </NavDropdown.Item>
              <NavDropdown.Item href='index.html'>
                Corporate Designs
              </NavDropdown.Item>
              <NavDropdown.Item href='index.html'>
                Father's 90th Birthday Surprise - 1962 Corvette
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='index.html'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
