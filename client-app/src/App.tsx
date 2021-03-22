import React, { Fragment } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Menu } from 'semantic-ui-react';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import NoMatch from './components/NoMatch/NoMatch';
import Notes from './components/Notes/Notes';

const App: React.FC = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/notes">
            <Notes />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
