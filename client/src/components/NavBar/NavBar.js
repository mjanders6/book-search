import React from 'react';
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const NavB = ({ toggleSearch }) => {

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href='/'>Book Worm</NavbarBrand>
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Link to="/Books">Book Search</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/Saved">Saved Books</Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
}

export default NavB