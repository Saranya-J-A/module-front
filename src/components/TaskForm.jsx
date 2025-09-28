import { useState } from "react";

export default function TaskForm({ onSave }) {
  const [form, setForm] = useState({ title: "", description: "" });

  const submit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    onSave(form);
    setForm({ title: "", description: "" });
  };

  return (
    <form
      onSubmit={submit}
      className="bg-white p-4 rounded shadow-md mb-4"
    >
      <input
        type="text"
        placeholder="Task title"
        className="border p-2 w-full mb-2 rounded"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <textarea
        placeholder="Description"
        className="border p-2 w-full mb-2 rounded"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
        Add Task
      </button>
    </form>
  );
}
