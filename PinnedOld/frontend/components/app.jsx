import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Link} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import NavBarContainer from './nav/nav_bar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Image from './image/cloud';


const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <ProtectedRoute path="/" component={NavBarContainer} />
      <Route path="/images" component={Image} />
    </Switch>
  </div>
);

export default App;
