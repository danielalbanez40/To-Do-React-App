import React from "react";
import { Card, Button, Row, Col} from "react-bootstrap";

export default function ToDoComponent() {
  return (
    <>
        <Card style={{ width: "18rem" }} className="card col-md-2">
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque nobis quam quis enim maxime corrupti repellat
              recusandae impedit a quasi ipsa quia laudantium vitae minima
              facere, deleniti praesentium dolores provident!
            </Card.Text>
            <Row>
                <Col sm={4}>
                    <Button variant="outline-danger">Eliminar</Button>
                </Col>
                <Col sm={4}>
                    <Button variant="outline-warning">Editar</Button>
                </Col>
            </Row>
          </Card.Body>
        </Card>
    </>
  );
}
