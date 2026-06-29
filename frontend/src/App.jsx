import { useEffect, useState } from "react";
import API from "./Services/api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

import bg from "./assets/background.jpg";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    try {
      await API.post("/tasks", task);
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (id) => {
    try {
      await API.put(`/tasks/${id}`, {
        status: "Completed",
      });
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="container">
        <h1>✨ Task Tracker</h1>

        <p className="subtitle">
          Organize your daily work efficiently
        </p>

        <TaskForm addTask={addTask} />

        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      </div>
    </div>
  );
}

export default App;