import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Results } from './Results';

export const Routes = () => (
  <div className="p-4">
    <Switch>
      <Route exact path="/">
        <Results />
      </Route>
    </Switch>
  </div>

);
