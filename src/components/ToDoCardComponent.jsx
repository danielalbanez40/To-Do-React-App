import { Card, Button, Badge, CloseButton} from "react-bootstrap";

const ToDoCardComponent = ({ todo, deleteToDo, editToDo }) => {
  const { id, titulo, descripcion, estado, prioridad } = todo;

  return (
    <>
      <Card
        style={{ width: "18rem" }}
        className="card col-md-2"
        id="Card"
        key={todo.id}
      >
        <Card.Body className="card-body">
          <section>
            <CloseButton
              className="close-button bg-light mb-3"
              onClick={() => deleteToDo(id)}
            />
            <span>
              <Badge bg="danger" className="me-2">
                {prioridad && "Prioritario"}
              </Badge>

              <Badge bg="info" className="me-2">
                {estado ? "Completado" : "Pendiente"}
              </Badge>
            </span>
          </section>
          <hr />
          <Card.Title style={{ fontSize: "30px" }} className="fw-bold">
            {titulo}
          </Card.Title>
          <hr />
          <Card.Text>{descripcion}</Card.Text>
          {/* <Button variant="outline-danger" style={{ color: "#fafafa" }}>
            Eliminar
          </Button> */}
          <Button
            variant="outline-warning"
            style={{ color: "#fafafa" }}
            onClick={() => editToDo(id)}
          >
            Cambiar Estado
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ToDoCardComponent;
