import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import SubscribeForm from '../../components/subscribeForm';

const url = '//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn';

// use the render prop and your custom form
const Subscribe = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div id="subscribe">
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
      </div>
    )}
  />
);

export default Subscribe;
