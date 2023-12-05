import axios from 'axios';

const http = axios.create({
  baseURL: 'https://swapi.dev/api/',
  // Дополнительные настройки (если нужны)
});

export default http;
