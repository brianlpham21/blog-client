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
            <div className="nav-bar">
                <h1>My Blog Navigation Bar</h1>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Posts</li>
                </ul>
                
                <Navbar>
                  <Navbar.Header>
                    <Navbar.Brand>
                      <a href="#home">React-Bootstrap</a>
                    </Navbar.Brand>
                  </Navbar.Header>
                  <Nav>
                    <NavItem eventKey={1} href="#">
                      Home
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                      About
                    </NavItem>
                  </Nav>
                </Navbar>

                {logOutButton}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavBar);
