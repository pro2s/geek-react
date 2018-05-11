import React from 'react';
import PropTypes from 'prop-types';
import {Page, PageInfo } from '../../components/pages';

const Pages = ({ match }) => { 
  if (match.params.id) {
    return (<Page page={match.params.page} id={match.params.id} />)
  } else {
    return (<PageInfo page={match.params.page} />)
  }
}

Pages.propTypes = {
  match: PropTypes.object.isRequired
};

export default Pages;
