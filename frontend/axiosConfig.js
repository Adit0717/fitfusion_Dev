// src/axiosConfig.js
import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // Base URL for all requests
  timeout: 10000, // Optional: Set a timeout for requests (in milliseconds)
  headers: {
    'Content-Type': 'application/json', // Default headers
  },
});

export default axiosInstance;
