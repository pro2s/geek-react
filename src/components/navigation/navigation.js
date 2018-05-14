import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap/lib'
import PagesLinks from './pagesLinks'
import DefaultLinks from './defaultLinks'

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
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
