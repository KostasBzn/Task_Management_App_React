import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import DoneButton from "./DoneButton";

const InProgressList = () => {
  const { tasksInProgress } = useContext(TaskContext);

  return (
    <>
      <ul className="in-progress-ul">
        {tasksInProgress.map((taskInProgress, index) => (
          <li key={taskInProgress.id}>
            <h4>
              {index + 1}. {taskInProgress.title}
            </h4>
            <p>{taskInProgress.description}</p>
            <p>
              Priority: <strong>{taskInProgress.priority}</strong>
            </p>
            <div className="done-button-container">
              <DoneButton taskId={taskInProgress.id} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default InProgressList;
