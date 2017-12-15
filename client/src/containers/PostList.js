import React, { Component } from 'react';
import { connect } from 'react-redux';

import { PostList } from 'components';
import { readPostsRequest } from 'store/actions'

import { get } from 'lodash';

class PostListContainer extends Component {

  componentWillMount() {
    this.props.readList();
  }

  render() {
    const { list, loading } = this.props;
    return <PostList { ...{ list, loading } } />
  }

}

const mapStateToProps = (state) => ({
  list: get(state, 'post.list', [])
  // loading: isPending(state, 'postsListRead')
});

const mapDispatchToProps = (dispatch, { limit }) => ({
  readList: () => dispatch(readPostsRequest({ _limit: limit }))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer);