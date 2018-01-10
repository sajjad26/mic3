import axios from 'axios';

const baseURL = 'https://swapi.co/api/';

const instance = axios.create({
  baseURL: baseURL
});

export default instance;