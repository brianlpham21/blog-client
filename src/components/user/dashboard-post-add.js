import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';

import {addPost} from '../../actions/posts';

import {Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button, HelpBlock} from 'react-bootstrap';

export class DashboardPostAdd extends React.Component {
  addPost(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const subtext = document.getElementById('subtext').value;
    const category = document.getElementById('category').value;
    const photoLink = document.getElementById('photoLink').value;
    const photoCaption = document.getElementById('photoCaption').value;
    const text = document.getElementById('text').value;

    this.props.dispatch(addPost(title, subtext, category, photoLink, photoCaption, text))
      .then(data => window.location.replace('/'));
  }

  render() {
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
                  id="title"
                  type="text"
                  label="Title"
                  placeholder="Title"
                />

                <FieldGroup
                  id="subtext"
                  type="text"
                  label="Subtext"
                  placeholder="Subtext"
                />

                <FieldGroup
                  id="category"
                  type="text"
                  label="Category"
                  placeholder="Category"
                />

                <FieldGroup
                  id="photoLink"
                  type="text"
                  label="Photo Link"
                  placeholder="Photo Link"
                />

                <FieldGroup
                  id="photoCaption"
                  type="text"
                  label="Photo Caption"
                  placeholder="Photo Caption"
                />

                <FormGroup controlId="text">
                  <ControlLabel>Text</ControlLabel>
                  <FormControl componentClass="textarea" placeholder="Text" />
                </FormGroup>

                <Button className="submit-button" type="submit" bsStyle="primary" onClick={(event) => this.addPost(event)}>Submit</Button>
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
  };
};

export default requiresLogin()(connect(mapStateToProps)(DashboardPostAdd));
