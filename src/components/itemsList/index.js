import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPageItems } from '../../actions/itemsAction';
import { Row, Col } from 'react-bootstrap/lib';

class ItemsList extends Component {
  static propTypes = {
    site: PropTypes.object.isRequired,
    pageId: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { dispatch, pageId } = this.props;
    dispatch(getPageItems(pageId));
  }

  render() {
    const { site, pageId } = this.props;
    const pageItems = site.pagesItems[pageId] || [];
    return (
      <Row>
        {pageItems.map((item, index) => (
          <Col md={4} key={index}>
            <div>
              <h3 className="pull-right">{item.price || ''}</h3>
              <h3>{item.title}</h3>
            </div>
            <div>
              <img className="img-responsive" src={item.preview} />
            </div>
          </Col>
        ))}
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  site: state.site
});

export default connect(mapStateToProps)(ItemsList);
