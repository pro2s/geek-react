import React from 'react';
import { Col } from 'react-bootstrap/lib';
import PropTypes from 'prop-types';

const SectionInfo = ({ pages }) => (
  <Col md={12}>
    <h1>
      {pages.title}
      <small>{pages.description}</small>
    </h1>
  </Col>
);

SectionInfo.propTypes = {
  pages: PropTypes.object.isRequired
};

export default SectionInfo;
