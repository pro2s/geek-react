import React, { Fragment, Component } from 'react';
import { NavItem } from 'react-bootstrap/lib';
import { LinkContainer } from 'react-router-bootstrap';
import PropTypes from 'prop-types';

export default class DefaultLinks extends Component {
  static propTypes = {
    onNavItemClick: PropTypes.func
  };
  render() {
    const { onNavItemClick } = this.props;
    return (
      <Fragment>
        <LinkContainer to="/about-us" exact>
          <NavItem onSelect={onNavItemClick}>Пра нас</NavItem>
        </LinkContainer>
        <LinkContainer to="/counter" exact>
          <NavItem onSelect={onNavItemClick}>Лічыльнік</NavItem>
        </LinkContainer>
      </Fragment>
    );
  }
}
