import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../../actions/protected-data';
import {fetchPostsData} from '../../actions/posts';

import {Grid, Row, Col, Button} from 'react-bootstrap';

import './dashboard.css';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
    this.props.dispatch(fetchPostsData());
  }

  render() {
    return (
      <div className="dashboard">
        <Grid>
          <Row className="welcome-title">
            <h3>Welcome to your dashboard, {this.props.name}!</h3>
          </Row>
          <Row>
            <Col md={4}>
              <Button bsStyle="success" block>Add Post</Button>
            </Col>
            <Col md={4}>
              <Button bsStyle="primary" block>Edit Post</Button>
            </Col>
            <Col md={4}>
              <Button bsStyle="danger" block>Delete Post</Button>
            </Col>
          </Row>
          <Row>
          </Row>
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
