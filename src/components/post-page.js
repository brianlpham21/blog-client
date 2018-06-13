import React from 'react';
import {connect} from 'react-redux';

import {fetchPostsData} from '../actions/posts';

export class PostPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPostsData());
  }

  render() {
    const id = this.props.id;

    let individualPost = '';

    if (this.props.posts.length > 1) {
      individualPost = (this.props.posts.filter(function(post) {
        return post.id === id;
      }));
    }

    console.log(individualPost);

    return (
      <div className="post-container">
        <h3>Post Page</h3>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  posts: state.postsData.posts
});

export default connect(mapStateToProps)(PostPage);
