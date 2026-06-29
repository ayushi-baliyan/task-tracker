import { FaCheckCircle, FaEdit, FaTrash } from "react-icons/fa";

function TaskItem({ task, deleteTask, updateTask }) {
  return (
    <div className="task-card">

      <div className="task-top">

        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>

        <div
          className={
            task.status === "Completed"
              ? "status completed"
              : "status pending"
          }
        >
          <FaCheckCircle /> {task.status}
        </div>

      </div>

      <div className="task-buttons">

        <button
          className="edit-btn"
          onClick={() => updateTask(task._id)}
        >
          <FaEdit /> Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => deleteTask(task._id)}
        >
          <FaTrash /> Delete
        </button>

      </div>

    </div>
  );
}

export default TaskItem;