import React from 'react';
import {selectFollowingUsers} from '../../reducers/selectors';
import {values} from 'lodash';

class FollowsIndex extends React.Component {
  constructor (props) {
    super(props);

  }

  componentWillMount() {
    this.props.requestAllUsers();
    this.props.requestSingleUser(this.props.match.params.userId);
  }

  render() {
    let followers = selectFollowingUsers(this.props.users, this.props.user.followers);
    let followees = selectFollowingUsers(this.props.users, this.props.user.followees);
    let { currentUser, user } = this.props;
    return (
      <div className='follows-container'>

      </div>
    )
  }

}

export default FollowsIndex;
