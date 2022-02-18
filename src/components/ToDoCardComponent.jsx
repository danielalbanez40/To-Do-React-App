import { Card, Button } from "react-bootstrap";


const ToDoCardComponent = ({todo}) => {
  
  return (
    <>
    
      <Card
        style={{ width: "18rem" }}
        className="card col-md-2"
        id="Card"
        key={todo.id}
      >
        <Card.Body className="card-body">
          <Card.Title style={{ fontSize: "30px" }}>{todo.titulo}</Card.Title>
          <Card.Text>{todo.descripcion}</Card.Text>

          <Button variant="outline-danger" style={{ color: "#fafafa" }}>
            Eliminar
          </Button>

          <Button
            variant="outline-warning"
            style={{ marginLeft: "1rem", color: "#fafafa" }}
          >
            Editar
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ToDoCardComponent;
