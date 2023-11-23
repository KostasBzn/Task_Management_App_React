import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const { addTask, tasks } = useContext(TaskContext);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "low",
  });

  console.log("Tasks:", tasks);

  const idGenerator = () => {
    return Math.floor(Math.random() * 10000);
  };

  const handleAddTask = () => {
    if (newTask.title !== "" && newTask.description !== "") {
      addTask({ id: idGenerator(), status: "todo", ...newTask });

      setNewTask({ title: "", description: "", priority: "low" });
    }
  };

  return (
    <>
      <p className="form-title">Add a new task</p>
      <div className="form_component_container">
        <label>
          Title:
          <input
            className="task-title"
            placeholder="Task title"
            type="text"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
        </label>
        <label>
          Description:
          <textarea
            className="task-description"
            placeholder="Task description..."
            name=""
            id=""
            cols="30"
            rows="10"
            value={newTask.description}
            onChange={(e) =>
              setNewTask({ ...newTask, description: e.target.value })
            }
          ></textarea>
        </label>
        <label className="label-priority">
          Priority:
          <select
            className="task-priority"
            name="Select your priority"
            id=""
            value={newTask.priority}
            onChange={(e) =>
              setNewTask({ ...newTask, priority: e.target.value })
            }
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>

        <button onClick={handleAddTask} className="add_button">
          <i className="fa-solid fa-plus"></i> Add New Task
        </button>
      </div>
    </>
  );
}

export default TaskForm;
