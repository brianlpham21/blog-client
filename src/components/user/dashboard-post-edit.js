import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchIndividualPostData} from '../../actions/posts';

import {Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button, HelpBlock} from 'react-bootstrap';

export class DashboardPostEdit extends React.Component {
  componentDidMount() {
    const search_id = this.props.id;
    this.props.dispatch(fetchIndividualPostData(search_id));
  }

  editPost(event) {
    event.preventDefault();
    console.log('edited')
  }

  deletePost(event) {
    event.preventDefault();
    console.log('deleted')
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
                  defaultValue={this.props.post[0].title}
                />

                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="Subtext"
                  defaultValue={this.props.post[0].titleSubtext}
                />

                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="Category"
                  defaultValue={this.props.post[0].category}
                />

                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="Photo Link"
                  defaultValue={this.props.post[0].photoLink}
                />

                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="Photo Caption"
                  defaultValue={this.props.post[0].photoCaption}
                />

                <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>Text</ControlLabel>
                  <FormControl componentClass="textarea" defaultValue={this.props.post[0].text} />
                </FormGroup>

                <Button type="submit" bsStyle="primary" onClick={(event) => this.editPost(event)}>Submit</Button>
                <Button bsStyle="danger" onClick={(event) => this.deletePost(event)}>Delete</Button>
                <Button href="/">Cancel</Button>
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
