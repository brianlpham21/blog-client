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
    let style = {
      padding: '0 5px',
      borderRadius: '5px',
      color: 'black'
    };

    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = (
        <button onClick={() => this.logOut()} style={style}>Log out</button>
      );
    };

    return (
      <div className="navbar-container">
        <Navbar fixedTop collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Brian&#39;s Adventures</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem className={window.location.pathname === "/category/experiences" ? "active" : ""} eventKey={1} href="/category/experiences">
                Experiences
              </NavItem>
              <NavItem className={window.location.pathname === "/category/travel" ? "active" : ""} eventKey={2} href="/category/travel">
                Travel
              </NavItem>
              <NavItem className={window.location.pathname === "/category/tech" ? "active" : ""} eventKey={3} href="/category/tech">
                Tech
              </NavItem>
              <NavItem className={window.location.pathname === "/about" ? "active" : ""} eventKey={4} href="/about">
                About
              </NavItem>
              <NavItem eventKey={5}>
                {logOutButton}
              </NavItem>
            </Nav>
            <Nav pullRight>
             <NavItem eventKey={1} href="http://www.twitter.com/brianlpham21" target="_blank">
              <i className="fab fa-twitter fa-lg"></i>
             </NavItem>
             <NavItem eventKey={2} href="http://www.instagram.com/brianlpham21" target="_blank">
               <i className="fab fa-instagram fa-lg"></i>
             </NavItem>
             <NavItem eventKey={3} href="http://www.facebook.com/blpham" target="_blank">
               <i className="fab fa-facebook fa-lg"></i>
             </NavItem>
             <NavItem eventKey={4} href="http://www.github.com/brianlpham21" target="_blank">
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
