import React, { Fragment, Component } from 'react'
import { NavItem } from 'react-bootstrap/lib'
import { LinkContainer } from 'react-router-bootstrap'

export default class DefaultLinks extends Component {
  render() {
    return (
        <Fragment>
            <LinkContainer to="/about-us" exact>
                <NavItem>Пра нас</NavItem>
            </LinkContainer>
            <LinkContainer to="/counter" exact>
                <NavItem>Лічыльнік</NavItem>
            </LinkContainer>
        </Fragment>
    )
  }
}
