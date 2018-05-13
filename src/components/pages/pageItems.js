import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap/lib';
import { Link } from 'react-router-dom';

class PageItems extends Component {
  static propTypes = {
    page: PropTypes.string.isRequired, 
    pageData: PropTypes.object.isRequired,
  };
  

  render() {
    const { page, pageData } = this.props
    return pageData.items.map((item, index) => (
      <Col md={4} key={index}>
        <div>
          <h3 className="pull-right">{item.price || ''}</h3>
          <h3>
            <Link to={'/' + page + '/' + item.id}>{item.title}</Link>
          </h3>
        </div>
        <div>
          <img
            className="img-responsive"
            src={item.preview}
            alt={item.title}
          />
        </div>
      </Col>
    ))
  }
}

export default PageItems;
