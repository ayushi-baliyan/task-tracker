import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, updateTask }) {
  return (
    <div>

      <h2>All Tasks</h2>

      {tasks.length === 0 ? (
        <p>No Tasks Found</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        ))
      )}

    </div>
  );
}

export default TaskList;