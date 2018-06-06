import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Well, Form, FormGroup, FormControl, Button, Alert } from 'react-bootstrap/lib';
import ReactHtmlParser from 'react-html-parser';

export default class SubscribeForm extends Component {
  constructor(props, context) {
    super(props, context);
    const { onSubmitted } = this.props;
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitted = onSubmitted;
    this.state = {
      email: '',
      name: '',
      lastname: ''
    };
  }

  static propTypes = {
    onSubmitted: PropTypes.func,
    status: PropTypes.string,
    message: PropTypes.string
  };

  submit() {
    this.state.email &&
      this.state.name &&
      this.state.lastname &&
      this.state.email.indexOf('@') > -1 &&
      this.onSubmitted({
        EMAIL: this.state.email,
        NAME: this.state.name + ' ' + this.state.lastname
      });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { status, message } = this.props;
    return (
      <Col md={12}>
        <Well>
          <p>
            Падпішыцеся! Мы будзем трымаць вас у курсе пра абнаўленні асартымента, зніжкі, акцыі і наогул жыццё нашай суполкі. Рассылка
            адбываецца не часцей чым раз на месяц.
          </p>
          <Form inline className="text-center" style={{ marginBottom: '20px' }}>
            <FormGroup controlId="formInlineEmail">
              <FormControl
                name="email"
                type="email"
                placeholder="jane.doe@example.com"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormGroup>{' '}
            <FormGroup controlId="formInlineName">
              <FormControl name="name" type="text" placeholder="Jane" value={this.state.name} onChange={this.handleChange} />
            </FormGroup>{' '}
            <FormGroup controlId="formInlineLastName">
              <FormControl name="lastname" type="text" placeholder="Doe" value={this.state.lastname} onChange={this.handleChange} />
            </FormGroup>{' '}
            <Button onClick={this.submit}>Send</Button>
          </Form>
          {status === 'sending' && <Alert bsStyle="info"> Sending... </Alert>}
          {status === 'error' && <Alert bsStyle="danger">{ReactHtmlParser(message)}</Alert>}
          {status === 'success' && <Alert bsStyle="success"> Subscribed ! </Alert>}
        </Well>
      </Col>
    );
  }
}
