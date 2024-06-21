import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, completeTodo, removeTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
