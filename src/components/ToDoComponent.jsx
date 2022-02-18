import ToDoFormComponent from "./ToDoFormComponent";
import ToDoCardComponent from "./ToDoCardComponent";


const ToDoComponent = () => {

  return (
    <div className="components-container">
      <h1>ToDo-List React App</h1>
      <ToDoFormComponent />
      <ToDoCardComponent/>
    </div>
  );
};

export default ToDoComponent;
