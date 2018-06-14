import React from 'react';
import {connect} from 'react-redux';

import {Grid, Row} from 'react-bootstrap';

import Article from './article';

import {fetchPostsData} from '../actions/posts';

export class MainArticleSection extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPostsData());
  }

  render() {
    if (this.props.posts.length < 1) {
      return (
        <div></div>
      )
    }

    return (
      <div className="main-article-container">
        <Grid>
          <Row className="article-row">
            <Article number={3}/>
            <Article number={4}/>
          </Row>
          <Row className="article-row">
            <Article number={5}/>
            <Article number={6}/>
          </Row>
        </Grid>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  posts: state.postsData.posts
});

export default connect(mapStateToProps)(MainArticleSection);
