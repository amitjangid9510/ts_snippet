import axios from 'axios';
import type { AxiosInstance } from 'axios';

const BASE_URL = "http://localhost:3000/api/v1/";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
