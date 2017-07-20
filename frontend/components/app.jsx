import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Link} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import NavBarContainer from './nav/nav_bar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import PinsIndexContainer from './pin/pins_index_container';


const App = () => (
  <div>
    <NavBarContainer/>
    <PinsIndexContainer/>
    <Switch>
    </Switch>
  </div>
);

export default App;

// <AuthRoute path="/signup" component={SessionFormContainer} />
// <AuthRoute path="/login" component={SessionFormContainer} />
// <ProtectedRoute path="/" component={NavBarContainer} />
//
// <ProtectedRoute exact path="/" component={PinsIndexContainer} />
