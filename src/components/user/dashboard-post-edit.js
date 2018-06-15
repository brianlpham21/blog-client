import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchIndividualPostData} from '../../actions/posts';

import {Grid, Row, Col} from 'react-bootstrap';

export class DashboardPostEdit extends React.Component {
  componentDidMount() {
    const search_id = this.props.id;
    this.props.dispatch(fetchIndividualPostData(search_id));
  }

  render() {
    if (!(this.props.post[0])) {
      return <div></div>;
    }

    return (
      <div className="dashboard">
        <Grid>
          <Row>
            <Col>
              <p>{this.props.post[0].title}</p>
              <p>{this.props.post[0].titleSubtext}</p>
              <p>{this.props.post[0].category}</p>
              <p>{this.props.post[0].photoLink}</p>
              <p>{this.props.post[0].photoCaption}</p>
              <p>{this.props.post[0].text}</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    post: state.postsData.post
  };
};

export default requiresLogin()(connect(mapStateToProps)(DashboardPostEdit));
