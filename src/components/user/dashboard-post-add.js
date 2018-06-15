import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';

import {Grid, Row, Col} from 'react-bootstrap';

export class DashboardPostAdd extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <Grid>
          <Row>
            <Col>
              <p>Post Add</p>
            </Col>
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
  };
};

export default requiresLogin()(connect(mapStateToProps)(DashboardPostAdd));
