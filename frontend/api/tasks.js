
import axios from 'axios';

const apiEndpoint = 'http://localhost:3000';

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


