import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPageItems } from '../../actions/pages'
import { Row } from 'react-bootstrap/lib'
import PageItems from './pageItems'
import PageDescription from './pageDescription'

class PageInfo extends Component {
  static propTypes = {
    site: PropTypes.object.isRequired,
    page: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  loadData(props) {
    const { dispatch, site, page } = props;
    if (site.pagesInfo[page] === undefined) {
      dispatch(getPageItems(page))
    }
  }

  componentWillUpdate(props) {
    this.loadData(props)
  }

  componentDidMount() {
    this.loadData(this.props)
  }

  render() {
    const { site, page } = this.props;
    const defaultPage = {title: '', description: '', items:[]}
    const pageData = site.pagesInfo[page] || defaultPage
    return (
      <Fragment>
        <Row>
          <PageDescription pageData={pageData} />
        </Row>  
        <hr/>
        <Row>
          <PageItems page={page} pageData={pageData} />
        </Row>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  site: state.site
})

export default connect(mapStateToProps)(PageInfo)
