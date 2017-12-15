import { initialState } from './selector';
import { ACTION_TYPES } from 'store/actions'

export default (state = initialState, { type, payload, meta }) => {
  switch(type) {

    case ACTION_TYPES.POSTS_READ_REQUEST:
      return {
        ...state,
        list: state.list || []
      };

    case ACTION_TYPES.POSTS_READ_SUCCESS:
      return {
        ...state,
        list: payload
      };

    default: return state;
  }
}