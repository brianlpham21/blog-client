import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

import {Carousel} from 'react-bootstrap';

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
            <Link to="#"><img className="carousel-image" src="https://lh3.googleusercontent.com/ettndZJuPFSJGIRYuyEctYbuWbiPVdm10-BnyXtYRwFui8RtZNCqvGR70Lq091AJripzc5ga2KB2u7vMznEvyAG9yLXNITQcy2hZFl8x3bEALqDUnLVm7YmRpoEw7vNRykKoEH_tyFMBYPq8-p15X2B-1o09TivPPgoti8Vz3pGeMfRw8j1Kzo8hB2htYxGlgNBA4yCOSjpo2uTOeDUuYc5clPdfYoGOzFICSZpFIerYXHeLPKjp6dDnnpjcqJjWGfu3hPYU5IaabmZhVkT4h0G8Cacs1GS5AtoaqD8jszvg0B0zIQ2Qfb4FfWDEeEKFbbRHaNaIoifu5QfQH8XUOqIbxpNtzIPhLlhxHATgVxX7Frge189KGx1x_qdstFIYBOR0dH3KXIx9iAdBAuB_YsMJ5b0fcjuV9OR9dmyYKnNThcYX-YdBaKU6WUqt9MgC_Eee7ZZQtpqmb1HmGxOZXFFeROSSqbldcC-2bdBg5SIY6E5XSZVfYoJuI6aXzjDeBAmrtm2T6XIi0m--pELul1Yy-NdOV5MDxI2W-RIi20O81P2HDoELPmQ2JOdQ4dpYPdsQPgD5Ex2DOU7Zz140PZ0wWluU3uLS0rXb0xU=w2142-h1606-no" alt="Carousel 1" /></Link>
            <Carousel.Caption>
              <h3 className="carousel-title">First slide label</h3>
              <p className="carousel-text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Link to="#"><button className="button">Read More</button></Link>
              <br />
              <br />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="overlay">
            <Link to="#"><img className="carousel-image" src="https://images.unsplash.com/photo-1508749627231-ce8a002264e9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=489d758ee431756f66ac69c154427afb&auto=format&fit=crop&w=1950&q=80" alt="Carousel 2" /></Link>
            <Carousel.Caption>
              <h3 className="carousel-title">Second slide label</h3>
              <p className="carousel-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Link to="#"><button className="button">Read More</button></Link>
              <br />
              <br />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="overlay">
            <Link to="#"><img className="carousel-image" src="https://images.unsplash.com/photo-1504416285472-eccf03dd31eb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a121a890a07652296c0cff8d74f242ef&auto=format&fit=crop&w=1952&q=80" alt="Carousel 3" /></Link>
            <Carousel.Caption>
              <h3 className="carousel-title">Third slide label</h3>
              <p className="carousel-text">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
