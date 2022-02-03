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

        <Navbar.Toggle id='navbar-toggle' />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#about'>About</Nav.Link>
            <NavDropdown title='Services'>
              <NavDropdown.Item href='#convertible-tops'>
                Convertible Tops
              </NavDropdown.Item>
              <NavDropdown.Item href='#headliners'>Headliners</NavDropdown.Item>
              <NavDropdown.Item href='#seats'>Seats</NavDropdown.Item>
              <NavDropdown.Item href='#motorcycle-seats'>
                Motorcycle Seats
              </NavDropdown.Item>
              <NavDropdown.Item href='#lamborghini-tonneau-cover'>
                Lamborghini Tonneau Cover
              </NavDropdown.Item>
              <NavDropdown.Item href='#motorcycle-heat-shields'>
                Motorcycle Heat Shields
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Projects'>
              <NavDropdown.Item href='#2fast2furious-movie-cars'>
                2Fast2Furious Movie Cars
              </NavDropdown.Item>
              <NavDropdown.Item href='#lenny-kravitz-cadillac'>
                Lenny Kravitz's Cadillac
              </NavDropdown.Item>
              <NavDropdown.Item href='#nfl-chad-ochocinco-lamborghini'>
                NFL Chad Ochocinco's Lamborghini
              </NavDropdown.Item>
              <NavDropdown.Item href='#nfl-ronnie-brown-chevy'>
                NFL Ronnie Brown's Chevy
              </NavDropdown.Item>
              <NavDropdown.Item href='#corporate-designs'>
                Corporate Designs
              </NavDropdown.Item>
              <NavDropdown.Item href='#birthday-corvet'>
                Father's 90th Birthday Surprise - 1962 Corvette
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
