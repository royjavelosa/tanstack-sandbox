import axios from 'axios';

// Create an Axios instance for reuse
const apiClient = axios.create({
  baseURL: '/',  // Base URL for all requests (points to the root of your public folder)
  timeout: 5000, // Optional: Set request timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to get data from data.json
export const getData = () => {
  return apiClient.get('/data.json');  // Fetch data from the public directory
};
