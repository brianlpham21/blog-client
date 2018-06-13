import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';

import {Row, Col, Button} from 'react-bootstrap';

import './dashboard-post.css';

export class Dashboard extends React.Component {
  render() {
    if (!(this.props.category)) {
      return <div></div>
    }

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
        <Col md={3}>
          <Button bsStyle="danger">Delete</Button>
          <Button bsStyle="primary">Edit</Button>
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

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
