import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {Grid, Row, Col} from 'react-bootstrap';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

import {fetchPostsData} from '../actions/posts';

export class MainArticleSection extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPostsData());
  }

  render() {
    if (this.props.posts.length < 1) {
      return (
        <div></div>
      )
    }

    return (
      <div className="main-article-container">
        <Grid>
          <Row className="article-row">
            <Col md={6}>
              <Link to={`/post/${this.props.posts[3].id}`} className="card-link">
                <Card className="card">
                  <CardImg className="card-image" top width="100%" src={this.props.posts[3].photoLink || "https://hlfppt.org/wp-content/uploads/2017/04/placeholder.png"} alt="Card image cap" />
                  <CardBody className="card-body">
                    <CardTitle className="card-title">{this.props.posts[3].title || 'N/A'}</CardTitle>
                    <CardSubtitle className="card-date">{this.props.posts[3].date || 'N/A'}</CardSubtitle>
                    <CardText className="card-text">{this.props.posts[3].titleSubtext || 'N/A'}</CardText>
                    <button className="article-button">Read More</button>
                  </CardBody>
                </Card>
              </Link>
            </Col>
            <Col md={6}>
              <Link to={`/post/${this.props.posts[4].id}`} className="card-link">
                <Card className="card">
                  <CardImg className="card-image" top width="100%" src={this.props.posts[4].photoLink || "https://hlfppt.org/wp-content/uploads/2017/04/placeholder.png"} alt="Card image cap" />
                  <CardBody className="card-body">
                    <CardTitle className="card-title">{this.props.posts[4].title || 'N/A'}</CardTitle>
                    <CardSubtitle className="card-date">{this.props.posts[4].date || 'N/A'}</CardSubtitle>
                    <CardText className="card-text">{this.props.posts[4].titleSubtext || 'N/A'}</CardText>
                    <button className="article-button">Read More</button>
                  </CardBody>
                </Card>
              </Link>
            </Col>
          </Row>
          <Row className="article-row">
            <Col md={6}>
              <Link to={`/post/${this.props.posts[5].id}`} className="card-link">
                <Card className="card">
                  <CardImg className="card-image" top width="100%" src={this.props.posts[5].photoLink || "https://hlfppt.org/wp-content/uploads/2017/04/placeholder.png"} alt="Card image cap" />
                  <CardBody className="card-body">
                    <CardTitle className="card-title">{this.props.posts[5].title || 'N/A'}</CardTitle>
                    <CardSubtitle className="card-date">{this.props.posts[5].date || 'N/A'}</CardSubtitle>
                    <CardText className="card-text">{this.props.posts[5].titleSubtext || 'N/A'}</CardText>
                    <button className="article-button">Read More</button>
                  </CardBody>
                </Card>
              </Link>
            </Col>
            <Col md={6}>
              <Link to={`/post/${this.props.posts[6].id}`} className="card-link">
                <Card className="card">
                  <CardImg className="card-image" top width="100%" src={this.props.posts[6].photoLink || "https://hlfppt.org/wp-content/uploads/2017/04/placeholder.png"} alt="Card image cap" />
                  <CardBody className="card-body">
                    <CardTitle className="card-title">{this.props.posts[6].title || 'N/A'}</CardTitle>
                    <CardSubtitle className="card-date">{this.props.posts[6].date || 'N/A'}</CardSubtitle>
                    <CardText className="card-text">{this.props.posts[6].titleSubtext || 'N/A'}</CardText>
                    <button className="article-button">Read More</button>
                  </CardBody>
                </Card>
              </Link>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  posts: state.postsData.posts
});

export default connect(mapStateToProps)(MainArticleSection);
