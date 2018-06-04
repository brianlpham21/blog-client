import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import {Grid, Row, Col, Button} from 'react-bootstrap';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';


export function MainArticleSection(props) {
  return (
    <div className="main-article-container">
      <Grid>
        <Row className="article-row">
          <Col md={6}>
            <Link to="#" className="card-link">
              <Card className="card">
                <CardImg className="card-image" top width="100%" src="https://images.unsplash.com/photo-1494257473705-09a5a19d04af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a8630a45d2003aa0fe3d2f5ff376d9ec&auto=format&fit=crop&w=1950&q=80" alt="Card image cap" />
                <CardBody className="card-body">
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
                  <Button>Read More</Button>
                </CardBody>
              </Card>
            </Link>
          </Col>
          <Col md={6}>
            <Link to="#" className="card-link">
              <Card className="card">
                <CardImg className="card-image" top width="100%" src="https://images.unsplash.com/photo-1494257473705-09a5a19d04af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a8630a45d2003aa0fe3d2f5ff376d9ec&auto=format&fit=crop&w=1950&q=80" alt="Card image cap" />
                <CardBody className="card-body">
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
                  <Button>Read More</Button>
                </CardBody>
              </Card>
            </Link>
          </Col>
        </Row>
        <Row className="article-row">
          <Col md={6}>
            <Link to="#" className="card-link">
              <Card className="card">
                <CardImg className="card-image" top width="100%" src="https://images.unsplash.com/photo-1494257473705-09a5a19d04af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a8630a45d2003aa0fe3d2f5ff376d9ec&auto=format&fit=crop&w=1950&q=80" alt="Card image cap" />
                <CardBody className="card-body">
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
                  <Button>Read More</Button>
                </CardBody>
              </Card>
            </Link>
          </Col>
          <Col md={6}>
            <Link to="#" className="card-link">
              <Card className="card">
                <CardImg className="card-image" top width="100%" src="https://images.unsplash.com/photo-1494257473705-09a5a19d04af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a8630a45d2003aa0fe3d2f5ff376d9ec&auto=format&fit=crop&w=1950&q=80" alt="Card image cap" />
                <CardBody className="card-body">
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
                  <Button>Read More</Button>
                </CardBody>
              </Card>
            </Link>
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
