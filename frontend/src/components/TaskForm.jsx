import { useState } from "react";
import { FaClipboardList, FaPlusCircle } from "react-icons/fa";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Please fill all fields");
      return;
    }

    addTask({
      title,
      description,
      status: "Pending",
    });

    setTitle("");
    setDescription("");
  };

  return (
    <div className="form-box">

      <h2 className="form-heading">
        <FaClipboardList /> Add New Task
      </h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="📝 Enter Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="📄 Enter Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">
          <FaPlusCircle /> Add Task
        </button>

      </form>

    </div>
  );
}

export default TaskForm;