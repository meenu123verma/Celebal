import React, { useState, useEffect } from 'react';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState('');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (e) => {
    setInputTask(e.target.value);
  };

  const handleAddTask = () => {
    if (inputTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: inputTask, completed: false }]);
      setInputTask('');
    }
  };

  const handleRemoveTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleToggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={inputTask}
        onChange={handleInputChange}
        placeholder="Enter a task..."
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTaskCompletion(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
