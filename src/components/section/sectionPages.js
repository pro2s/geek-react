import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap/lib';
import { Link } from 'react-router-dom';

class SectionPages extends Component {
  static propTypes = {
    section: PropTypes.string.isRequired,
    pages: PropTypes.object.isRequired
  };

  render() {
    const { section, pages } = this.props;
    return pages.items.map((item, index) => (
      <Col md={4} key={index}>
        <div>
          <h3 className="pull-right">{item.price || ''}</h3>
          <h3>
            <Link to={'/' + section + '/' + item.id}>{item.title}</Link>
          </h3>
        </div>
        <div>
          <img className="img-responsive" src={item.preview} alt={item.title} />
        </div>
      </Col>
    ));
  }
}

export default SectionPages;
