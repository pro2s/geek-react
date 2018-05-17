import React from 'react';
import { NavItem } from 'react-bootstrap/lib';
import FontAwesome from 'react-fontawesome';

const SocialLinks = () => (
  <React.Fragment>
    <NavItem>
      <FontAwesome name="vk" size="lg" />
    </NavItem>
    <NavItem>
      <FontAwesome name="facebook" size="lg" />
    </NavItem>
    <NavItem>
      <FontAwesome name="instagram" size="lg" />
    </NavItem>
  </React.Fragment>
);

export default SocialLinks;
