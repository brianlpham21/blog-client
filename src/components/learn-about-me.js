import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export function LearnAboutMe(props) {
  return (
    <div className="learn-container" style={{backgroundImage: "url('https://images.unsplash.com/photo-1519865402023-40e4b7bfcba0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7ff1b07d24dfa8aead0b040f1681dbb4&auto=format&fit=crop&w=1950&q=80')"}}>
      <div className="learn-contents">
        <h2>Learn About Me</h2>
        <p>The experiences that I have had throughout my life have definitely shaped
        who I am as a person. I am always changing and growing and I hope that
        logging my thoughts and experiences can help me map out who I want to be.</p>
        <Link to="/about"><button className="button">Learn More</button></Link>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LearnAboutMe);
