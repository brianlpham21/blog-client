import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import NavBar from './navbar';
import LandingPage from './landing-page';

import LoginPage from './user/login-page';
import Dashboard from './user/dashboard';
// import RegistrationPage from './user/registration-page';

import ExperiencesPage from './pages/experiences-page';
import TravelPage from './pages/travel-page';
import TechPage from './pages/tech-page';
import AboutPage from './pages/about-page';

import PostPage from './post-page';

import Footer from './footer';

import {refreshAuthToken} from '../actions/auth';

export class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <div className="app">
        <NavBar />
        <Route exact path="/" component={LandingPage} />

        <Route path="/login" component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />

        <Route exact path="/category/experiences" component={ExperiencesPage} />
        <Route exact path="/category/travel" component={TravelPage} />
        <Route exact path="/category/tech" component={TechPage} />
        <Route path="/about" component={AboutPage} />

        <Route path="/post/:id" render={({match}) => <PostPage id={match.params.id} />} />

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));
