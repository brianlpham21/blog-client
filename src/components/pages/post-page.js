import React from 'react';
import {connect} from 'react-redux';

import {fetchIndividualPostData} from '../../actions/posts';

import {Jumbotron, Grid, Row} from 'react-bootstrap';

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
        <Grid style={{padding: "40px 60px 80px 60px"}}>
          <h3>{date}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. </p>
          <p>Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. </p>
          <p>Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. </p>
          <p>Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. </p>
          <p>Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci. Ut eu diam at pede suscipit sodales. Aenean lectus elit, fermentum non, convallis id, sagittis at, neque. </p>
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
