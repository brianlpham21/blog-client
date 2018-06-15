import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {Grid, Row, Col, Modal, Button, HelpBlock, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

import logo from '../images/adventures-logo-md.png';

import './footer.css';

export class Footer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

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

  handleSubmit() {
    console.log('submitted');
    this.setState({ show: false });
  }

  render() {
    function FieldGroup({ id, label, help, ...props }) {
      return (
        <FormGroup controlId={id}>
          <ControlLabel>{label}</ControlLabel>
          <FormControl {...props} />
          {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
      );
    }

    return (
      <div className="footer-container">
        <Grid>
          <Row>
            <Col md={4}>
              <img src={logo} alt="logo" className="footer-logo" />
              <ul className="footer-links footer-information">
                <li><a href="mailto:brianlpham21@gmail.com"><i className="far fa-envelope"></i><span className="footer-text">brianlpham21@gmail.com</span></a></li>
                <li><i className="fas fa-map-marker-alt"></i><span className="footer-text"> Orange County, CA</span></li>
                <li></li>
              </ul>
            </Col>
            <Col md={2}>
              <h5>Explore</h5>
              <ul className="footer-links">
                <a href="/about"><li>About</li></a>
                <a href="/category/experiences"><li>Experiences</li></a>
                <a href="/category/travel"><li>Travel</li></a>
                <a href="/category/tech"><li>Tech</li></a>
                <a className="contact-link"><li onClick={this.handleShow}>Contact</li></a>
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

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Contact Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Hey! Please let me know what you think.</p>
            <form>
              <FieldGroup
                id="formControlsText"
                type="name"
                label="Name"
                placeholder="Enter your name"
              />
              <FieldGroup
                id="formControlsEmail"
                type="email"
                label="Email address"
                placeholder="Enter your email"
              />
              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Textarea</ControlLabel>
                <FormControl componentClass="textarea" placeholder="textarea" />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleSubmit} disabled>Submit</Button>
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
