import api from './axios';

// Users API
export const loginUser = (credentials) => api.post('/api/users/login', credentials);
export const registerUser = (userData) => api.post('/api/users/register', userData);
export const logoutUser = () => api.post('/api/users/logout');

// Add other centralized API requests here as needed to avoid scattering axios/fetch calls
// export const getServices = () => api.get('/api/services');
// export const getShops = () => api.get('/api/shops');
