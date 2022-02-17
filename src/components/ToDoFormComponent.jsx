import React from 'react';
import {Form,Button} from "react-bootstrap";


export default function ToDoFormComponent () {
    return (
      <>
        <h2>Listado de Tareas</h2>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="ToDo" />
          </Form.Group>

          <Button variant="outline-primary" type="submit">
            Añadir Tarea
          </Button>
        </Form>
      </>
    );
}