import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';

import {Grid, Row, Col, FormGroup, ControlLabel, FormControl, Radio, Button, HelpBlock} from 'react-bootstrap';

export class DashboardPostAdd extends React.Component {
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
                  id="formControlsText"
                  type="text"
                  label="Title"
                  placeholder="Title"
                />

                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="Subtext"
                  placeholder="Subtext"
                />

                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="Category"
                  placeholder="Category"
                />

                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="Photo Link"
                  placeholder="Photo Link"
                />

                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="Photo Caption"
                  placeholder="Photo Caption"
                />

                <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>Text</ControlLabel>
                  <FormControl componentClass="textarea" placeholder="Text" />
                </FormGroup>

                <Button type="submit" bsStyle="primary">Submit</Button>
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
  };
};

export default requiresLogin()(connect(mapStateToProps)(DashboardPostAdd));
