import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("todo"); // 'todo' | 'completed'
  const [editId, setEditId] = useState(null);

  const addTask = () => {
    if (!input.trim()) return;
    if (editId !== null) {
      setTasks(tasks.map(t => t.id === editId ? { ...t, text: input } : t));
      setEditId(null);
    } else {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    }
    setInput("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const startEdit = (task) => {
    setInput(task.text);
    setEditId(task.id);
  };

  const filteredTasks = tasks
    .filter(t =>
      t.text.toLowerCase().includes(search.toLowerCase())
    )
    .filter(t => (activeTab === "todo" ? !t.completed : t.completed));

  return (
    <div className="container">
      <h1>Next.js To-Do App</h1>

      <input
        className="search"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="tabs">
        <button
          className={activeTab === "todo" ? "active" : ""}
          onClick={() => setActiveTab("todo")}
        >
          To-Do
        </button>
        <button
          className={activeTab === "completed" ? "active" : ""}
          onClick={() => setActiveTab("completed")}
        >
          Completed
        </button>
      </div>

      <div className="inputRow">
        <input
          className="taskInput"
          placeholder="Add or edit task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTask}>{editId ? "Update" : "Add"}</button>
      </div>

      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id} className={task.completed ? "done" : ""}>
            <span onClick={() => toggleComplete(task.id)}>
              {task.text}
            </span>
            <div className="actions">
              <button onClick={() => startEdit(task)}>✏️</button>
              <button onClick={() => deleteTask(task.id)}>🗑️</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}