import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import PropsRoute from '../../components/propsRoute';
import Navigation from '../../components/navigation';
import Counter from '../counter';
import About from '../about';
import Items from '../items';

const App = ({ pages }) => (
  <div>
    <header>
      <Navigation pages={pages} />
    </header>
    <main>
      <Switch>
        {pages.map((page, index) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
          <PropsRoute
            key={index}
            path={'/' + page.id}
            exact
            component={getCompomnent(page.main)}
            pageId={page.id}
          />
        ))}
      </Switch>
    </main>
  </div>
);

const getCompomnent = name => {
  switch (name) {
    case 'counter':
      return Counter;
    case 'about':
      return About;
    case 'items':
      return Items;
    default:
      return Counter;
  }
};
App.propTypes = {
  pages: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  pages: state.site.pages
});

export default connect(mapStateToProps)(App);
