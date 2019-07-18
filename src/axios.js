import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://redmine.indeema.com'
});

export default axiosInstance;
