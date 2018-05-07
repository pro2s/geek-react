import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Navbar, Nav, NavItem } from 'react-bootstrap/lib';
import { LinkContainer } from 'react-router-bootstrap';

export default class Navigation extends Component {
  static propTypes = {
    pages: PropTypes.array.isRequired
  }

  render() {
    const { pages = [] } = this.props
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">React-Bootstrap</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          {pages.map(page =>
            <LinkContainer to={"/" + page.id} key={page.id} exact>
              <NavItem href="/">
                {page.title}
              </NavItem>
            </LinkContainer>
          )}
        </Nav>
      </Navbar>
    )
  }
}
