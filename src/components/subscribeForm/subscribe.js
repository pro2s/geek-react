import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.lastname) {
    errors.lastname = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

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
  form: 'contact',
  validate
})(ContactForm);

export default ContactForm;
