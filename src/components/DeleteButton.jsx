import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const DeleteButton = ({ taskId }) => {
  const { deleteTask } = useContext(TaskContext);

  const handleDelete = () => {
    deleteTask(taskId);
  };

  return (
    <button onClick={handleDelete} className="delete_button buttons">
      Delete
    </button>
  );
};

export default DeleteButton;
