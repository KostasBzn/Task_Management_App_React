import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const EditButton = ({ taskId, setEditTaskId }) => {
  const { editTask } = useContext(TaskContext);

  const handleEdit = () => {
    editTask(taskId);
    setEditTaskId(taskId);
  };

  return (
    <button onClick={handleEdit} className="edit_button buttons ">
      Edit
    </button>
  );
};

export default EditButton;
