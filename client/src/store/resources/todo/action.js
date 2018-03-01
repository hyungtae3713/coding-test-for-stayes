import { Action } from 'store/lib';

const ACTION_TYPES = {
  ...Action.createType('TODO_CREATE'), // ACTION_TYPES.TODO_CREATE_[REQUEST, SUCCESS, FAILURE]
  ...Action.createType('TODO_READ'),
  ...Action.createType('TODOS_READ'),
  ...Action.createType('TODO_UPDATE'),
  ...Action.createType('TODO_DELETE'),

  ...Action.createType('TODO_TEXT_UPDATE'),
  ...Action.createType('TODO_DOWNLOAD')
}

export default {
    ...ACTION_TYPES,

    createTodoRequest(payload, meta)   { return Action.createAction(ACTION_TYPES.TODO_CREATE_REQUEST, payload, meta) },
    createTodoSuccess(payload, meta)   { return Action.createAction(ACTION_TYPES.TODO_CREATE_SUCCESS, payload, meta) },
    createTodoFailure(payload, meta)   { return Action.createAction(ACTION_TYPES.TODO_CREATE_FAILURE, payload, meta) },

    readTodosRequest(payload, meta)  { return Action.createAction(ACTION_TYPES.TODOS_READ_REQUEST, payload, meta) },
    readTodosSuccess(payload, meta)  { return Action.createAction(ACTION_TYPES.TODOS_READ_SUCCESS, payload, meta) },
    readTodosFailure(payload, meta)  { return Action.createAction(ACTION_TYPES.TODOS_READ_FAILURE, payload, meta) },

    updateTodoRequest(payload, meta) { return Action.createAction(ACTION_TYPES.TODO_UPDATE_REQUEST, payload, meta) },
    updateTodoSuccess(payload, meta) { return Action.createAction(ACTION_TYPES.TODO_UPDATE_SUCCESS, payload, meta) },
    updateTodoFailure(payload, meta) { return Action.createAction(ACTION_TYPES.TODO_UPDATE_FAILURE, payload, meta) },

    updateTodoTextRequest(payload, meta) { return Action.createAction(ACTION_TYPES.TODO_TEXT_UPDATE_REQUEST, payload, meta) },
    updateTodoTextSuccess(payload, meta) { return Action.createAction(ACTION_TYPES.TODO_TEXT_UPDATE_SUCCESS, payload, meta) },
    updateTodoTextFailure(payload, meta) { return Action.createAction(ACTION_TYPES.TODO_TEXT_UPDATE_FAILURE, payload, meta) },

    deleteTodoRequest(payload, meta) { return Action.createAction(ACTION_TYPES.TODO_DELETE_REQUEST, payload, meta) },
    deleteTodoSuccess(payload, meta) { return Action.createAction(ACTION_TYPES.TODO_DELETE_SUCCESS, payload, meta) },
    deleteTodoFailure(payload, meta) { return Action.createAction(ACTION_TYPES.TODO_DELETE_FAILURE, payload, meta) },

    downloadRequest(payload, meta) { return Action.createAction(ACTION_TYPES.TODO_DOWNLOAD_REQUEST, payload, meta) },
    downloadSuccess(payload, meta) { return Action.createAction(ACTION_TYPES.TODO_DOWNLOAD_SUCCESS, payload, meta) },
    downloadFailure(payload, meta) { return Action.createAction(ACTION_TYPES.TODO_DOWNLOAD_FAILURE, payload, meta) },
 };