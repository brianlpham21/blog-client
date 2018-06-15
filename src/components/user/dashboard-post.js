import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {deleteIndividualPost} from '../../actions/posts';

import {Row, Col, Button} from 'react-bootstrap';

import './dashboard-post.css';

export class DashboardPost extends React.Component {
  deletePost(event) {
    const result = window.confirm('Are you sure?')
    if (result) {
      this.props.dispatch(deleteIndividualPost(this.props.id))
        .then(data => window.location.reload());
    }
  }

  render() {
    if (!(this.props.category)) {
      return <div></div>
    }

    const link = '/dashboard/edit/' + this.props.id;

    return (
      <Row className="dashboard-post">
        <Col md={3}>
          {this.props.title}
        </Col>
        <Col md={3}>
          {this.props.date}
        </Col>
        <Col md={3}>
          {this.props.category}
        </Col>
        <Col md={3} className="dashboard-post-buttons">
          <Button bsStyle="danger" onClick={(event) => this.deletePost(event)}>Delete</Button>
          <Button bsStyle="primary" href={link}>Edit</Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`
  };
};

export default requiresLogin()(connect(mapStateToProps)(DashboardPost));
