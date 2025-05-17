import axios from 'axios';

// Create axios instance with base URL
const API = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include auth token
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth services
export const authAPI = {
  login: (email, password) => API.post('/users/login', { email, password }),
  register: (userData) => API.post('/users', userData),
  getCurrentUser: () => API.get('/users/profile'),
};

// User services
export const userAPI = {
  getUsers: () => API.get('/users'),
  getUserById: (id) => API.get(`/users/${id}`),
};

export default API; 