import React, { createContext, useContext, useState } from "react";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [tasksInProgress, setTasksInProgress] = useState([]);
  const [tasksDone, setTasksDone] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const acceptTask = (taskId) => {
    const inProgress = tasks.find((task) => task.id === taskId);
    inProgress.status = "in progress";
    setTasksInProgress([...tasksInProgress, inProgress]);
    deleteTask(taskId);
  };

  const doneTask = (taskId) => {
    const done = tasksInProgress.find(
      (taskInProgress) => taskInProgress.id === taskId
    );
    done.status = "done";
    done.completedAt = new Date();
    setTasksDone([...tasksDone, done]);

    const updatedInProgress = tasksInProgress.filter(
      (taskInProgress) => taskInProgress.id !== taskId
    );
    setTasksInProgress(updatedInProgress);
  };

  const editTask = (taskId) => {
    setEditTaskId(taskId);
  };

  const saveEditedTask = (updatedtask) => {
    const updatedTasks = tasks.map((task) =>
      editTaskId === task.id ? { ...task, ...updatedtask } : task
    );
    setTasks(updatedTasks);
    setEditTaskId(null);
  };
  return (
    <TaskContext.Provider
      value={{
        tasks,
        tasksInProgress,
        tasksDone,
        editTaskId,
        addTask,
        deleteTask,
        acceptTask,
        doneTask,
        editTask,
        saveEditedTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
