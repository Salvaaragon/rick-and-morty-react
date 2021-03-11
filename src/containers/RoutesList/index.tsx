import Characters from '@Containers/Characters';
import Episodes from '@Containers/Episodes';
import Home from '@Containers/Home';
import Locations from '@Containers/Locations';
import NotFound from '@Containers/NotFound';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const RoutesList: React.FC = () => {
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

export default RoutesList;
