import { fromJS } from 'immutable';

import { initialState } from './selector';
import { ACTION_TYPES } from 'store/actions'

export default (state = initialState, { type, payload = { }, meta }) => {
  const { todo, todos, id, text, error } = payload;

  switch(type) {
    case ACTION_TYPES.TODO_CREATE_SUCCESS:
      return state.update('list', list => list.unshift(fromJS(todo))).set('error', null);
    case ACTION_TYPES.TODO_CREATE_FAILURE:
      return state.set('error', error);

    case ACTION_TYPES.TODOS_READ_SUCCESS:
      return state.set('list', fromJS(todos)).set('error', null);
    case ACTION_TYPES.TODOS_READ_FAILURE:
      return state.set('list', fromJS([])).set('error', error);

    case ACTION_TYPES.TODO_UPDATE_SUCCESS:
      let index = state.get('list').findIndex((_todo) => _todo.get('id') === todo.id);
      return state.update('list', 
        (list) => list.set(index, fromJS(todo))).set('error', null);
    case ACTION_TYPES.TODO_UPDATE_FAILURE:
    return state.set('error', error);

    case ACTION_TYPES.TODO_TEXT_UPDATE_SUCCESS:
      return state.set('text', text).set('error', null);

    case ACTION_TYPES.TODO_DELETE_SUCCESS:
      index = state.get('list').findIndex((todo) => todo.get('id') === id);
      return state.update('list', list => list.delete(index)).set('error', null);
    case ACTION_TYPES.TODO_DELETE_FAILURE:
      return state.set('error', error);

    case ACTION_TYPES.TODO_DOWNLOAD_SUCCESS:
      return state.set('downloadDate', new Date().toString());
    case ACTION_TYPES.TODO_DOWNLOAD_FAILURE:
      return state.set('error', error);

    default: return state;
  }
}