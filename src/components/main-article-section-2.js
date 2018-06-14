import React from 'react';
import {connect} from 'react-redux';

import {Grid, Row} from 'react-bootstrap';

import Article from './article';

import {fetchPostsData} from '../actions/posts';

export class MainArticleSection2 extends React.Component {
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
            <Article number={7}/>
            <Article number={8}/>
          </Row>
          <Row className="article-row">
            <Article number={9}/>
            <Article number={10}/>
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

export default connect(mapStateToProps)(MainArticleSection2);
