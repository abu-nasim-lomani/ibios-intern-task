import React from "react";
import './App.css';
import ToDo from "./component/ToDo";
import ToDoList from "./component/ToDoList";


function App() {


  return (
    <div className="App">
      <header className="App">
        <h1>Md Abu Nasim</h1>
        <h3>React.js-Intern, Front-End</h3>
        <h2>Task 1</h2>
        <hr />
      </header>
      <ToDoList></ToDoList>
      <h2 className="mt-5 pt-5">Task 2</h2>
      <hr />
      <ToDo></ToDo>

    </div>
  );
}

export default App;
