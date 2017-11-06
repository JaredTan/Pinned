import React from 'react';
import SessionFormContainer from './session/session_form_container';
import NavBarContainer from './nav/nav_bar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import UserProfileContainer from './profile/user_profile_container';
import PinsIndexContainer from './pin/pins_index_container';

const App = () => (
  <div>
    <ProtectedRoute path="/" component={NavBarContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <AuthRoute path="/login" component={SessionFormContainer} />
    <ProtectedRoute path="/users/:userId" component={UserProfileContainer} />
    <ProtectedRoute path="/boards/:boardId" component={PinsIndexContainer} />
    <ProtectedRoute exact path="/" component={PinsIndexContainer} />
  </div>
);

export default App;
