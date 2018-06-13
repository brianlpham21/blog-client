import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../../actions/protected-data';
import {fetchPostsData} from '../../actions/posts';

import DashboardPost from './dashboard-post';

import {Grid, Row, Col, Button} from 'react-bootstrap';

import './dashboard.css';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
    this.props.dispatch(fetchPostsData());
  }

  render() {
    let dashboardPosts = '';

    dashboardPosts = this.props.posts.map((post, index) => {
      return <DashboardPost key={index} {...post}/>
    });

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
            <Col>
              <Button bsStyle="success" block>Add Post</Button>
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
    protectedData: state.protectedData.data,
    posts: state.postsData.posts
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
