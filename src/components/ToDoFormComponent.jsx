import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";


const ToDoFormComponent = () => {

  const initialState = {
    titulo: "",
    descripcion:"",
    estado:"pendiente",
    prioridad: false
  }

  const [todo, setTodo] = useState(initialState);
  
  const {titulo, descripcion, estado, prioridad} = todo

  const handleChange = (e) => {
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h2 style={{ marginTop: "1rem" }}>Listado de Tareas</h2>

      <Form className="mt-3" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <label htmlFor="" style={{ marginBottom: "5px" }}>
            ¿Que necesitas hacer?
          </label>
          <Form.Control
            type="text"
            name="titulo"
            placeholder="Título"
            onChange={handleChange}
            value={titulo}
          />

          <Form.Control
            as="textarea"
            placeholder="Descripción"
            name="descripcion"
            style={{ height: "100px", marginTop: "8px" }}
            onChange={handleChange}
            value={descripcion}
          />

          <Form.Select
            aria-label="Floating label select example"
            className="mt-2"
            name="estado"
            value={estado}
            onChange={handleChange}
          >
            <option value="pendiente">Pendiente</option>
            <option value="completado">Realizado</option>
          </Form.Select>

          <Form.Check
            className="mt-2"
            name="prioritario"
            type="checkbox"
            id="chechboxform"
            label="Prioritario"
            checked={prioridad}
            onChange={handleChange}
          />
        </Form.Group>

        <Button
          variant="outline-primary"
          type="submit"
          style={{ marginBottom: "2rem", color: "#fff" }}
        >
          Añadir Tarea
        </Button>
      </Form>
    </>
  );
};

export default ToDoFormComponent;
