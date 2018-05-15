import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap/lib';
import PagesLinks from './pagesLinks';
import DefaultLinks from './defaultLinks';
import { Link } from 'react-scroll';

export default class Navigation extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#/">Гік-лаўка</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <DefaultLinks />
            <PagesLinks />
            <Link
              activeClass="active"
              to="subscribe"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}>
              Падпiска
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
