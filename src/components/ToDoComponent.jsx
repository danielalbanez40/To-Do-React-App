import React, { useState } from "react";
import ToDoCardComponent from "./ToDoCardComponent";
import ToDoFormComponent from "./ToDoFormComponent";

const ToDoComponent = () => {
  const [todos, setTodos] = useState([]);

  const crearLista = (todo) => {
    console.log(todo);
    setTodos((old_value) => [...old_value, todo]);
  };

  const editToDo = (id) => {
    const editarToDos = todos.map(el => (
      el.id === id ? { ...el, estado: !el.estado } : el
    ));
    setTodos(editarToDos);
  };

  const deleteToDo = (id) => {
    setTodos((old_value) => old_value.filter((el) => el.id !== id));
  };

  return (
    <div className="components-container">
      <h1>ToDo-List React App</h1>

      <ToDoFormComponent crearLista={crearLista} />
    <div className="contenedor">

      {todos.map((el) => (
        <ToDoCardComponent
          key={el.id}
          todo={el}
          deleteToDo={deleteToDo}
          editToDo={editToDo}
        />
      ))}
    </div>
    </div>
  );
};

export default ToDoComponent;
