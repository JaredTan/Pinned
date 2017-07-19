import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Link} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute } from '../util/route_util';
import Image from './image/cloud';


const App = () => (
  <div>
    <header>
      <Link to="/" className="header">
        <h1>Pinned</h1>
      </Link>
    </header>
    <GreetingContainer/>
    <Switch>
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <Route path="/images" component={Image} />
    </Switch>
  </div>
);

export default App;
