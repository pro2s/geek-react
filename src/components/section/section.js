import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSection } from '../../actions/pages';
import { Row } from 'react-bootstrap/lib';
import SectionPages from './sectionPages';
import SectionInfo from './sectionInfo';

class Section extends Component {
  static propTypes = {
    sections: PropTypes.object.isRequired,
    section: PropTypes.string.isRequired,
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
    const { sections, section } = this.props;
    const pages = sections[section];
    if (!pages) return null;
    return (
      <Fragment>
        <Row>
          <SectionInfo pages={pages} />
        </Row>
        <hr />
        <Row>
          <SectionPages section={section} pages={pages} />
        </Row>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  sections: state.sections
});

export default connect(mapStateToProps)(Section);
