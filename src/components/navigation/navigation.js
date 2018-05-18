import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap/lib';
import PagesLinks from './pagesLinks';
import DefaultLinks from './defaultLinks';
import SubscribeLink from './subscribe';
import SocialLinks from './socialLinks';

export default class Navigation extends Component {
  state = {
    navExpanded: false
  };

  onNavItemClick = () => {
    this.setState({ navExpanded: false });
  };

  onNavbarToggle = () => {
    this.setState({ navExpanded: !this.state.navExpanded });
  };

  render() {
    return (
      <Navbar fixedTop expanded={this.state.navExpanded} onToggle={this.onNavbarToggle}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#/">Гік-лаўка</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <DefaultLinks onNavItemClick={this.onNavItemClick} />
            <PagesLinks onNavItemClick={this.onNavItemClick} />
            <SubscribeLink onNavItemClick={this.onNavItemClick} />
            <SocialLinks onNavItemClick={this.onNavItemClick} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
