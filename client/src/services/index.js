import axios from 'axios';
import post from './post';

axios.defaults.baseURL = 'http://localhost:8001/api/v1.0/';
axios.defaults.timeout = 3000;

// function checkStatus(response) {
//   // TODO: 상태 체크 처리 해야함(htkim, 20171212)
//   return response;
// }

// function parse(response) {
//   return response.data;
// }

// function wrap(originFn) {
//   return () => {
//     console.log(arguments)
//     console.log(arguments)
//     return originFn(...arguments).then(checkStatus).then(parse);
//   };
// }

const api = { post }; // 리소스 추가시 여기에 추가

// for(let resource in api) {
//   for(let fn in api[resource]) {
//     let originFn = api[resource][fn];
//     // api[resource][fn] = originFn;
//   }
// }

export default api;


