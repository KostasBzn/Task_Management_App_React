import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const EditForm = ({ task, onSave }) => {
  const { saveEditedTask } = useContext(TaskContext);
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleSave = () => {
    saveEditedTask(editedTask);
    onSave();
  };

  return (
    <>
      <div className="edit-form-container">
        <label>
          Title:
          <input
            placeholder="Task title"
            type="text"
            value={editedTask.title}
            onChange={(e) =>
              setEditedTask({ ...editedTask, title: e.target.value })
            }
          />
        </label>
        <label>
          Description:
          <textarea
            placeholder="Task description..."
            cols="30"
            rows="10"
            value={editedTask.description}
            onChange={(e) =>
              setEditedTask({ ...editedTask, description: e.target.value })
            }
          ></textarea>
        </label>
        <label>
          Priority:
          <select
            id="edit-priority"
            value={editedTask.priority}
            onChange={(e) =>
              setEditedTask({ ...editedTask, priority: e.target.value })
            }
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <div className="save-button">
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </>
  );
};

export default EditForm;
