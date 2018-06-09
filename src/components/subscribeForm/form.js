import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';

const doSubmit = (values, onSubmit) => {
  onSubmit({
    EMAIL: values.email,
    NAME: [values.name, values.lastName].join(' ')
  });
};

const FinalSubscribeForm = ({ onSubmit }) => (
  <Form
    onSubmit={values => doSubmit(values, onSubmit)}
    render={({ handleSubmit, pristine, invalid }) => (
      <form onSubmit={handleSubmit}>
        <h2>Subscribe</h2>
        <div>
          <label>Email</label>
          <Field name="email" component="input" placeholder="email" />
        </div>
        <div>
          <label>First Name</label>
          <Field name="name" component="input" placeholder="First Name" />
        </div>
        <div>
          <label>Last Name</label>
          <Field name="lastName" component="input" placeholder="Last Name" />
        </div>
        <button type="submit" disabled={pristine || invalid}>
          Submit
        </button>
      </form>
    )}
  />
);

FinalSubscribeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default FinalSubscribeForm;
