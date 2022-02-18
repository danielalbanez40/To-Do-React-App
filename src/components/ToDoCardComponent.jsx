import React from "react";
import { Card, Button } from "react-bootstrap";

const ToDoCardComponent = () => {
  return (
    <>
      <Card style={{ width: "18rem" }} className="card col-md-2">
        <Card.Body className="card-body">
          <Card.Title style={{ fontSize: "30px" }}>Card Title</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            nobis quam quis enim maxime corrupti repellat recusandae impedit a
            quasi ipsa quia laudantium vitae minima facere, deleniti praesentium
            dolores provident!
          </Card.Text>

          <Button variant="outline-danger" style={{color:"#fafafa"}}>Eliminar</Button>

          <Button variant="outline-warning" style={{ marginLeft: "1rem", color:"#fafafa" }}>
            Editar
          </Button>
        </Card.Body>
      </Card>
           
    </>
  );
}

export default ToDoCardComponent;