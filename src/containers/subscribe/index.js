import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import SubscribeForm from '../../components/subscribeForm';
import { Element } from 'react-scroll';
import Waypoint from 'react-waypoint';
import { setSubscribe } from '../../actions/pages';
import { withRouter } from 'react-router-dom';

const url = '//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn';

// use the render prop and your custom form
const Subscribe = props => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <Element id="subscribe">
        <Waypoint
          onPositionChange={({ currentPosition }) =>
            props.setSubscribe(currentPosition === Waypoint.inside)
          }
        />
        <SubscribeForm onSubmitted={formData => subscribe(formData)} />
        {status === 'sending' && (
          <div style={{ color: 'blue' }}>sending...</div>
        )}
        {status === 'error' && (
          <div
            style={{ color: 'red' }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === 'success' && (
          <div style={{ color: 'green' }}>Subscribed !</div>
        )}
      </Element>
    )}
  />
);

Subscribe.propTypes = {
  setSubscribe: PropTypes.func
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setSubscribe
    },
    dispatch
  );

export default withRouter(connect(null, mapDispatchToProps)(Subscribe));
