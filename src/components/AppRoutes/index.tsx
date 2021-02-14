import Characters from '@Screens/Characters';
import Episodes from '@Screens/Episodes';
import Home from '@Screens/Home';
import Locations from '@Screens/Locations';
import NotFound from '@Screens/NotFound';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

type AppRoutes = () => JSX.Element;

const AppRoutes: AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/characters" component={Characters} />
      <Route exact path="/locations" component={Locations} />
      <Route exact path="/episodes" component={Episodes} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default AppRoutes;
