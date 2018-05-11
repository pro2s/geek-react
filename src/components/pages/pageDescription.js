import React from 'react'
import { Col } from 'react-bootstrap/lib'
import PropTypes from 'prop-types'

const PageDescription = ({pageData}) => (
  <Col md={12}>
    <h1>
      {pageData.title}
      <small>{pageData.description}</small>
    </h1>
  </Col>
)

PageDescription.propTypes = {
    pageData: PropTypes.object.isRequired
}
  
export default PageDescription
