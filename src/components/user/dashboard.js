import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchPostsData} from '../../actions/posts';

import DashboardPost from './dashboard-post';

import {Grid, Row, Col, Button} from 'react-bootstrap';

import './dashboard.css';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPostsData());
  }

  render() {
    let dashboardPosts = '';

    if (this.props.posts.length > 1) {
      dashboardPosts = this.props.posts.map((post, index) => {
        return <DashboardPost key={index} {...post}/>
      });
    }

    if (dashboardPosts.length < 1) {
      return (
        <div>
        </div>
      )
    }

    return (
      <div className="dashboard">
        <Grid>
          <Row className="welcome-title">
            <h3>Welcome to your dashboard, {this.props.name}!</h3>
          </Row>
          <Row>
            <Col className="add-post-button-container">
              <Button bsStyle="success" href="/dashboard/add" block>Add Post</Button>
            </Col>
          </Row>
          {dashboardPosts}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    posts: state.postsData.posts
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
