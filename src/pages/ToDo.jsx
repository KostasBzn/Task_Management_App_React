import Navigation from "../components/Navigation";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function ToDo() {
  return (
    <>
      <Navigation />
      <div className="todo_page">
        <h1>Tasks</h1>
        <section className="tasks_container">
          <div className="task_form">
            <TaskForm />
          </div>
          <div className="task_list">
            <TaskList />
          </div>
        </section>
      </div>
    </>
  );
}

export default ToDo;
