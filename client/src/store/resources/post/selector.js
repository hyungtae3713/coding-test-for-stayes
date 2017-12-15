export const initialState = { };

// export const initialPostState = {
//   list: [],
//   detail: null
// };

// export const getPostState = (state = initialState, post) => 
//   state[post] || initialPostState;

// export const getList = (state = initialState, post) =>
//   getPostState(state, post).list;

// export const getDetail = (state = initialState, post) =>
//   getPostState(state, post).detail;

export const getPosts = (state = initialState) => {
  return state.post.list
}