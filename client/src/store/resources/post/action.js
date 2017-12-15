
/*
export const POST_LIST_READ_REQUEST = 'POST_LIST_READ_REQUEST'
export const POST_LIST_READ_SUCCESS = 'POST_LIST_READ_SUCCESS'
export const POST_LIST_READ_FAILURE = 'POST_LIST_READ_FAILURE'

export const postListReadRequest = (post, params) => ({
  type: POST_LIST_READ_REQUEST,
  payload: { params },
  meta: {
    post,
    thunk: `${post}ListRead`,
  },
});

export const postListReadSuccess = (post, list, request, thunk) => ({
  type: POST_LIST_READ_SUCCESS,
  payload: list,
  meta: {
    request,
    thunk,
    post,
    entities: post,
  },
});

export const postListReadFailure = (post, error, request, thunk) => ({
  type: POST_LIST_READ_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    thunk,
    post,
  },
});
 */

import { Action } from 'store/lib';

const ACTION_TYPES = {
  ...Action.createType('POST_READ'),  // ACTION_TYPES.POST_READ_[REQUEST, SUCCESS, FAILURE]
  ...Action.createType('POSTS_READ'),
  ...Action.createType('POST_UPDATE'),
  ...Action.createType('POST_DELETE')
}

export default {
   ...ACTION_TYPES,

   readPostRequest(payload, meta)   { return Action.createAction(ACTION_TYPES.POST_READ_REQUEST, payload, meta) },
   readPostSuccess(payload, meta)    { return Action.createAction(ACTION_TYPES.POST_READ_SUCCESS, payload, meta) },
   readPostFailure(payload, meta)   { return Action.createAction(ACTION_TYPES.POST_READ_FAILURE, payload, meta) },

   readPostsRequest(payload, meta)  { return Action.createAction(ACTION_TYPES.POSTS_READ_REQUEST, payload, meta) },
   readPostsSuccess(payload, meta)  { return Action.createAction(ACTION_TYPES.POSTS_READ_SUCCESS, payload, meta) },
   readPostsFailure(payload, meta)  { return Action.createAction(ACTION_TYPES.POSTS_READ_FAILURE, payload, meta) },

   updatePostRequest(payload, meta) { return Action.createAction(ACTION_TYPES.POST_UPDATE_REQUEST, payload, meta) },
   updatePostSuccess(payload, meta)  { return Action.createAction(ACTION_TYPES.POST_UPDATE_SUCCESS, payload, meta) },
   updatePostFailure(payload, meta) { return Action.createAction(ACTION_TYPES.POST_UPDATE_FAILURE, payload, meta) },

   deletePostRequest(payload, meta) { return Action.createAction(ACTION_TYPES.POST_DELETE_REQUEST, payload, meta) },
   deletePostSuccess(payload, meta)  { return Action.createAction(ACTION_TYPES.POST_DELETE_SUCCESS, payload, meta) },
   deletePostFailure(payload, meta) { return Action.createAction(ACTION_TYPES.POST_DELETE_FAILURE, payload, meta) },
 };