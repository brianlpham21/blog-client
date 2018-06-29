import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import MainCarousel from './main-carousel';
import MainArticleSection from './main-article-section';
import MainArticleSection2 from './main-article-section-2';
import LearnAboutMe from './learn-about-me';

import {fetchPostsData} from '../actions/posts';

import './landing-page.css';

export class LandingPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPostsData());
  }

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/dashboard" />;
    }

    if (this.props.posts.length < 1) {
      return (
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      )
    }

    return (
      <div className="landing-page-container">
        <MainCarousel />
        <MainArticleSection />
        <LearnAboutMe />
        <MainArticleSection2 />

        <section id='instagram-feed'>
          <h2 className='instagram-feed-title'><a className='instagram-feed-link' target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/brianlpham21/">Instagram</a></h2>
          <div id='instafeed'></div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  posts: state.postsData.posts
});

export default connect(mapStateToProps)(LandingPage);
