import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {Grid, Row, Col, Modal, Button} from 'react-bootstrap';

export class Footer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div className="footer-container">
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
                <a className="contact-link"><li onClick={this.handleShow}>Contact</li></a>
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

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Contact Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Contact</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Footer);
