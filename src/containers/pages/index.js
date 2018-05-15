import React from 'react';
import PropTypes from 'prop-types';
import { Page } from '../../components/pages';
import { Section } from '../../components/section';

const Pages = ({ match }) => {
  if (match.params.id && match.params.section) {
    return <Page section={match.params.section} id={match.params.id} />;
  } else if (match.params.section) {
    return <Section section={match.params.section} />;
  } else {
    return null;
  }
};

Pages.propTypes = {
  match: PropTypes.object.isRequired
};

export default Pages;
