import React from 'react';
import { Link } from 'react-router-dom';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount () {
    this.props.requestSingleUser(this.props.match.params.userId);
  }


  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.requestSingleUser(nextProps.match.params.userId);
    }
  }

render () {
  const {user} = this.props;

  return (
    <div className="post-detail">
        <h1> {user.username}</h1>
        <h2> {user.description}</h2>
    </div>
  );
 }

}

export default UserProfile;
