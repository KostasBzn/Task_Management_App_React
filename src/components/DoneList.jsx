import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const DoneList = () => {
  const { tasksDone } = useContext(TaskContext);

  return (
    <>
      <ul className="done-ul">
        {tasksDone.map((taskDone, index) => (
          <li key={taskDone.id}>
            <h4>
              {index + 1}. {taskDone.title}
            </h4>
            <p>{taskDone.description}</p>
            <p>
              Priority: <strong>{taskDone.priority}</strong>
            </p>
            <p>
              Completed at:{" "}
              <strong>{`${taskDone.completedAt}`.slice(0, 25)}</strong>
            </p>
            <div className="done-logo">
              <p>
                Done <i className="fa-solid fa-check"></i>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DoneList;
