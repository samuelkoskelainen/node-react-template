import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import NoMatch from './components/NoMatch/NoMatch';
import Notes from './components/Notes/Notes';

const App: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default App;
