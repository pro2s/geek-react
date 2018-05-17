import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSection } from '../../actions/pages';
import { Row, Col, Button } from 'react-bootstrap/lib';
import Description from './description';

class Page extends Component {
  static propTypes = {
    section: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    sections: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  loadData(props) {
    const { dispatch, sections, section } = props;
    if (sections[section] === undefined) {
      dispatch(getSection(section));
    }
  }

  componentWillUpdate(props) {
    this.loadData(props);
  }

  componentDidMount() {
    this.loadData(this.props);
  }

  render() {
    const { sections, section, id } = this.props;
    const pages = sections[section];
    const isPage = pages && 'items' in pages;
    const page = isPage ? pages.items.filter(v => v.id === id).pop() : null;
    if (!page) return null;
    return (
      <Row>
        <Col md={8}>
          <h1 className="pull-right">{page.price}</h1>
          <h1>{page.title}</h1>
        </Col>
        <Col md={4}>
          <Button bsSize="large">Замовіць паслугу</Button>
        </Col>
        <Col md={8}>
          {page.images.map((image, index) => (
            <img key={index} className="img-responsive" src={image} alt="" />
          ))}
        </Col>
        <Col md={4}>
          <Description id={page.description} />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  sections: state.sections
});

export default connect(mapStateToProps)(Page);
