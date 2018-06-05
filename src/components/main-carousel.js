import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

import {Carousel} from 'react-bootstrap';

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
          <Carousel.Item className="overlay">
            <Link to="#"><img className="carousel-image" src={camera} alt="Carousel 1" /></Link>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Link to="#"><button className="button">Read More</button></Link>
              <br />
              <br />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="overlay">
            <Link to="#"><img className="carousel-image" src={camera} alt="Carousel 2" /></Link>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Link to="#"><button className="button">Read More</button></Link>
              <br />
              <br />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="overlay">
            <Link to="#"><img className="carousel-image" src={camera} alt="Carousel 3" /></Link>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              <Link to="#"><button className="button">Read More</button></Link>
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
