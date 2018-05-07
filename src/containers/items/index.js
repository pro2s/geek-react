import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const Items = ({ pageId }) => (
  <div>
    <h1>Page Items</h1>
    <p>{pageId}</p>
    <p>Did you get here via Redux?</p>
  </div>
);

Items.propTypes = {
  pageId: PropTypes.string.isRequired
};

export default withRouter(Items);
