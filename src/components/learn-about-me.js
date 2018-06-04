import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

export function LearnAboutMe(props) {
  return (
    <div className="learn-container">
      Learn About Me
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LearnAboutMe);
