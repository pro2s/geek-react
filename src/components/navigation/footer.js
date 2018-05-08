import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavItem,  Grid, Row, Col, Nav} from 'react-bootstrap/lib';
import { LinkContainer } from 'react-router-bootstrap';

export default class Footer extends Component {
  static propTypes = {
    pages: PropTypes.array.isRequired
  }

  render() {
    const { pages = [] } = this.props
    return (
      <Grid>
        <Row>
          <Col md={4}>
            <Nav>
              <NavItem>
                React-Bootstrap
              </NavItem>
            </Nav>
          </Col>
          <Col md={8}>
          
            <Nav bsStyle="pills">
              {pages.map(page =>
                <LinkContainer to={"/" + page.id} key={page.id} exact>
                  <NavItem href="/">
                    {page.title}
                  </NavItem>
                </LinkContainer>
              )}
            </Nav>
          
          </Col>
        </Row>
      </Grid>
    )
  }
}
