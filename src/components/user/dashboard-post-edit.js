import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchIndividualPostData} from '../../actions/posts';

import {Grid, Row, Col, FormGroup, ControlLabel, FormControl, Radio, Button, HelpBlock} from 'react-bootstrap';

export class DashboardPostEdit extends React.Component {
  componentDidMount() {
    const search_id = this.props.id;
    this.props.dispatch(fetchIndividualPostData(search_id));
  }

  render() {
    if (!(this.props.post[0])) {
      return <div></div>;
    }

    function FieldGroup({ id, label, help, ...props }) {
      return (
        <FormGroup controlId={id}>
          <ControlLabel>{label}</ControlLabel>
          <FormControl {...props} />
          {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
      );
    }

    return (
      <div className="dashboard">
        <Grid>
          <Row>
            <Col>
              <form>
                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="Title"
                  value={this.props.post[0].title}
                />

                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="Subtext"
                  value={this.props.post[0].titleSubtext}
                />

                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="Category"
                  value={this.props.post[0].category}
                />

                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="Photo Link"
                  value={this.props.post[0].photoLink}
                />

                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="Photo Caption"
                  value={this.props.post[0].photoCaption}
                />

                <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>Text</ControlLabel>
                  <FormControl componentClass="textarea" value={this.props.post[0].text} />
                </FormGroup>

                <Button type="submit" bsStyle="primary">Submit</Button>
                <Button bsStyle="danger">Delete</Button>
                <Button>Cancel</Button>
              </form>
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
