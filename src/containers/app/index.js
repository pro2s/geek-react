import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { Navigation, Footer } from '../../components/navigation';
import Counter from '../counter';
import About from '../about';
import Pages from '../pages';
import { Grid } from 'react-bootstrap/lib';

const App = ({ pages }) => (
  <div>
    <header>
      <Navigation />
    </header>
    <main>
      <Grid>
        <Switch>
          <Route path={'/about-us'} exact component={About} />
          <Route path={'/counter'} exact component={Counter} />
          <Route
            path={'/:page(' + pages.join('|') + ')/:id?'}
            exact
            component={Pages}
          />
        </Switch>
      </Grid>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
);

App.propTypes = {
  pages: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  pages: state.site.pages.map(v => v.id)
});

export default connect(mapStateToProps)(App);
