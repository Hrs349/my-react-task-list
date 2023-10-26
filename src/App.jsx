import Header from "./components/Header";
import "./App.css";
//import { useState } from "react";
import TaskList from "./components/TaskList";
import Task from "./components/Task";

function App() {
  const LISTTASK = [
    {
      name: "Caminar",
      complete: false,
    },
    {
      name: "Trotar",
      complete: false,
    },
    {
      name: "Saltar",
      complete: false,
    },
    {
      name: "Sentadillas",
      complete: false,
    },
  ];
  return (
    <div>
    <div className="App">
      <Header />
      <TaskList lista={LISTTASK} />
    </div>
    </div>
  );
}

export default App;
