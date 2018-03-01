import { take, put, call, fork } from 'redux-saga/effects';
import { 
  ACTION_TYPES, 
  createTodoSuccess,
  createTodoFailure,
  readTodosSuccess, 
  readTodosFailure,
  updateTodoSuccess,
  updateTodoFailure,
  updateTodoTextSuccess,
  deleteTodoSuccess,
  deleteTodoFailure,
  downloadSuccess,
  downloadFailure
} from 'store/actions';
import { validate } from 'store/lib';

export function* createTodo(api, todo, meta) {
  try {
    todo = validate(yield call(api.todo.create, todo));
    yield put(createTodoSuccess({ todo }))
  } catch(error) {
    yield put(createTodoFailure({ error }));
  }
}

export function* readTodos(api, queryParams, meta) {
  try {
    const todos = validate(yield call(api.todo.gets, queryParams));
    yield put(readTodosSuccess({ todos }, queryParams));
  } catch(error) {
    yield put(readTodosFailure({ error }));
  }
}

export function* updateTodo(api, todo, meta) {
  try {
    todo = validate(yield call(api.todo.update, todo));
    yield put(updateTodoSuccess({ todo }));
  } catch(error) {
    yield put(updateTodoFailure({ error }));
  }
}

export function* deleteTodo(api, id, meta) {
  try {
    id = validate(yield call(api.todo.delete, id));
    yield put(deleteTodoSuccess({ id }))
  } catch(error) {
    yield put(deleteTodoFailure({ error }));
  }
}

export function* updateTodoText(text, meta) {
  yield put(updateTodoTextSuccess({ text }, meta))
}

export function* downloadTodo(api, queryParams, meta) {
  try {
    validate(yield call(api.todo.download, queryParams));
    yield put(downloadSuccess())
  } catch(error) {
    yield put(downloadFailure({ error }));
  }
}

export function* watchCreateTodoRequest(api) {
  while(true) {
    const { payload, meta } = yield take(ACTION_TYPES.TODO_CREATE_REQUEST);
    yield call(createTodo, api, payload, meta);
  }
}

export function* watchReadTodosRequest(api) {
  while(true) {
    const { payload, meta } = yield take(ACTION_TYPES.TODOS_READ_REQUEST);
    yield call(readTodos, api, payload, meta);
  }
}

export function* watchUpdateTodoRequest(api) {
  while(true) {
    const { payload, meta } = yield take(ACTION_TYPES.TODO_UPDATE_REQUEST);
    yield call(updateTodo, api, payload, meta);
  }
}

export function* watchDeleteTodoRequest(api) {
  while(true) {
    const { payload, meta } = yield take(ACTION_TYPES.TODO_DELETE_REQUEST);
    yield call(deleteTodo, api, payload, meta);
  }
}

export function* watchUpdateTodoTextRequest(api) {
  while(true) {
    const { payload, meta } = yield take(ACTION_TYPES.TODO_TEXT_UPDATE_REQUEST);
    yield call(updateTodoText, payload, meta);
  }
}

export function* watchDownloadRequest(api) {
  while(true) {
    const { payload, meta } = yield take(ACTION_TYPES.TODO_DOWNLOAD_REQUEST);
    yield call(downloadTodo, api, payload, meta);
  }
}

export default function* ({ api }) {
  yield fork(watchCreateTodoRequest, api);
  yield fork(watchReadTodosRequest, api);
  yield fork(watchUpdateTodoRequest, api);
  yield fork(watchDeleteTodoRequest, api);

  yield fork(watchUpdateTodoTextRequest, api);
  yield fork(watchDownloadRequest, api);
}