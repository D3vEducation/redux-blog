// API
import Api from '../api';

// Action Types
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_RESPONSE,
  FETCH_POST_REQUEST,
  FETCH_POST_RESPONSE
} from './actionTypes';

// fetchPosts actions
export const fetchPostsRequest = () => dispatch => {
  dispatch({
    type: FETCH_POSTS_REQUEST
  });
};

export const fetchPostsResponse = payload => dispatch => {
  dispatch({
    type: FETCH_POSTS_RESPONSE,
    payload
  });
};

export const fetchPosts = () => dispatch => {
  dispatch(fetchPostsRequest());

  Api.fetchPosts()
    .then(response => dispatch(fetchPostsResponse(response.data)));
};

// fetchPost actions
export const fetchPostRequest = () => dispatch => {
  dispatch({
    type: FETCH_POST_REQUEST
  });
};

export const fetchPostResponse = payload => dispatch => {
  dispatch({
    type: FETCH_POST_RESPONSE,
    payload
  });
};

export const fetchPost = id => dispatch => {
  dispatch(fetchPostRequest());

  Api.fetchPost(id)
    .then(response => dispatch(fetchPostResponse(response.data)));
};
