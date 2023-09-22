import axios from 'axios';

export const fetchTasks = (userId) => {
  return axios.get(`https://cuddly-garbanzo-755r455qgg5cv69-3000.app.github.dev/tasks/user/${userId}`);
};

export const createTask = (task) => {
  return axios.post('https://cuddly-garbanzo-755r455qgg5cv69-3000.app.github.dev/tasks', task);
};

export const updateTask = (id, task) => {
  return axios.patch(`https://cuddly-garbanzo-755r455qgg5cv69-3000.app.github.dev/tasks/${id}`, task);
};

export const deleteTask = (id) => {
  return axios.delete(`https://cuddly-garbanzo-755r455qgg5cv69-3000.app.github.dev/tasks/${id}`);
};
