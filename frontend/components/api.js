import axios from 'axios';

export const fetchTasks = (userId) => {
  return axios.get(`http://localhost:3000/tasks/user/${userId}`);
};

export const createTask = (task) => {
  return axios.post('http://localhost:3000/tasks', task);
};

export const updateTask = (id, task) => {
  return axios.patch(`http://localhost:3000/tasks/${id}`, task);
};

export const deleteTask = (id) => {
  return axios.delete(`http://localhost:3000/tasks/${id}`);
};
