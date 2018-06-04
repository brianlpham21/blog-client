import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import {Grid, Row, Col} from 'react-bootstrap';

export function Footer(props) {
  return (
    <div className="footer-container bg-info">
      <Grid>
        <Row>
          <Col md={4}>
            <h4>Brians Adventures</h4>
          </Col>
          <Col md={2}>
            <h5>Explore</h5>
            <ul className="footer-links">
              <Link to="/about"><li>About</li></Link>
              <Link to="/category/experiences"><li>Experiences</li></Link>
              <Link to="/category/travel"><li>Travel</li></Link>
              <Link to="/category/tech"><li>Tech</li></Link>
              <Link to="/contact"><li>Contact</li></Link>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Follow</h5>
            <ul className="footer-links">
              <Link to="http://www.twttier.com"><li>Twitter</li></Link>
              <Link to="http://www.instagram.com"><li>Instagram</li></Link>
              <Link to="http://www.facebook.com"><li>Facebook</li></Link>
              <Link to="http://www.github.com"><li>Github</li></Link>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Admin</h5>
            <ul className="footer-links">
              <Link to="/login"><li>Login</li></Link>
            </ul>
          </Col>
        </Row>
        <Row>
        <Col className="footer-copyright">
          <p>&copy; 2018 | Brians Adventures. All Rights Reserved.</p>
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
