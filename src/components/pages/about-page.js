import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../../actions/auth';
import {clearAuthToken} from '../../local-storage';

import {Grid, Row, Col} from 'react-bootstrap';
// import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

export class AboutPage extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    return (
      <div className="about-container">
        <Grid>
          <Row>
            <Col>
              <h3>About Section</h3>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(AboutPage);
