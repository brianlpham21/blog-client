import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {Grid, Row, Col} from 'react-bootstrap';
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
                  <CardTitle className="card-title">Article Title</CardTitle>
                  <CardSubtitle className="card-date">Date</CardSubtitle>
                  <CardText className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
                  <button className="article-button">Read More</button>
                </CardBody>
              </Card>
            </Link>
          </Col>
          <Col md={6}>
            <Link to="#" className="card-link">
              <Card className="card">
                <CardImg className="card-image" top width="100%" src="https://images.unsplash.com/photo-1492970471430-bc6bd7eb2b13?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9893bc89e46e2b77a5d8c091fbba04e9&auto=format&fit=crop&w=2855&q=80" alt="Card image cap" />
                <CardBody className="card-body">
                <CardTitle className="card-title">Article Title</CardTitle>
                <CardSubtitle className="card-date">Date</CardSubtitle>
                <CardText className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
                <button className="article-button">Read More</button>
                </CardBody>
              </Card>
            </Link>
          </Col>
        </Row>
        <Row className="article-row">
          <Col md={6}>
            <Link to="#" className="card-link">
              <Card className="card">
                <CardImg className="card-image" top width="100%" src="https://images.unsplash.com/photo-1506437942396-649fac10a75b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f369ac9dee5618d9719e6b7bed221387&auto=format&fit=crop&w=1950&q=80" alt="Card image cap" />
                <CardBody className="card-body">
                <CardTitle className="card-title">Article Title</CardTitle>
                <CardSubtitle className="card-date">Date</CardSubtitle>
                <CardText className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
                <button className="article-button">Read More</button>
                </CardBody>
              </Card>
            </Link>
          </Col>
          <Col md={6}>
            <Link to="#" className="card-link">
              <Card className="card">
                <CardImg className="card-image" top width="100%" src="https://images.unsplash.com/photo-1511702771955-42b52e1cd168?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0b8ce1412e0f8646fa9f794963ab897e&auto=format&fit=crop&w=1950&q=80" alt="Card image cap" />
                <CardBody className="card-body">
                <CardTitle className="card-title">Article Title</CardTitle>
                <CardSubtitle className="card-date">Date</CardSubtitle>
                <CardText className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
                <button className="article-button">Read More</button>
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
