import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import DeleteButton from "./DeleteButton";
import AcceptButton from "./AcceptButton";
import EditButton from "./EditButton";
import EditForm from "./EditForm";

function TaskList() {
  const { tasks } = useContext(TaskContext);
  const [editTaskId, setEditTaskId] = useState(null);

  const handleSave = () => {
    setEditTaskId(null);
  };

  return (
    <>
      <p className="form-title">Your tasks</p>
      <ul>
        {tasks.map((task, index) => (
          <li key={task.id} className="task_li ">
            {editTaskId === task.id ? (
              <EditForm task={task} onSave={handleSave} />
            ) : (
              <>
                <h4>
                  {index + 1}. {task.title}
                </h4>
                <p>{task.description}</p>
                <p>
                  Priority: <strong>{task.priority}</strong>
                </p>
                <div className="buttons-container">
                  <EditButton taskId={task.id} setEditTaskId={setEditTaskId} />
                  <AcceptButton taskId={task.id} />
                  <DeleteButton taskId={task.id} />
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default TaskList;
