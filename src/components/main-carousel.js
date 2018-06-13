import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {Carousel} from 'react-bootstrap';

import {fetchPostsData} from '../actions/posts';

export class MainCarousel extends React.Component {
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
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item className="overlay">
            <Link to="#"><img className="carousel-image" src={this.props.posts[0].photoLink || "https://hlfppt.org/wp-content/uploads/2017/04/placeholder.png"} alt="Carousel 1" /></Link>
            <Carousel.Caption>
              <h3 className="carousel-title">{this.props.posts[0].title || 'N/A'}</h3>
              <p className="carousel-text">{this.props.posts[0].text || 'N/A'}</p>
              <Link to={`/post/${this.props.posts[0].id}`}><button className="button">Read More</button></Link>
              <br />
              <br />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="overlay">
            <Link to="#"><img className="carousel-image" src={this.props.posts[1].photoLink || "https://hlfppt.org/wp-content/uploads/2017/04/placeholder.png"} alt="Carousel 2" /></Link>
            <Carousel.Caption>
              <h3 className="carousel-title">{this.props.posts[1].title || 'N/A'}</h3>
              <p className="carousel-text">{this.props.posts[1].text || 'N/A'}</p>
              <Link to={`/post/${this.props.posts[1].id}`}><button className="button">Read More</button></Link>
              <br />
              <br />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="overlay">
            <Link to="#"><img className="carousel-image" src={this.props.posts[2].photoLink || "https://hlfppt.org/wp-content/uploads/2017/04/placeholder.png"} alt="Carousel 3" /></Link>
            <Carousel.Caption>
              <h3 className="carousel-title">{this.props.posts[2].title || 'N/A'}</h3>
              <p className="carousel-text">{this.props.posts[2].text || 'N/A'}</p>
              <Link to={`/post/${this.props.posts[2].id}`}><button className="button">Read More</button></Link>
              <br />
              <br />
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  posts: state.postsData.posts
});

export default connect(mapStateToProps)(MainCarousel);
