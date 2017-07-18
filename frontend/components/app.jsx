import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Link} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute } from '../util/route_util';


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
      <Route path='/' render={() => <span></span>}/>
    </Switch>
  </div>
);

export default App;
