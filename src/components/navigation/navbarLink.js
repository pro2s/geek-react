import React from 'react';
import PropTypes from 'prop-types';
import { ScrollLink } from 'react-scroll';
import { NavItem } from 'react-bootstrap';

const NavbarLink = props => <NavItem {...props}>{props.children}</NavItem>;

NavbarLink.propTypes = {
  children: PropTypes.string
};

export default ScrollLink(NavbarLink);
