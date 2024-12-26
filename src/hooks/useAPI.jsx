import axios from 'axios';

const API = axios.create({
    baseURL: 'https://luxeory-server.vercel.app/',
  });

export default API;
