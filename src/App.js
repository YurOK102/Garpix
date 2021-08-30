import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Partners from './pages/Partners/Partners';
import ThanksAppleMusic from './pages/ThanksAppleMusic/ThanksAppleMusic';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Partners} />
        <Route exact path="/tam" component={ThanksAppleMusic} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
