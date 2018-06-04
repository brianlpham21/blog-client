import React from 'react';
import {connect} from 'react-redux';

import LoginForm from './login-form';

import {Link, Redirect} from 'react-router-dom';

export function LoginPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className='login-page'>
      <LoginForm />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
