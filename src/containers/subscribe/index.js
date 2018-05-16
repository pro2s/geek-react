import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import SubscribeForm from '../../components/subscribeForm';
import { Element } from 'react-scroll';
import { setSubscribe } from '../../actions/pages';
import handleViewport from 'react-in-viewport'

const url = '//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn'
const ViewportBlock = handleViewport(SubscribeForm)

// use the render prop and your custom form
const Subscribe = props => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <Element id="subscribe">
        <ViewportBlock 
          onSubmitted={formData => subscribe(formData)} 
          onEnterViewport={() => props.setSubscribe(true)}
          onLeaveViewport={() => props.setSubscribe(false)} />
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

export default connect(null, mapDispatchToProps)(Subscribe);
