import axios from 'axios';

function download(filename, data) {
  const blob = new Blob([data], {type: 'application/octet-stream'});
  const blobURL = window.URL.createObjectURL(blob);
  const tempLink = document.createElement('a');

  tempLink.style.display = 'none';
  tempLink.href = blobURL;
  tempLink.setAttribute('download', filename); 
  tempLink.setAttribute('target', '_blank');
  
  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink);
  window.URL.revokeObjectURL(blobURL);
}

const api = {
  
  create: (todo) => {
    return axios.post('todos', todo);
  },
  get: (id, params = { }) => {
    return axios.get(`/todos/${id}`, { params });
  },
  gets: (params = { }) => {
    return axios.get('/todos', { params });
  },
  delete: (id) => {
    return axios.delete(`/todos/${id}`);
  },
  update: (todo) => { 
    return axios.put('todos', todo);
  },
  download: (params = { }) => {
    return axios.get('/todos/download', { 
      params, 
      responseType: 'blob'
    }).then((response) => {
      download(params.filename, response.data);
      return response;
    });
  }
};

export default api;