import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {Grid, Row, Col} from 'react-bootstrap';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

import {fetchExperiencesPostsData} from '../../actions/posts';

import PageArticle from './page-article';

import './experience-page.css';

export class ExperiencesPage extends React.Component {
  state = {
    active: false
  }

  componentDidMount() {
    this.props.dispatch(fetchExperiencesPostsData());
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

    let pagearticles = '';

    pagearticles = this.props.posts.map((post, index) => {
      return <PageArticle key={index} {...post}/>
    })

    return (
      <div className="experiences-container">
        <Grid>
          <Row>
            <Col md={4}>
              Experiences
            </Col>
            <Col md={8} className="main-card">
              <Link to={link} className="card-link">
                <Card className="card">
                  <CardImg className="card-image main-card-image" top width="100%" src={photo} alt="Card image cap" />
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
              <Link to="##" className="card-link">
                <Card className="card">
                  <CardImg className="card-image" top width="100%" src="https://lh3.googleusercontent.com/DqTaKFYl8LqX_dPOIkz-g6iAYOdB8TqfeFRc4kSdNTJ_7hX1HTiA-j8tz9h08wLfeJ5wXlmAEucSr6zJZ5IXpWdCn2h1qN_87FgAUUdjakG5gN_oY1VOoewY9LViyANEz15dTgJ3eE7jueYtLemZB9vnq_lfMXmJZONFmWWpQZzdS8WaiOyxDjF09k9lvlY67X9P8VjSxzpWY0KPq9ljZIleWgJkXhFHoEzBVkfDa_zzS5JNMlZcovV4Qmb2nA4pvg922uGCUhbX4FPtIs-jyIjJlOEl-DajvXIj8qaZmLOFf2lGTn0kTcudk7_DOB3SBqj_xY13YLNLd29XoKizU8jTELwYexp3JfoRSY39wwxihRVM4mzvsgMtn8ioEg9FO58GKIvDOO7SQYbmZUpE7QlogDoVPJucIURtAW70qA4fhHs-ZU7wHW1b_QD5bCCGxR1Wg68BFrt5kvnekS_rTTERKl40v4cmG737RSzNZiU5S8e_wDbYlnSPaBAG3COlLyiEhSui31nkX62LWWq7-RcXoBtaANtzmWe9Mr-hs_AmGt_uc7eOnVMDZJFyVt2kRqdlXh0g29KqCJOdUxrmtzbwS7xFZLMJnaidJVA=w2856-h1606-no" alt="Card image cap" />
                  <CardBody className="card-body">
                    <CardTitle className="card-title">Article Title</CardTitle>
                    <CardSubtitle className="card-date">Date</CardSubtitle>
                    <CardText className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
                    <button className="article-button">Read More</button>
                  </CardBody>
                </Card>
              </Link>
            </Col>
            <Col md={4}>
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
            <Col md={4}>
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
          <div className={this.state.active ? "hidden" : ""}>
            <Row className="view-all-button-container">
              <button className="view-all-button " onClick={(event) => this.displayAdditionalPosts(event)}>View All</button>
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

export default connect(mapStateToProps)(ExperiencesPage);
