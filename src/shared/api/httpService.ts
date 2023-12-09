import axios from 'axios';

const http = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

export default http;
