
import axios from 'axios';

const apiEndpoint = 'https://cuddly-garbanzo-755r455qgg5cv69-3000.app.github.dev';

export const createTask = async (taskData) => {
  try {
    const response = await axios.post(`${apiEndpoint}/tasks`, taskData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateTask = async (taskId, taskData) => {
  try {
    const response = await axios.put(`${apiEndpoint}/tasks/${taskId}`, taskData);
    return response.data;
  } catch (error) {
    throw error;
  }
};


