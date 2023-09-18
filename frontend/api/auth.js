// api/auth.js
import axios from 'axios';

const apiEndpoint = 'http://localhost:3000';

export const loginUser = async (formData) => {
  try {
    const response = await axios.post(`${apiEndpoint}/auth/login`, formData);
    console.log(response)
    return response.data.access_token;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (formData) => {
  try {
    const response = await axios.post(`${apiEndpoint}/users/register`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
