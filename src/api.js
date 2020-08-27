import axios from 'axios';

const API_URL = 'https://api.github.com/users';
const api = axios.create({ baseURL: API_URL });

export default api;
