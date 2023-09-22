import axios from 'axios';
const APIURL = 'https://taskma-b.onrender.com'
export const fetchTasks = (userId) => {
  return axios.get(`${APIURL}/tasks/user/${userId}`);
};

export const createTask = (task) => {
  return axios.post(`${APIURL}/tasks`, task);
};

export const updateTask = (id, task) => {
  return axios.patch(`${APIURL}/tasks/${id}`, task);
};

export const deleteTask = (id) => {
  return axios.delete(`${APIURL}/tasks/${id}`);
};
