import axios from 'axios';

// Base URL of your backend API
const API_BASE_URL = 'https://journalbackend-hy4q.onrender.com';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000
});

// Add request interceptor for authorization headers
apiClient.interceptors.request.use(
  (config) => {
    // Get token from localStorage if it exists
    const token = localStorage.getItem('userToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// API service methods for different endpoints
const ApiService = {
  // Authentication methods
  login: (credentials) => {
    return apiClient.post('/auth/login', credentials);
  },
  
  // Generic post method for any endpoint
  post: async (url, data) => {
    const response = await apiClient.post(url, data);
    return response.data;
  },
  
  register: (userData) => {
    return apiClient.post('/auth/register', userData);
  },

  submitSubmission: (submissionData) => {
    return apiClient.post('/titlesubmission/submit', submissionData);
  },
  
  // User data methods
  getUserProfile: () => {
    return apiClient.get('/api/users/profile')
      .then(response => {
        if (!response.data) {
          throw new Error('No profile data received');
        }
        return response;
      })
      .catch(error => {
        if (error.response) {
          if (error.response.status === 401) {
            throw new Error('Authentication failed. Please login again.');
          } else if (error.response.status === 404) {
            throw new Error('User profile not found');
          }
        }
        throw error;
      });
  },
  
  updateUserProfile: (userData) => {
    return apiClient.put('/auth/update', userData);
  },
  
  // Data submission method
  submitData: (data) => {
    return apiClient.post('/data/submit', data);
  },
  
  // Get data method
  getData: (params) => {
    return apiClient.get('/data', { params });
  },
  
  // Form submission method using the specific endpoint
  submitForm: async (formData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/submit-form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      return response.json();
    } catch (error) {
      throw error;
    }
  },

  // Alternative using axios
  submitFormAxios: (formData) => {
    return apiClient.post('/submit-form', formData);
  },
  
  // Connection check
  isServerRunning: async () => {
    try {
      const response = await apiClient.get('/');
      
      // Check if we got a valid response
      if (response.data && response.data.message === 'Backend server is running') {
        return true;
      }
      
      return false;
    } catch (error) {
      if (error.code === 'ERR_NETWORK') {
        return false;
      }
      if (error.response) {
        return true;
      }
      return false;
    }
  }
};

export default ApiService; 