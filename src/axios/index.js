import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://cloudmallng.com/api',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept'
  }
});
