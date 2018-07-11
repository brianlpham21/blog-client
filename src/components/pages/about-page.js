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
              <h3>About Brian</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. </p>
              <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. </p>
              <p>Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. </p>
            </Col>
            <Col md={4}>
              <Image className="about-image" src="https://lh3.googleusercontent.com/oxTlAQcf5yLD2wdGZaHTCAHVNgd0Rpfj1bgyNlHQv5chEQV3QyM31Q3jQMbpnKj1vkb1lCOn9AEhDh4-kZqiPhva8u4rHlM7suRf20mn9owehwMMCQcYLCunlHrD54whGF6HDtkmIUW8I7mhaB37YgYkp3w3A9mDZu_f9wk7O3brdeJq2gaq8l0OagoOtH7JFhiKqAMRVnWd_qI5-rHZsp2uTD_WcGs1c6cVYlixF-bPODn_imwD5MPRj-AHSalBmuXUJycdRMOIovtbK2gkdKd9o3HUqX1X_Uzyq3SgUJ9BHH-RASAHT99VhIbcfZHoTqaBhs6fkpIDfji2aJzhr4P0lLvHccOefC14gZ9xE-Yb6JZMSB459dLGYYiJA0Z8RCXHzyANk5h6MuEsnUJsYW_37l4DXiGD1PzwuB7EGQ7UQDsyJIQlYHq2sd2yeeJ9I2T2q2zHGcdxWIc_bJ4aNKk35DDaXF1sNLfP7CBq3WMn-fua3E7tDzqziJjLDFdiwWCmjN0ed4M9Ps8CCBi3TnjCvVrtGoqIsAR1ylwirc1SXHXaOGSXZLMk1sh2YWkPjuiQbyKeIEF6780-lYbDRTnEBbFV_p1RBcunslY=w750-h739-no" circle responsive />
            </Col>
          </Row>
          <Row className="about-subsection">
            <Col md={3}>
              <Panel className="about-panel">
                <Panel.Heading className="about-title">
                  <Panel.Title className="about-title-icon"><i className="fas fa-code fa-2x"></i></Panel.Title>
                  <Panel.Title componentClass="h3">Web Developer</Panel.Title>
                </Panel.Heading>
                <Panel.Body>Having an outlet for my creativity through technology
                has been one of my great passions and definitely the best discovery
                I could have made for myself as well as for my career. Web Dev and
                technology has nearly taken over my life in the greatest way.</Panel.Body>
              </Panel>
            </Col>
            <Col md={3}>
              <Panel className="about-panel">
                <Panel.Heading className="about-title">
                  <Panel.Title className="about-title-icon"><i className="fas fa-beer fa-2x"></i></Panel.Title>
                  <Panel.Title componentClass="h3">Beer Connoisseur</Panel.Title>
                </Panel.Heading>
                <Panel.Body>From IPAs to Amber Ales, my love for great beer came
                almost instantly when I was able to enjoy them at the age of 21. Like
                fitness, beer is probably another thing that brings me great stress
                relief and joy. If you need a brewery recommendation, I am happy to
                give mine.</Panel.Body>
              </Panel>
            </Col>
            <Col md={3}>
              <Panel className="about-panel">
                <Panel.Heading className="about-title">
                  <Panel.Title className="about-title-icon"><i className="fas fa-football-ball fa-2x"></i></Panel.Title>
                  <Panel.Title componentClass="h3">Football Diehard</Panel.Title>
                </Panel.Heading>
                <Panel.Body>Football has always been a sport I enjoyed playing
                and watching. I played flag football growing up and high school football
                in Valencia. However, my serious passion for the game only erupted recently
                in my second year of college.</Panel.Body>
              </Panel>
            </Col>
            <Col md={3}>
              <Panel className="about-panel">
                <Panel.Heading className="about-title">
                  <Panel.Title className="about-title-icon"><i className="fas fa-walking fa-2x"></i></Panel.Title>
                  <Panel.Title componentClass="h3">Fitness Freak</Panel.Title>
                </Panel.Heading>
                <Panel.Body>One of the pastimes that I know I will never let go of is
                physical fitness, whether it be exercising in the gym, playing sports
                with some buddies, or taking classes. Fitness brings order and structure to
                my life and definitely keeps me sane.</Panel.Body>
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
