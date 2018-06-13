import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import MainCarousel from './main-carousel';
import MainArticleSection from './main-article-section';
import MainArticleSection2 from './main-article-section-2';
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
      <MainArticleSection2 />

      <section id='instagram-feed'>
        <h2 className='instagram-feed-title'>Instagram</h2>
        <div id="instafeed" className='instafeed'></div>
      </section>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
