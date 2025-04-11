import axios from 'axios';

// Base URL of your backend API
const API_BASE_URL = 'http://localhost:5000';

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
  
  register: (userData) => {
    return apiClient.post('/auth/register', userData);
  },

  submitSubmission: (submissionData) => {
    return apiClient.post('/submissionsRoutes/submit', submissionData);
  },
  
  // User data methods
  getUserProfile: () => {
    return apiClient.get('/api/users/profile')
      .then(response => {
     //   console.log('Full API Response:', response);
       // console.log('Profile Data:', response.data);
        if (!response.data) {
          throw new Error('No profile data received');
        }
        return response;
      })
      .catch(error => {
       // console.error('Error fetching user profile:', error);
        if (error.response) {
         // console.error('Error response data:', error.response.data);
         // console.error('Error response status:', error.response.status);
          // Handle specific HTTP errors
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
  
  // Test connection method
  testConnection: async () => {
    try {
      const response = await apiClient.get('/health');
      return response.data;
    } catch (error) {
      if (error.code === 'ERR_NETWORK') {
     //   console.error('Network error: Server is not running or not accessible');
        throw new Error('Server is not running or not accessible');
      }
      throw error;
    }
  },
  
  // Custom API methods can be added here as needed
  checkHealth: async () => {
    try {
      // Try to connect to the root endpoint instead of /api/health
      // This just checks if the server is running at all
      const response = await apiClient.get('/');
    //  console.log('Backend connection successful:', response.status);
      return true;
    } catch (error) {
      // Check if it's a network error (server not running)
      if (error.code === 'ERR_NETWORK') {
    //    console.error('Backend server is not running or not accessible');
      } else {
     //    console.error('Backend health check failed:', error);
      }
      return false;
    }
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
     //  console.error('Error submitting form:', error);
      throw error;
    }
  },

  // Alternative using axios
  submitFormAxios: (formData) => {
    return apiClient.post('/submit-form', formData);
  },
  
  // Simple connection check
  isServerRunning: async () => {
    try {
      //console.log('Attempting to connect to backend at:', API_BASE_URL);
      const response = await apiClient.get('/');
    //  console.log('Backend response:', response.data);
      
      // Check if we got a valid response
      if (response.data && response.data.message === 'Backend server is running') {
      //  console.log('Backend connection successful');
        return true;
      }
      
     // console.log('Backend responded but with unexpected data format');
      return false;
    } catch (error) {
      if (error.code === 'ERR_NETWORK') {
       // console.log('Backend is currently down or paused');
        return false;
      }
      if (error.response) {
      //  console.log('Backend is running but returned an error:', error.response.status);
        return true;
      }
     // console.log('Backend connection check failed');
      return false;
    }
  }
};

export default ApiService; 