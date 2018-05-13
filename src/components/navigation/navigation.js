import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap/lib';
import ItemsLinks from './itemsLinks';
import DefaultLinks from './default';

export default class Navigation extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#/">Гік-лаўка</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <DefaultLinks />
          <ItemsLinks />
        </Nav>
      </Navbar>
    );
  }
}
