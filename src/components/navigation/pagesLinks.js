import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavItem } from 'react-bootstrap/lib';
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter } from 'react-router-dom';

class PagesLinks extends Component {
  static propTypes = {
    pages: PropTypes.array.isRequired,
    onNavItemClick: PropTypes.func
  };

  render() {
    const { pages, onNavItemClick } = this.props;
    return pages.map(page => (
      <LinkContainer to={'/' + page.id} key={page.id}>
        <NavItem onSelect={onNavItemClick}>{page.title}</NavItem>
      </LinkContainer>
    ));
  }
}

const mapStateToProps = state => ({
  pages: state.site.sections
});

export default withRouter(connect(mapStateToProps)(PagesLinks));
