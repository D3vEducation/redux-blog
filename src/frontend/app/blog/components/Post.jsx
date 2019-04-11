// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { number, string } from 'prop-types';

// Styles
import styles from './Post.scss';

class Post extends Component {
  static propTypes = {
    id: number,
    title: string,
    body: string
  };

  render() {
    const { id, title, body } = this.props;

    return (
      <div className={styles.Post}>
        <h2>
          <Link to={`/blog/${id}`}>{title}</Link>
        </h2>
        
        <p>{body}</p>
      </div>
    );
  }
}

export default Post;
