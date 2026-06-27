import axios from "axios";

// Create a centralized Axios instance
const api = axios.create({
  // Use Vite environment variables, fallback to local if undefined
  baseURL: import.meta.env.VITE_API_BASE_URL || "${import.meta.env.VITE_API_BASE_URL}",
  withCredentials: true, // Necessary if you use cookies for JWT
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    // You can attach tokens here if you store them in localStorage
    // const token = localStorage.getItem("token");
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Global Error Handling
    if (error.response) {
      // Handle 401 Unauthorized globally
      if (error.response.status === 401) {
        // e.g., trigger a logout or token refresh
        console.warn("Unauthorized! Redirecting to login...");
        // window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default api;
