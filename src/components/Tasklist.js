// src/components/TaskList.js
import React from 'react';
import { useSelector } from 'react-redux';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
