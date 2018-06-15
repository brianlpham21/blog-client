import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {Col} from 'react-bootstrap';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

export class PageArticle extends React.Component {
  render() {
    const link = '/post/' + this.props.id;
    const photoLink = this.props.photoLink;
    const title = this.props.title;

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[Number(this.props.date.slice(5, 7)) - 1];
    const date = `${month} ${this.props.date.slice(8, 10)}, ${this.props.date.slice(0,4)}`

    const titleSubtext = this.props.titleSubtext;

    return (
      <Col md={4}>
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

export default connect(mapStateToProps)(PageArticle);
