import React, { useState } from 'react';
import * as api from './api';

const TaskForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState({ 
    title: '',
    description: '' ,
    userId:'2',
    status:'CREATED'
  });
  const [error,setError] = useState([])

  const handleSubmit = () => {

    if (newTask.title.trim() === '') {
      setError('Task title cannot be empty');
      return; 
    }

    api.createTask(newTask)
      .then(response => {
        addTask(response.data);
        setNewTask({ title: '', description: '' });
      })
      .catch(error => console.error("Error creating task:", error));
  };

  return (
    <div className="mb-4">
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <input 
        className="border rounded-lg p-2 mr-2" 
        placeholder="Task Title" 
        value={newTask.title} 
        onChange={e => setNewTask({ ...newTask, title: e.target.value })} 
      />
      <input 
        className="border rounded-lg p-2 mr-2" 
        placeholder="Task Description" 
        value={newTask.description} 
        onChange={e => setNewTask({ ...newTask, description: e.target.value })} 
      />
      <select
        name="status"
        value={newTask.status}
        onChange={e=>setNewTask({...newTask,status:e.target.value}) 
      }
        className='select '
      >
        <option value="CREATED">Created</option>
        <option value="IN_PROGRESS">In Progress</option>
        <option value="COMPLETED">Completed</option>
      </select>

      <button className="btn bg-blue-500 text-white p-2" onClick={handleSubmit}>Add Task</button>
    </div>
  );
};

export default TaskForm;
