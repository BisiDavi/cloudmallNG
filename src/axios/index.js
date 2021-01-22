import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://cloudmallng.com/api/',
  headers: { 'Content-Type': 'application/json' }
});
