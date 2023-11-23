import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/in-progress" element={<InProgress />} />
          <Route path="/done" element={<Done />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </TaskProvider>
  );
}

export default App;
