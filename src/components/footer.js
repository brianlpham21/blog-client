import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import {Grid, Row, Col} from 'react-bootstrap';

export function Footer(props) {
  return (
    <div className="footer-container bg-info">
      <Grid>
        <Row>
          <Col md={6} mdPush={6}>
            <p>Copyright &copy; 2018</p>
          </Col>
          <Col md={6} mdPull={6}>
            <ul className="footer-links">
              <Link to="/about"><li>About</li></Link>
              <Link to="/category/experiences"><li>Experiences</li></Link>
              <Link to="/category/travel"><li>Travel</li></Link>
              <Link to="/category/tech"><li>Tech</li></Link>
              <Link to="/login"><li>Login</li></Link>
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
