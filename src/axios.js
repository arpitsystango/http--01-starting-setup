import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

// debugger
instance.defaults.headers.common['Authorization'] = 'Hello World';
instance.interceptors.request.use(config => {
  // console.log(config);
  return config;
});

export default instance;