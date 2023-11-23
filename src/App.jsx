import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ToDo from "./pages/ToDo";
import InProgress from "./pages/InProgress";
import Done from "./pages/Done";
import ContactUs from "./pages/ContactUs";
import TaskProvider from "./context/TaskContext";

function App() {
  return (
    <TaskProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/in-progress" element={<InProgress />} />
          <Route path="/done" element={<Done />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </HashRouter>
    </TaskProvider>
  );
}

export default App;
