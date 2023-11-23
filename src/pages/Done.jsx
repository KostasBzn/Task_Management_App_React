import Navigation from "../components/Navigation";
import DoneList from "../components/DoneList";

function Done() {
  return (
    <>
      <Navigation />
      <h1>Tasks Done</h1>
      <section>
        <DoneList />
      </section>
    </>
  );
}

export default Done;
