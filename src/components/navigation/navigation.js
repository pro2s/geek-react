import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap/lib';
import PagesLinks from './pagesLinks';
import DefaultLinks from './defaultLinks';
import SubscribeLink from './subscribe';

export default class Navigation extends Component {
  render() {
    return (
      <Navbar fixedTop>
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
            <SubscribeLink />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
