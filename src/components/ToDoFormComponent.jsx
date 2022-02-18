import React from 'react';
import {Form,Button} from "react-bootstrap";


export default function ToDoFormComponent () {
    return (
      <>
        <h2 style={{marginTop:"1rem"}}>Listado de Tareas</h2>

        <Form className='mt-3'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="ToDo" />
          </Form.Group>

          <Button variant="outline-primary" type="submit" style={{marginBottom:"2rem", color:"#fff"}}>
            Añadir Tarea
          </Button>
        </Form>
      </>
    );
}