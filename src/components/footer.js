import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {Grid, Row, Col, Modal, Button, HelpBlock, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

import logo from '../images/adventures-logo-md.png';

import './footer.css';

export class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <Grid>
          <Row>
            <Col md={4}>
              <img src={logo} alt="logo" className="footer-logo" />
              <ul className="footer-links footer-information">
                <li><a href="mailto:brianlpham21@gmail.com"><i className="far fa-envelope"></i><span className="footer-text"> brianlpham21@gmail.com</span></a></li>
                <li><a href="http://www.brianpham.co" target="_blank"><i className="far fa-address-card"></i><span className="footer-text">Portfolio Website</span></a></li>
                <li><i className="fas fa-map-marker-alt"></i><span className="footer-text"> Orange County, CA</span></li>
              </ul>
            </Col>
            <Col md={2}>
              <h5>Explore</h5>
              <ul className="footer-links">
                <a href="/about"><li>About</li></a>
                <a href="/category/experiences"><li>Experiences</li></a>
                <a href="/category/travel"><li>Travel</li></a>
                <a href="/category/tech"><li>Tech</li></a>
              </ul>
            </Col>
            <Col md={2}>
              <h5>Follow</h5>
              <ul className="footer-links">
                <a href="http://www.twitter.com/brianlpham21" target="_blank" rel="noopener noreferrer"><li>Twitter</li></a>
                <a href="http://www.instagram.com/brianlpham21" target="_blank" rel="noopener noreferrer"><li>Instagram</li></a>
                <a href="http://www.facebook.com/blpham" target="_blank" rel="noopener noreferrer"><li>Facebook</li></a>
                <a href="http://www.github.com/brianlpham21" target="_blank" rel="noopener noreferrer"><li>GitHub</li></a>
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
            <p>&copy; 2018 | Brian&#39;s Adventures. All Rights Reserved.</p>
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

export default connect(mapStateToProps)(Footer);
