import ToDoFormComponent from "./components/ToDoFormComponent";
import ToDoCardComponent from "./components/ToDoCardComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="components-container">
      <h1>ToDo-List React App</h1>
      <ToDoFormComponent />
      <ToDoCardComponent />
    </div>
  );
}

export default App;
