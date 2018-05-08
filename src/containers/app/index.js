import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import PropsRoute from '../../components/propsRoute';
import { Navigation, Footer } from '../../components/navigation';
import Page from '../../components/page';
import Counter from '../counter';
import About from '../about';
import Items from '../items';

const App = ({ pages, itemsPages }) => (
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
        <Route
          path={'/:page(' + itemsPages.join('|') + ')/:id'}
          exact
          component={Page}
        />
      </Switch>
    </main>
    <footer>
      <Footer pages={pages} />
    </footer>
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
  pages: PropTypes.array.isRequired,
  itemsPages: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  pages: state.site.pages,
  itemsPages: state.site.pages.filter(v => v.main === 'items').map(v => v.id)
});

export default connect(mapStateToProps)(App);
