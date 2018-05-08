import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'cross-fetch';
    
class Description extends Component {
  state = {
    html: ''
  }

  componentDidMount() {
    const { id } = this.props;
    fetch('/data/html/' + id)
      .then(res => {
        if (res.status >= 400) {
          throw new Error('Bad response from server')
        }
        return res.text()
      })
      .then(html => {
        this.setState({html: html});
      })
      .catch(_ => {
        this.setState({html: '404'})
      });
  }

  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div dangerouslySetInnerHTML={{ __html: this.state.html}} />
    );
  }
}

export default Description;
