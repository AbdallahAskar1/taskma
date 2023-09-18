'use client'
import React, { useRef, useState } from 'react';
import * as api from './api';

const TaskItem = ({ task, setTasks }) => {
  const timerRef = useRef(null);
  const [localTimeSpent, setLocalTimeSpent] = useState(task.timeSpent);
  const [isRunning, setIsRunning] = useState(false);
  const [isActive,setIsActive]=useState(false)
const formatTime = (timeInSeconds) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const toggleTimer = () => {
  if (isRunning) {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setIsRunning(false);
    updateTask();
  } else {

    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setLocalTimeSpent((prevTime) => prevTime + 1);
      }, 1000);

      setIsRunning(true);
    }
  }
};

const updateTask = () => {
  const updatedTask = { ...task, timeSpent: localTimeSpent };

  api
    .updateTask(task.id, updatedTask)
    .then(() => {
      setTasks((prevTasks) => {
        return prevTasks.map((t) => {
          return t.id === task.id ? updatedTask : t;
        });
      });
    })
    .catch((error) => console.error("Error updating task:", error));
};

const handleDelete = () => {
  if (window.confirm('Are you sure you want to delete this task?')) {
    api
      .deleteTask(task.id)
      .then(() => {
        setTasks((prevTasks) => prevTasks.filter((t) => t.id !== task.id));
      })
      .catch((error) => {
        console.error("Error deleting task:", error);
      });
  }
};


  return (
    <li className="border p-4 rounded-lg mb-2 bg-white shadow">
      <div className="flex justify-between items-center">
        <div>
          <span className="text-lg font-semibold">{task.title}</span>
          <p className="text-sm text-gray-500">{task.description}</p>
        </div>
        <div className="text-gray-900 font-bold">{formatTime(localTimeSpent)}⏱️</div>


      </div>
      <button 
        className={`btn ${isRunning ? "btn-error" : "btn-primary"}`} 
        onClick={toggleTimer}>
        {isRunning ? "Stop" : "Start"}
      </button>
      <button className="btn btn-error ml-2" onClick={handleDelete}>
          Delete
        </button>
    </li>
  );
};

export default TaskItem;
