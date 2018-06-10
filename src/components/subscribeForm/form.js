import React from 'react';
import PropTypes from 'prop-types';
import { Form as FinalForm, Field } from 'react-final-form';
import { Col, Well, Form, Button } from 'react-bootstrap/lib';
import FieldGroup from './fieldGroup';

const formStyle = { marginBottom: '20px' };
const preSubmit = onSubmit => values => {
  onSubmit({
    EMAIL: values.email,
    NAME: [values.name, values.lastName].join(' ')
  });
};

const FinalSubscribeForm = ({ onSubmit }) => (
  <Col md={12}>
    <Well>
      <p>
        Падпішыцеся! Мы будзем трымаць вас у курсе пра абнаўленні асартымента, зніжкі, акцыі і наогул жыццё нашай суполкі. Рассылка
        адбываецца не часцей чым раз на месяц.
      </p>
      <FinalForm
        onSubmit={preSubmit(onSubmit)}
        render={({ handleSubmit, pristine, invalid }) => (
          <Form inline className="text-center" style={formStyle} onSubmit={handleSubmit}>
            <Field id="email" component={FieldGroup} name="email" type="email" placeholder="jane.doe@example.com" />
            <Field id="name" component={FieldGroup} name="name" type="text" placeholder="Jane" />
            <Field id="lastname" component={FieldGroup} name="lastname" type="text" placeholder="Doe" />
            <Button onClick={handleSubmit} disabled={pristine || invalid}>
              Send
            </Button>
          </Form>
        )}
      />
    </Well>
  </Col>
);

FinalSubscribeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default FinalSubscribeForm;
