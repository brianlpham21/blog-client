import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {Col} from 'react-bootstrap';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

import {fetchPostsData} from '../actions/posts';

export class Article extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPostsData());
  }

  render() {
    const id = this.props.number;
    const link = '/post/' + this.props.posts[id].id;
    const photoLink = this.props.posts[id].photoLink;
    const title = this.props.posts[id].title;
    const date = this.props.posts[id].date;
    const titleSubtext = this.props.posts[id].titleSubtext;

    if (this.props.posts.length < 1) {
      return (
        <div></div>
      )
    }

    return (
      <Col md={6}>
        <Link to={link} className="card-link">
          <Card className="card">
            <CardImg className="card-image" top width="100%" src={photoLink || "https://hlfppt.org/wp-content/uploads/2017/04/placeholder.png"} alt="Card image cap" />
            <CardBody className="card-body">
              <CardTitle className="card-title">{title || 'N/A'}</CardTitle>
              <CardSubtitle className="card-date">{date || 'N/A'}</CardSubtitle>
              <CardText className="card-text">{titleSubtext || 'N/A'}</CardText>
              <button className="article-button">Read More</button>
            </CardBody>
          </Card>
        </Link>
      </Col>
    );
  };
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  posts: state.postsData.posts
});

export default connect(mapStateToProps)(Article);
