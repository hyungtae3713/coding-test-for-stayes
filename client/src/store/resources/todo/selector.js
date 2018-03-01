import { Map, List  } from 'immutable';

export const initialState = Map({ 
  list: List(), 
  text: '',
  downloadDate: '',
  error: null
});

// export const initialState = { list: [], text: '' };