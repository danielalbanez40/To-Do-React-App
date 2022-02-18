import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const ToDoFormComponent = ({crearLista}) => {

  //Defino el valor inicial de los elementos del formulario segun su atributo name
  const initialState = {
    titulo: "",
    descripcion: "",
    estado: "pendiente",
    prioridad: false,
  };

  //creo un usesState con el estado inicial
  const [todo, setTodo] = useState(initialState);

  //Destructuro variable de estado todo
  const { titulo, descripcion, estado, prioridad } = todo;

  //Creo el manejador de eventos de formularios
  const handleChange = (e) => {
    //desestructuro los atributos de los elementos del formulario
    const { name, value, checked, type } = e.target;

    //Trae todo el contenido del objeto inicial y compara el valor del checkbox
    setTodo((old_value) => ({
      ...old_value,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  //Creo el manejador para enviar formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    //comprueba si viene vacio el campo Titulo y posiciona el foco en el campo correspondiente
    if (!titulo.trim()) {
      e.target[0].focus(); //Posiciona el foco en el input del Título
      Swal.fire({
        title: "Se produjo un Error!",
        text: "Debes completar todos los campos para crear tu tarea",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    //comprueba si viene vacio el campo descripcion y posiciona el foco en el campo correspondiente
    if (!descripcion.trim()) {
      e.target[1].focus(); //Posiciona el foco en el input del Título
      Swal.fire({
        title: "Se produjo un Error!",
        text: "Debes completar todos los campos para crear tu tarea",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    Swal.fire({
      title: "Bien hecho!",
      text: "Tu tarea fue creada con éxito!!",
      icon: "success",
      confirmButtonText: "Aceptar",
    });

    crearLista({
      titulo,
      descripcion,
      estado: estado === 'pendiente' ? false : true,
      prioridad,
      id: Date.now()
    });

    setTodo(initialState);

  };


  return (
    <>
      

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
            <option value="completado">Completado</option>
          </Form.Select>

          <Form.Check
            className="mt-2"
            name="prioridad"
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
      <h3 style={{ marginTop: "1rem" }}>Listado de Tareas:</h3>
    </>
  );
};

export default ToDoFormComponent;
