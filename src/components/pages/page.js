import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPageItems } from '../../actions/itemsAction';
import { Row, Col, Button } from 'react-bootstrap/lib';
import Description from './description';

class Page extends Component {
  static propTypes = {
    page: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    site: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  loadData(props) {
    const { dispatch, site, page } = props;
    if (site.pagesInfo[page] === undefined) {
      dispatch(getPageItems(page));
    }
  }

  componentWillUpdate(props) {
    this.loadData(props);
  }

  componentDidMount() {
    this.loadData(this.props);
  }

  render() {
    const { site, page, id } = this.props;
    const defaultPage = {title: '', description: '', items:[]}
    const pages = site.pagesInfo[page] || defaultPage
    const pageData = pages.items.filter(v => v.id === id).pop()
    if (!pageData) return null
    return (
      <Row>
        <Col md={8}>
          <h1 className="pull-right">{pageData.price}</h1>
          <h1>{pageData.title}</h1>
        </Col>
        <Col md={4}>
          <Button bsSize="large">Замовіць паслугу</Button>
        </Col>
        <Col md={8}>
          {pageData.images.map((image, index) => (
            <img
              key={index}
              className="img-responsive"
              src={image}
              alt={index}
            />
          ))}
        </Col>
        <Col md={4}>
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
