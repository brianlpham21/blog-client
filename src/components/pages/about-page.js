import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../../actions/auth';
import {clearAuthToken} from '../../local-storage';

import {Grid, Row, Col, Image, Panel} from 'react-bootstrap';

import './about-page.css';

export class AboutPage extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    return (
      <div className="about-container">
        <Grid>
          <Row className="about-main">
            <Col md={8}>
              <h3>About Section</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. </p>
              <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. </p>
              <p>Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. </p>
            </Col>
            <Col md={4}>
              <Image className="about-image" src="https://www.eaglehills.com/-/media/eaglehills/masonry/morocco/rabat-square/rabat-square-tile-01-466x466.jpg?h=466&la=en&w=466&hash=7A930AF5233019A0E0D4A4CF767F478183DBB4E9" circle responsive />
            </Col>
          </Row>
          <Row className="about-subsection">
            <Col md={3}>
              <Panel className="about-panel">
                <Panel.Heading className="about-title">
                  <Panel.Title className="about-title-icon"><i className="fas fa-adjust fa-2x"></i></Panel.Title>
                  <Panel.Title componentClass="h3">Web Developer</Panel.Title>
                </Panel.Heading>
                <Panel.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</Panel.Body>
              </Panel>
            </Col>
            <Col md={3}>
              <Panel className="about-panel">
                <Panel.Heading className="about-title">
                  <Panel.Title className="about-title-icon"><i className="fas fa-adjust fa-2x"></i></Panel.Title>
                  <Panel.Title componentClass="h3">Beer Connoisseur</Panel.Title>
                </Panel.Heading>
                <Panel.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</Panel.Body>
              </Panel>
            </Col>
            <Col md={3}>
              <Panel className="about-panel">
                <Panel.Heading className="about-title">
                  <Panel.Title className="about-title-icon"><i className="fas fa-adjust fa-2x"></i></Panel.Title>
                  <Panel.Title componentClass="h3">Football Diehard</Panel.Title>
                </Panel.Heading>
                <Panel.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</Panel.Body>
              </Panel>
            </Col>
            <Col md={3}>
              <Panel className="about-panel">
                <Panel.Heading className="about-title">
                  <Panel.Title className="about-title-icon"><i className="fas fa-adjust fa-2x"></i></Panel.Title>
                  <Panel.Title componentClass="h3">Fitness Freak</Panel.Title>
                </Panel.Heading>
                <Panel.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</Panel.Body>
              </Panel>
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
