import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import {Button} from 'react-bootstrap';

export function LearnAboutMe(props) {
  return (
    <div className="learn-container">
      <div className="learn-contents">
        <h2>Learn About Me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.</p>
        <Button href="/about">Learn More</Button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LearnAboutMe);
