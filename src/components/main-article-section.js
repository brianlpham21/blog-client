import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import {Grid, Row, Col} from 'react-bootstrap';

export function MainArticleSection(props) {
  return (
    <div className="main-article-container">
      <Grid>
        <Row>
          <Col md={6} mdPush={6}>
            Articles
          </Col>
          <Col md={6} mdPull={6}>
            Articles
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(MainArticleSection);
