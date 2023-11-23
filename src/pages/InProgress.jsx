import InProgressList from "../components/InProgressList";
import Navigation from "../components/Navigation";

function InProgress() {
  return (
    <>
      <Navigation />
      <h1>Tasks in progress</h1>
      <section className="in-progress.container">
        <InProgressList />
      </section>
    </>
  );
}

export default InProgress;
