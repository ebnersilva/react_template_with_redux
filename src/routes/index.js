import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ListCharacters from '~/pages/ListCharacters';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={ListCharacters} />
    </Switch>
  );
}
