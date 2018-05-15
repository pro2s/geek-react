import React, { Component } from 'react';
import { Navbar, Grid, Row, Col, Nav } from 'react-bootstrap/lib';
import PagesLinks from './pagesLinks';
import DefaultLinks from './defaultLinks';
const NavBarStyle = {
  background: 'none'
};
export default class Footer extends Component {
  render() {
    return (
      <Grid>
        <hr />
        <Row>
          <Col md={4}>
            <Navbar.Text>
              Гік-лаўка 2017&nbsp;-&nbsp;
              <Navbar.Link
                rel="noopener noreferrer"
                target="_blank"
                href="//creativecommons.org/licenses/by-sa/4.0/">
                CC BY SA 4.0
              </Navbar.Link>
            </Navbar.Text>
          </Col>
          <Col md={8} className="navbar-default" style={NavBarStyle}>
            <Nav className="navbar-nav" pullRight>
              <DefaultLinks />
              <PagesLinks />
            </Nav>
          </Col>
        </Row>
      </Grid>
    );
  }
}
