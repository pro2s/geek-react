import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { Navigation, Footer } from '../../components/navigation';
import Counter from '../counter';
import About from '../about';
import Pages from '../pages';
import Index from '../index';
import { Grid } from 'react-bootstrap/lib';
import Subscribe from '../subscribe';
import './app.css';

const App = ({ sections }) => (
  <div>
    <header>
      <Navigation />
    </header>
    <main>
      <Grid>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/about-us" exact component={About} />
          <Route path="/counter" exact component={Counter} />
          <Route path={'/:section(' + sections.join('|') + ')/:id?'} exact component={Pages} />
        </Switch>
        <Subscribe />
      </Grid>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
);

App.propTypes = {
  sections: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  sections: state.site.sections.map(v => v.id)
});

export default connect(mapStateToProps)(App);
