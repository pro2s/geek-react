import React, { Component } from 'react';
import {
  Col,
  Well,
  Form,
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap/lib';

export default class SubscribeForm extends Component {
  render() {
    return (
      <Col md={12}>
        <Well>
          <p>
            Падпішыцеся! Мы будзем трымаць вас у курсе пра абнаўленні
            асартымента, зніжкі, акцыі і наогул жыццё нашай суполкі. Рассылка
            адбываецца не часцей чым раз на месяц.
          </p>
          <Form inline className="text-center">
            <FormGroup controlId="formInlineEmail">
              <FormControl type="email" placeholder="jane.doe@example.com" />
            </FormGroup>{' '}
            <FormGroup controlId="formInlineName">
              <FormControl type="text" placeholder="Jane" />
            </FormGroup>{' '}
            <FormGroup controlId="formInlineName">
              <FormControl type="text" placeholder="Doe" />
            </FormGroup>{' '}
            <Button type="submit">Send</Button>
          </Form>
        </Well>
      </Col>
    );
  }
}
