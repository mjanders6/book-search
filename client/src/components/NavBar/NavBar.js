import React from 'react';
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

const NavB = () => {

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href='/'>Book Worm</NavbarBrand>
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/Books">Book Search</Link>
              </NavItem>
              <NavItem>
                <Link to="/Saved">Saved Books</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
}

export default NavB