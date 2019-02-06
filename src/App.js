import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SearchPage, ListPage, DetailsPage } from './pages';
import { GlobalStyles } from './styles';

const App = () => (
  <Fragment>
    <GlobalStyles />
    <ThemeProvider theme={{}}>
      <Router>
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/list" component={ListPage} />
          <Route path="/movie/:id/:name" component={DetailsPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  </Fragment>
);

export default App;
