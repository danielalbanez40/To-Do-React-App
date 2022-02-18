import React, { useState } from 'react';
import ToDoCardComponent from './ToDoCardComponent';
import ToDoFormComponent from './ToDoFormComponent';

const ToDoComponent = () => {
    const [todos, setTodos] = useState([]);

    const crearLista = (todo) => {
      console.log(todo);
      setTodos((old_value) => [...old_value, todo]);
    };
    
  return (
    <div className="components-container">
      <h1>ToDo-List React App</h1>

      <ToDoFormComponent crearLista={crearLista}/>  

      {todos.map((el) => (
        <ToDoCardComponent key={el.id} todo={el}/>
      ))}
    </div>
  );
};

export default ToDoComponent;