import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import MainCarousel from './main-carousel';
import MainArticleSection from './main-article-section';
import LearnAboutMe from './learn-about-me';

export function LandingPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="landing-page-container">
      <MainCarousel />
      <MainArticleSection />
      <LearnAboutMe />
      <MainArticleSection />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
