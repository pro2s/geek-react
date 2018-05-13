import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'cross-fetch';
import ReactHtmlParser from 'react-html-parser';

class Description extends Component {
  state = {
    html: ''
  };

  componentDidMount() {
    const { id } = this.props;
    fetch('/data/html/' + id)
      .then(res => {
        if (res.status >= 400) {
          throw new Error('Bad response from server');
        }
        return res.text();
      })
      .then(html => {
        this.setState({ html: html });
      })
      .catch(() => {
        this.setState({ html: '404' });
      });
  }

  static propTypes = {
    id: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        {ReactHtmlParser(this.state.html, {
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
      </div>
    );
  }
}

export default Description;