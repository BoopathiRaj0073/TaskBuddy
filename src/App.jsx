import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import ProgressTracker from "./components/ProgressTracker";
import "./style.css";

function App() {
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Function to toggle task completion
  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <header className="bg-gray-900 py-6 px-4 shadow-md ">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <h1 className="text-4xl font-bold text-white">
          Task<span className="text-yellow-400">Buddy</span>
        </h1>
        <p className="text-gray-400 italic">
          Your friendly task manager 🚀
        </p>
      </div>
    </header>
      <TaskForm addTask={addTask} /> {/* Render TaskForm component */}
      <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
      <ProgressTracker tasks={tasks} /> {/*Render progressTracker component */}
    </div>
  );
}

export default App;
