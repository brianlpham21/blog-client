import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {Grid, Row, Col} from 'react-bootstrap';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

import {fetchPostsData} from '../../actions/posts';

import './tech-page.css';

export class TechPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPostsData());
  }

  render() {
    let techPosts = '';

    if (this.props.posts.length > 1) {
      techPosts = (this.props.posts.filter(function(post) {
        return post.category === 'Tech';
      }));
    }

    console.log(techPosts);

    return (
      <div className="tech-container">
        <Grid>
          <Row>
            <Col md={4}>
              Tech
            </Col>
            <Col md={8} className="main-card">
              <Link to="#" className="card-link">
                <Card className="card">
                  <CardImg className="card-image" top width="100%" src="https://lh3.googleusercontent.com/DqTaKFYl8LqX_dPOIkz-g6iAYOdB8TqfeFRc4kSdNTJ_7hX1HTiA-j8tz9h08wLfeJ5wXlmAEucSr6zJZ5IXpWdCn2h1qN_87FgAUUdjakG5gN_oY1VOoewY9LViyANEz15dTgJ3eE7jueYtLemZB9vnq_lfMXmJZONFmWWpQZzdS8WaiOyxDjF09k9lvlY67X9P8VjSxzpWY0KPq9ljZIleWgJkXhFHoEzBVkfDa_zzS5JNMlZcovV4Qmb2nA4pvg922uGCUhbX4FPtIs-jyIjJlOEl-DajvXIj8qaZmLOFf2lGTn0kTcudk7_DOB3SBqj_xY13YLNLd29XoKizU8jTELwYexp3JfoRSY39wwxihRVM4mzvsgMtn8ioEg9FO58GKIvDOO7SQYbmZUpE7QlogDoVPJucIURtAW70qA4fhHs-ZU7wHW1b_QD5bCCGxR1Wg68BFrt5kvnekS_rTTERKl40v4cmG737RSzNZiU5S8e_wDbYlnSPaBAG3COlLyiEhSui31nkX62LWWq7-RcXoBtaANtzmWe9Mr-hs_AmGt_uc7eOnVMDZJFyVt2kRqdlXh0g29KqCJOdUxrmtzbwS7xFZLMJnaidJVA=w2856-h1606-no" alt="Card image cap" />
                  <CardBody className="card-body">
                    <CardTitle className="card-title">Article Title</CardTitle>
                    <CardSubtitle className="card-date">Monday, June 4, 2018</CardSubtitle>
                    <CardText className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
                    <button className="article-button">Read More</button>
                  </CardBody>
                </Card>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
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
