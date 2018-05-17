import React from 'react';
import PropTypes from 'prop-types';
import { Page } from '../../components/pages';
import { Section } from '../../components/section';

const Pages = ({ match }) => (
  <React.Fragment>
    {match.params.id &&
      match.params.section && (
        <Page section={match.params.section} id={match.params.id} />
      )}
    {!match.params.id &&
      match.params.section && <Section section={match.params.section} />}
  </React.Fragment>
);

Pages.propTypes = {
  match: PropTypes.object.isRequired
};

export default Pages;
