import React, { Component } from 'react';
import { func, object } from 'prop-types';

import Post from './Post';

import styles from './Posts.scss';

class Posts extends Component {
  componentDidMount() {
    const { fetchPosts } = this.props;
    fetchPosts();
  }

  componentDidUpdate() {
    const {
      match: {
        params: {
          id = false
        }
      },
      fetchPost
    } = this.props;

    if (id > 0) {
      fetchPost(id);
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

    if (posts.length === 0) {
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
