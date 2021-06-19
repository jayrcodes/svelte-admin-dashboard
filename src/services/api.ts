import axios from 'axios'
import { API_URL } from '../config';

const api = axios.create({
    baseURL: API_URL,
    timeout: 20000,
    headers: {'X-Custom-Header': 'foobar'}
  });

export default api 
