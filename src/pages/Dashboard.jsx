import { useState, useEffect } from "react";
import api from "../api/api";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  const addTask = async (task) => {
    const res = await api.post("/tasks", task);
    setTasks([res.data, ...tasks]);
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    setTasks(tasks.filter((t) => t._id !== id));
  };

  const updateTask = async (task) => {
    const updated = prompt("Update title:", task.title);
    if (updated) {
      const res = await api.put(`/tasks/${task._id}`, { title: updated });
      setTasks(tasks.map((t) => (t._id === task._id ? res.data : t)));
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Tasks</h1>
      <TaskForm onSave={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onUpdate={updateTask} />
    </div>
  );
}
