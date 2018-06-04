import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

import {Carousel, Button} from 'react-bootstrap';

import carousel from '../images/carousel.png';
import camera from '../images/camera.jpg';

export class MainCarousel extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    return (
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <a href="#"><img className="carousel-image" src={camera} /></a>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Button>Read More</Button>
              <br />
              <br />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href="#"><img className="carousel-image" src={camera} /></a>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Button>Read More</Button>
              <br />
              <br />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href="#"><img className="carousel-image" src={camera} /></a>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              <Button>Read More</Button>
              <br />
              <br />
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(MainCarousel);
