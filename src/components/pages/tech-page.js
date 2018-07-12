import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {Grid, Row, Col} from 'react-bootstrap';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

import {fetchTechPostsData} from '../../actions/posts';

import PageArticle from './page-article';

import './tech-page.css';

export class TechPage extends React.Component {
  state = {
    active: false
  }

  componentDidMount() {
    this.props.dispatch(fetchTechPostsData());
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
    const link2 = '/post/' + this.props.posts[1].id;
    const link3 = '/post/' + this.props.posts[2].id;
    const link4 = '/post/' + this.props.posts[3].id;

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[Number(this.props.posts[0].date.slice(5, 7)) - 1];
    const month2 = months[Number(this.props.posts[1].date.slice(5, 7)) - 1];
    const month3 = months[Number(this.props.posts[2].date.slice(5, 7)) - 1];
    const month4 = months[Number(this.props.posts[3].date.slice(5, 7)) - 1];
    const date = `${month} ${this.props.posts[0].date.slice(8, 10)}, ${this.props.posts[0].date.slice(0,4)}`;
    const date2 = `${month2} ${this.props.posts[1].date.slice(8, 10)}, ${this.props.posts[1].date.slice(0,4)}`;
    const date3 = `${month3} ${this.props.posts[2].date.slice(8, 10)}, ${this.props.posts[2].date.slice(0,4)}`;
    const date4 = `${month4} ${this.props.posts[3].date.slice(8, 10)}, ${this.props.posts[3].date.slice(0,4)}`;

    const photo = `${this.props.posts[0].photoLink}`;
    const photo1 = `${this.props.posts[1].photoLink}`;
    const photo2 = `${this.props.posts[2].photoLink}`;
    const photo3 = `${this.props.posts[3].photoLink}`;

    let pagearticles = '';

    pagearticles = this.props.posts.slice(4).map((post, index) => {
      return <PageArticle key={index} {...post}/>
    })

    return (
      <div className="tech-container">
        <Grid>
          <Row>
            <Col md={4}>
              <h3 className="page-title page-text">Tech</h3>
              <p className="page-text">The Tech World. This is the world that I have
              fallen into not only because I am a millenial, but also because I have
              grown up in a family filled with techies, database admins, network admins,
              and so on. My family has enough software engineers, and as much as I
              tried to resist it, I became one as well.</p>
              <p className="page-text">When I decided that I was going down this path
              for my career, I jumped into with a great passion. However, I did not realize
              that I would find myself a bit lost in its vast world.</p>
              <p className="page-text">The more you learn in this world, the more you realize
              you know almost nothing at all. There is so much to tech and so much to what
              has been and is going on that is has become a little overwhelming.</p>
              <p className="page-text">This category will do its best to help me focus my
              attention and log what I learn through my journey.</p>
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
              <Link to={link2} className="card-link">
                <Card className="card">
                  <CardImg className="card-image" top width="100%" src={photo1} alt="Card image cap" />
                  <CardBody className="card-body">
                    <CardTitle className="card-title">{this.props.posts[1].title}</CardTitle>
                    <CardSubtitle className="card-date">{date2}</CardSubtitle>
                    <CardText className="card-text">{this.props.posts[1].titleSubtext}</CardText>
                    <button className="article-button">Read More</button>
                  </CardBody>
                </Card>
              </Link>
            </Col>
            <Col md={4}>
              <Link to={link3} className="card-link">
                <Card className="card">
                  <CardImg className="card-image" top width="100%" src={photo2} alt="Card image cap" />
                  <CardBody className="card-body">
                    <CardTitle className="card-title">{this.props.posts[2].title}</CardTitle>
                    <CardSubtitle className="card-date">{date3}</CardSubtitle>
                    <CardText className="card-text">{this.props.posts[2].titleSubtext}</CardText>
                    <button className="article-button">Read More</button>
                  </CardBody>
                </Card>
              </Link>
            </Col>
            <Col md={4}>
              <Link to={link4} className="card-link">
                <Card className="card">
                  <CardImg className="card-image" top width="100%" src={photo3} alt="Card image cap" />
                  <CardBody className="card-body">
                    <CardTitle className="card-title">{this.props.posts[3].title}</CardTitle>
                    <CardSubtitle className="card-date">{date4}</CardSubtitle>
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

export default connect(mapStateToProps)(TechPage);
