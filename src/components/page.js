import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPageItems } from '../actions/itemsAction';
import { Row, Col } from 'react-bootstrap/lib';
import Description from './description'

class Page extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    page: PropTypes.string.isRequired,
    match: PropTypes.object.isRequired,
    site: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { dispatch, match } = this.props;
    const page = match.params.page;
    dispatch(getPageItems(page));
  }

  render() {
    const { site, match } = this.props;
    const page = match.params.page;
    const id = match.params.id;
    const pages = site.pagesItems[page] || [];
    const pageData = pages.filter(v => v.id === id).pop();
    if (!pageData) return null
    return (
      <Row>
        <Col md={6} >
          {pageData.images.map((image, index) => (
              <img
                key={index}
                className="img-responsive"
                src={image}
                alt={index}
              />
          ))}
        </Col>
        <Col md={4} >
          <Description id={pageData.description} />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  site: state.site
});

export default connect(mapStateToProps)(Page);
