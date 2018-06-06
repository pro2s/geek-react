import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import SubscribeForm from '../../components/subscribeForm';
import { Element } from 'react-scroll';
import { setSubscribe } from '../../actions/pages';
import handleViewport from 'react-in-viewport';
import ContactForm from '../../components/subscribeForm/subscribe';

const url = '//pro2s.us18.list-manage.com/subscribe/post?u=088f80678ba7462554439a9c8&amp;id=c0254eef84';
const ViewportBlock = handleViewport(SubscribeForm);

// use the render prop and your custom form
const Subscribe = props => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <Element id="subscribe">
        <ContactForm
          onSubmit={values => {
            subscribe({
              EMAIL: values.email,
              NAME: values.name + ' ' + values.lastname
            });
          }}
        />
        <ViewportBlock
          onSubmitted={formData => subscribe(formData)}
          onEnterViewport={() => props.setSubscribe(true)}
          onLeaveViewport={() => props.setSubscribe(false)}
          status={status}
          message={message}
        />
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
