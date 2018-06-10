import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

const FieldGroup = ({ input, meta, id, label, children, ...rest }) => {
  const hasError = meta.touched && (meta.error || meta.submitError);
  const groupStyle = { verticalAlign: 'top', marginRight: '5px' };
  return (
    <FormGroup style={groupStyle} controlId={id} validationState={hasError ? 'error' : null}>
      {label && <ControlLabel>{label}</ControlLabel>}
      <FormControl {...input} {...rest}>
        {children}
      </FormControl>
      {hasError && <HelpBlock>{meta.error || meta.submitError}</HelpBlock>}
    </FormGroup>
  );
};

FieldGroup.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  children: PropTypes.node,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  componentClass: PropTypes.string
};

export default FieldGroup;
