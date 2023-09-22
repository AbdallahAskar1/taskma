// api/auth.js
import axios from 'axios';

const apiEndpoint = 'https://cuddly-garbanzo-755r455qgg5cv69-3000.app.github.dev';

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
