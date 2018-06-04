import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

import {Navbar, NavItem, Nav} from 'react-bootstrap';

export class NavBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    // Only render the log out button if we are logged in
    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = (
        <button onClick={() => this.logOut()}>Log out</button>
      );
    }
    return (
      <div className="navbar-container">
        <Navbar fixedTop collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Adventures</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/category/experiences">
                Experiences
              </NavItem>
              <NavItem eventKey={2} href="/category/travel">
                Travel
              </NavItem>
              <NavItem eventKey={3} href="/category/tech">
                Tech
              </NavItem>
              <NavItem eventKey={4} href="/about">
                About
              </NavItem>
            </Nav>
            <Nav pullRight>
             <NavItem eventKey={1} href="http://www.twitter.com" target="_blank">
              <i className="fab fa-twitter fa-lg"></i>
             </NavItem>
             <NavItem eventKey={2} href="http://www.instagram.com" target="_blank">
               <i className="fab fa-instagram fa-lg"></i>
             </NavItem>
             <NavItem eventKey={3} href="http://www.facebook.com" target="_blank">
               <i className="fab fa-facebook fa-lg"></i>
             </NavItem>
             <NavItem eventKey={4} href="http://www.github.com" target="_blank">
               <i className="fab fa-github fa-lg"></i>
             </NavItem>
           </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavBar);
