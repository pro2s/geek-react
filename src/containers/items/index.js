import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ItemList from '../../components/itemsList';
import { Grid, Row, Col } from 'react-bootstrap/lib';

const Items = ({ pageId }) => (
  <Grid>
    <Row>
      <Col md={12}>
        <h1>Page Items</h1>
        <p>{pageId}</p>
        <p>Did you get here via Redux?</p>
      </Col>
    </Row>
    <ItemList pageId={pageId} />
  </Grid>
);

Items.propTypes = {
  pageId: PropTypes.string.isRequired
};

export default withRouter(Items);
