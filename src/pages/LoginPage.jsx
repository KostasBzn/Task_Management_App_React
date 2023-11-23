import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppDescription from "../components/AppDescription";

function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === "kostas" && password === "1234") {
      setButtonEnabled(true);
      navigate("/todo");
    } else {
      setError("Your username or password is not correct");
    }
  };

  return (
    <>
      <AppDescription />
      <div className="login_div">
        <h1>Login</h1>
        <form className="login_form" onSubmit={handleSubmit}>
          <label>
            <input
              placeholder="Usename"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
          <label>
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            type="submit"
            className={buttonEnabled ? "enabled" : "login_form button:hover"}
          >
            Login
          </button>
        </form>
        <p className="login_error">{error !== "" ? error : null}</p>
      </div>
    </>
  );
}

export default LoginPage;
