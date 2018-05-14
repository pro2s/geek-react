import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ReactHtmlParser from 'react-html-parser'
import { getPageDescription } from '../../actions/pages'

class Description extends Component {
  loadData(props) {
    const { dispatch, id, description } = props;
    if (id !== description.id) {
      dispatch(getPageDescription(id))
    }
  }

  componentWillUpdate(props) {
    this.loadData(props);
  }

  componentDidMount() {
    this.loadData(this.props);
  }

  static propTypes = {
    id: PropTypes.string.isRequired,
    description: PropTypes.object.isRequired,
  };

  render() {
    const { description } = this.props
    return (
      <Fragment>
        {ReactHtmlParser(description.html, {
          transform: (node, index) => {
            let isHyperlink = node.type === 'tag' && node.name === 'a'
            if (isHyperlink) {
              let text = node.children
                .map(v => v.data)
                .map(v => v)
                .join()
              return (<span key={index}>{text}</span>)
            }
          }
        })}
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  description: state.description
});

export default connect(mapStateToProps)(Description);
