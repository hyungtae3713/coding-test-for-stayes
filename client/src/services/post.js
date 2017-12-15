import axios from 'axios';

const api = {
  get: (id, params = { }) => {
    return axios.get(`/posts/${id}`, { params });
  },
  gets: (params = { }) => {
    return axios.get('/posts', { params });
  },
  update: () => { /* Not implemented. */ },
  findOne: () => { /* Not implemented. */ },
  find: () => { /* Not implemented. */ },
  delete: () => { /* Not implemented. */ }
};

export default api;