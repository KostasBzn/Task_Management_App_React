import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const AcceptButton = ({ taskId }) => {
  const { acceptTask } = useContext(TaskContext);

  const handleAccept = () => {
    acceptTask(taskId);
  };

  return (
    <button onClick={handleAccept} className="accept_button buttons ">
      Accept
    </button>
  );
};

export default AcceptButton;
