import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const DoneButton = ({ taskId }) => {
  const { doneTask } = useContext(TaskContext);

  const handleDone = () => {
    doneTask(taskId);
  };

  return (
    <button onClick={handleDone} className="done_button buttons ">
      Done
    </button>
  );
};

export default DoneButton;
