import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

export function MainArticleSection(props) {
  return (
    <div className="main-article-container">
      Article Section
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(MainArticleSection);
