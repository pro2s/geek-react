import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

let ContactForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">First Name</label>
        <Field name="name" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastname">Last Name</label>
        <Field name="lastname" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func
};

ContactForm = reduxForm({
  form: 'contact'
})(ContactForm);

export default ContactForm;
