// Dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import Layout from '../components/Layout';

// Actions
import { fetchPosts, fetchPost } from '../actions';

// Mapping our Redux state to the props
const mapStateToProps = (state) => {
  return {
    posts: state.blog.posts,
    post: state.blog.post
  };
};

// Mapping our actions to the props
const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    fetchPosts,
    fetchPost
  },
  dispatch
);

// Connecting to Redux and injecting all props to Layout
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
