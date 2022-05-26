import Task from "./Task";
const Tasks = ({ tasks, onDelete, onToggel }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggel={onToggel} />
      ))}
    </div>
  );
};

export default Tasks

