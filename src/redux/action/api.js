import axios from 'axios';

const API = axios.create({
  baseURL: 'https://servernode180520.herokuapp.com',
});

export default API;