import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavbarLink from './navbarLink';

const SubscribeLink = ({ active }) => (
  <NavbarLink
    className={active && 'active'}
    to="subscribe"
    smooth
    duration={500}>
    Падпiска
  </NavbarLink>
);

const mapStateToProps = state => ({
  active: state.subscribe.active
});

SubscribeLink.propTypes = {
  active: PropTypes.bool
};

export default connect(mapStateToProps)(SubscribeLink);
