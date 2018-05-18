import React from 'react';
import { NavItem } from 'react-bootstrap/lib';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

const SocialLinks = ({ onNavItemClick }) => (
  <React.Fragment>
    <NavItem onSelect={onNavItemClick}>
      <FontAwesome name="vk" size="lg" />
    </NavItem>
    <NavItem onSelect={onNavItemClick}>
      <FontAwesome name="facebook" size="lg" />
    </NavItem>
    <NavItem onSelect={onNavItemClick}>
      <FontAwesome name="instagram" size="lg" />
    </NavItem>
  </React.Fragment>
);

SocialLinks.propTypes = {
  onNavItemClick: PropTypes.func
};

export default SocialLinks;
