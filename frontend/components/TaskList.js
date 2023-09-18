import React from 'react';
import TaskItem from './Task';

const TaskList = ({ tasks, setTasks }) => {
  return (
    <ul className="space-y-2">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} setTasks={setTasks} tasks={tasks} />
      ))}
    </ul>
  );
};

export default TaskList;
