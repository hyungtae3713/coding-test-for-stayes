import { take, put, call, fork } from 'redux-saga/effects';
import { ACTION_TYPES, readPostsSuccess, readPostsFailure } from 'store/actions';
import { validate } from 'store/lib';

export function* readPosts(api, params, meta) {
  try {
    const list = validate(yield call(api.post.gets, params));
    yield put(readPostsSuccess(list, params));
  } catch(e) {
    yield put(readPostsFailure(e, params));
  }
}

export function* watchReadPostsRequest(api) {
  while(true) {
    const { payload, meta } = yield take(ACTION_TYPES.POSTS_READ_REQUEST);
    yield call(readPosts, api, payload, meta);
  }
}

export default function* ({ api }) {
  yield fork(watchReadPostsRequest, api);
}