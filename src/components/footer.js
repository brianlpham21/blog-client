import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import {Grid, Row, Col} from 'react-bootstrap';

export function Footer(props) {
  return (
    <div className="footer-container">
      <Grid>
        <Row>
          <Col md={6} mdPush={6}>
            <p>Copyright &copy; 2018</p>
          </Col>
          <Col md={6} mdPull={6}>
            <ul>
              <a href="/about"><li>About</li></a>
              <a href="/category/experiences"><li>Experiences</li></a>
              <a href="/category/travel"><li>Travel</li></a>
              <a href="/category/tech"><li>Tech</li></a>
              <a href="/login"><li>Login</li></a>
            </ul>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Footer);
