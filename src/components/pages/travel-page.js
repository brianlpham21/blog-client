import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {Grid, Row, Col} from 'react-bootstrap';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

import {fetchTravelPostsData} from '../../actions/posts';

import PageArticle from './page-article';

import './travel-page.css';

export class TravelPage extends React.Component {
  state = {
    active: false
  }

  componentDidMount() {
    this.props.dispatch(fetchTravelPostsData());
  }

  displayAdditionalPosts(event) {
    this.setState({active: true});
  }

  render() {
    if (this.props.posts.length < 1) {
      return (
        <div></div>
      )
    }

    const link = '/post/' + this.props.posts[0].id;

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[Number(this.props.posts[0].date.slice(5, 7)) - 1];
    const date = `${month} ${this.props.posts[0].date.slice(8, 10)}, ${this.props.posts[0].date.slice(0,4)}`

    const photo = `${this.props.posts[0].photoLink}`;
    const photo1 = `${this.props.posts[1].photoLink}`;
    const photo2 = `${this.props.posts[2].photoLink}`;
    const photo3 = `${this.props.posts[3].photoLink}`;

    let pagearticles = '';

    pagearticles = this.props.posts.slice(4).map((post, index) => {
      return <PageArticle key={index} {...post}/>
    })

    return (
      <div className="travel-container">
        <Grid>
          <Row>
            <Col md={4}>
              Travel
            </Col>
            <Col md={8} className="main-card">
              <Link to={link} className="card-link">
                <Card className="card">
                  <CardImg className="card-image" top width="100%" src={photo} alt="Card image cap" />
                  <CardBody className="card-body">
                    <CardTitle className="card-title">{this.props.posts[0].title}</CardTitle>
                    <CardSubtitle className="card-date">{date}</CardSubtitle>
                    <CardText className="card-text">{this.props.posts[0].titleSubtext}</CardText>
                    <button className="article-button">Read More</button>
                  </CardBody>
                </Card>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Link to={link} className="card-link">
                <Card className="card">
                  <CardImg className="card-image" top width="100%" src={photo1} alt="Card image cap" />
                  <CardBody className="card-body">
                    <CardTitle className="card-title">{this.props.posts[1].title}</CardTitle>
                    <CardSubtitle className="card-date">{date}</CardSubtitle>
                    <CardText className="card-text">{this.props.posts[1].titleSubtext}</CardText>
                    <button className="article-button">Read More</button>
                  </CardBody>
                </Card>
              </Link>
            </Col>
            <Col md={4}>
              <Link to={link} className="card-link">
                <Card className="card">
                  <CardImg className="card-image" top width="100%" src={photo2} alt="Card image cap" />
                  <CardBody className="card-body">
                    <CardTitle className="card-title">{this.props.posts[2].title}</CardTitle>
                    <CardSubtitle className="card-date">{date}</CardSubtitle>
                    <CardText className="card-text">{this.props.posts[2].titleSubtext}</CardText>
                    <button className="article-button">Read More</button>
                  </CardBody>
                </Card>
              </Link>
            </Col>
            <Col md={4}>
              <Link to={link} className="card-link">
                <Card className="card">
                  <CardImg className="card-image" top width="100%" src={photo3} alt="Card image cap" />
                  <CardBody className="card-body">
                    <CardTitle className="card-title">{this.props.posts[3].title}</CardTitle>
                    <CardSubtitle className="card-date">{date}</CardSubtitle>
                    <CardText className="card-text">{this.props.posts[3].titleSubtext}</CardText>
                    <button className="article-button">Read More</button>
                  </CardBody>
                </Card>
              </Link>
            </Col>
          </Row>
          <div className={this.state.active ? "hidden" : ""}>
            <Row className="view-all-button-container">
              <button className="view-all-button" onClick={(event) => this.displayAdditionalPosts(event)}>View All</button>
            </Row>
          </div>
          <div className="additional-posts">
            <div className={this.state.active ? "" : "hidden"}>
              {pagearticles}
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  posts: state.postsData.posts
});

export default connect(mapStateToProps)(TravelPage);
