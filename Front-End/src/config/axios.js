import axios from "axios";

// Create a centralized Axios instance
const api = axios.create({
  // Use Vite environment variables, fallback to local if undefined
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000",
  withCredentials: true, // Necessary if you use cookies for JWT
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    // Add debugging log to identify what triggers API requests
    console.log(`[Axios Debug] Request sent to: ${config.url} at ${new Date().toISOString()}`);
    
    // Attach access token from localStorage
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
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
  async (error) => {
    const originalRequest = error.config;
    
    // If error is 401 and we haven't retried yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        // Attempt to refresh token using secure cookie
        const res = await axios.post(`${api.defaults.baseURL}/api/users/refresh`, {}, { withCredentials: true });
        
        if (res.data.token) {
          // Save new token
          localStorage.setItem("token", res.data.token);
          // Update header and retry original request
          originalRequest.headers.Authorization = `Bearer ${res.data.token}`;
          return api(originalRequest);
        }
      } catch (refreshError) {
        console.warn("Session expired! Redirecting to login...");
        // Clear local storage and redirect to login
        localStorage.removeItem("token");
        // window.location.href = "/login"; // Uncomment to enable forced redirect
      }
    }
    return Promise.reject(error);
  }
);

export default api;
