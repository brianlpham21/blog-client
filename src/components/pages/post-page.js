import React from 'react';
import {connect} from 'react-redux';

import {fetchIndividualPostData} from '../../actions/posts';

import {Jumbotron, Grid, Row, Col} from 'react-bootstrap';

export class PostPage extends React.Component {
  componentDidMount() {
    const search_id = this.props.id;
    this.props.dispatch(fetchIndividualPostData(search_id));
  }

  render() {
    if (this.props.post.length < 1) {
      return (
        <div></div>
      )
    }

    const photo = this.props.post[0].photoLink;

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[Number(this.props.post[0].date.slice(5, 7)) - 1];
    const date = `${month} ${this.props.post[0].date.slice(8, 10)}, ${this.props.post[0].date.slice(0,4)}`

    const text = this.props.post[0].text.split('/n');

    let displayedText = '';

    displayedText = text.slice(1).map((paragraph, index) => {
      return <p key={index}>{paragraph}</p>
    });

    return (
      <div>
        <Jumbotron className="post-overlay" style={{backgroundAttachment: "fixed", color: "white", verticalAlign: "middle", textAlign: "center", backgroundPosition: "center", height: "500px",backgroundSize: "cover", backgroundImage: `url(` + photo + `)`}}>
          <Grid>
            <Row style={{position: "relative", marginTop: "120px", textShadow: "0 0 4px rgba(0, 0, 0, .6)"}}>
              <h1>{this.props.post[0].title}</h1>
              <p>{this.props.post[0].titleSubtext}</p>
            </Row>
          </Grid>
        </Jumbotron>
        <Grid style={{padding: "40px 250px 80px 250px"}}>
          <Row>
            <Col md={6}>
              <h3>{date}</h3>
            </Col>
            <Col md={6} style={{'textAlign': 'right'}}>
              <h3>{this.props.post[0].category}</h3>
            </Col>
          </Row>
          <div className="post-text">
            <p className="post-text-header">{text[0]}</p>
            {displayedText}
          </div>
        </Grid>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  post: state.postsData.post
});

export default connect(mapStateToProps)(PostPage);
