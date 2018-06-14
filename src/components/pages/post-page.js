import React from 'react';
import {connect} from 'react-redux';

import {fetchPostsData} from '../../actions/posts';

import {Jumbotron, Grid, Row} from 'react-bootstrap';

export class PostPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPostsData());
  }

  render() {
    const id = this.props.id;

    let individualPost = '';

    if (this.props.posts.length > 1) {
      individualPost = (this.props.posts.filter(function(post) {
        return post.id === id;
      }));
    }

    console.log(individualPost);

    return (
      <div>
        <Jumbotron className="post-overlay" style={{backgroundAttachment: "fixed", color: "white", verticalAlign: "middle", textAlign: "center", backgroundPosition: "center", height: "500px",backgroundSize: "cover", backgroundImage: "url('https://lh3.googleusercontent.com/DqTaKFYl8LqX_dPOIkz-g6iAYOdB8TqfeFRc4kSdNTJ_7hX1HTiA-j8tz9h08wLfeJ5wXlmAEucSr6zJZ5IXpWdCn2h1qN_87FgAUUdjakG5gN_oY1VOoewY9LViyANEz15dTgJ3eE7jueYtLemZB9vnq_lfMXmJZONFmWWpQZzdS8WaiOyxDjF09k9lvlY67X9P8VjSxzpWY0KPq9ljZIleWgJkXhFHoEzBVkfDa_zzS5JNMlZcovV4Qmb2nA4pvg922uGCUhbX4FPtIs-jyIjJlOEl-DajvXIj8qaZmLOFf2lGTn0kTcudk7_DOB3SBqj_xY13YLNLd29XoKizU8jTELwYexp3JfoRSY39wwxihRVM4mzvsgMtn8ioEg9FO58GKIvDOO7SQYbmZUpE7QlogDoVPJucIURtAW70qA4fhHs-ZU7wHW1b_QD5bCCGxR1Wg68BFrt5kvnekS_rTTERKl40v4cmG737RSzNZiU5S8e_wDbYlnSPaBAG3COlLyiEhSui31nkX62LWWq7-RcXoBtaANtzmWe9Mr-hs_AmGt_uc7eOnVMDZJFyVt2kRqdlXh0g29KqCJOdUxrmtzbwS7xFZLMJnaidJVA=w2856-h1606-no')"}}>
          <Grid>
            <Row style={{position: "relative", marginTop: "100px"}}>
              <h1>Article Title</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nib.
              </p>
            </Row>
          </Grid>
        </Jumbotron>
        <Grid>
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
  posts: state.postsData.posts
});

export default connect(mapStateToProps)(PostPage);
