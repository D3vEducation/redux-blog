// Dependencies
import React, { Component } from 'react';
import { array, func, object } from 'prop-types';

// Components
import Post from './Post';

// Styles
import styles from './Posts.scss';

class Posts extends Component {
  static propTypes = {
    fetchPost: func,
    fetchPosts: func,
    match: object,
    posts: array,
    post: object
  };

  componentDidMount() {
    const {
      fetchPosts,
      fetchPost,
      match: {
        params: {
          id = false
        }
      }
    } = this.props;

    // If the url includes the id we fetch the single post
    // Otherwise we fetch all the posts
    if (id > 0) {
      fetchPost(id);
    } else {
      fetchPosts();
    }
  }

  componentDidUpdate(prevProps) {
    const {
      match: {
        params: {
          id = false
        }
      },
      post,
      posts,
      fetchPost,
      fetchPosts
    } = this.props;

    // When the component updates we validate if the current id is different
    // From the previous one
    const hasDifferentId = id > 0 && id !== prevProps.match.params.id;

    if (hasDifferentId && post.id !== Number(id)) {
      fetchPost(id);
    } else if (!id && posts.length === 0) {
      fetchPosts();
    }
  }

  renderPosts(posts) {
    return posts.map(({id, title, body}) => (
      <Post
        key={id}
        id={id}
        title={title}
        body={body}
      />
    ));
  }

  renderPost({ id, title, body }) {
    return (
      <Post
        key={id}
        id={id}
        title={title}
        body={body}
      />
    );
  }

  render() {
    const {
      posts,
      post,
      match: {
        params: {
          id = false
        }
      }
    } = this.props;

    if (!id && posts.length === 0) {
      return null;
    }

    return (
      <div className={styles.Posts}>
        {id > 0
          ? this.renderPost(post)
          : this.renderPosts(posts)
        }
      </div>
    );
  }
}

export default Posts;
