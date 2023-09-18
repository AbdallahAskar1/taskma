'use client'
import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import * as api from './api';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    api.fetchTasks()
      .then(response => setTasks(response.data))
      .catch(error => console.error("Error fetching tasks:", error));
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default TaskManager;
