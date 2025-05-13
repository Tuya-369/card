import Filter from "@/component/Filter";
import TaskForm from "@/component/Fro";
import { Task } from "@/component/Tas";
import React, { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true;
  });

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>To-Do List</h1>
      <TaskForm addTask={addTask} />
      <Filter filter={filter} setFilter={setFilter} />
      {filteredTasks.length === 0 ? (
        <p style={styles.empty}>No tasks yet. Add one above!</p>
      ) : (
        filteredTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        ))
      )}
      <p style={styles.footer}>
        Powered by <a href="#">Pinecone academy</a>
      </p>
    </div>
  );
}

const styles = {
  container: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    maxWidth: "400px",
    margin: "50px auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  empty: {
    color: "#6b7280",
    marginTop: "20px",
  },
  footer: {
    color: "#6b7280",
    fontSize: "14px",
    marginTop: "20px",
  },
};
