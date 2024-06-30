// src/components/TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../redux/actions';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTask(id));
  };

  const handleEdit = (id) => {
    const updatedTask = prompt('Edit the task:', tasks.find(task => task.id === id).text);
    if (updatedTask !== null) {
      dispatch(editTask(id, updatedTask));
    }
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.text}
          <button onClick={() => handleToggle(task.id)}>Toggle</button>
          <button onClick={() => handleEdit(task.id)}>Edit</button>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;