import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav className="navigation_bar">
        <ul>
          {/*  <li>
            <Link to={"/homepage"}>HOME</Link>
          </li> */}
          <li>
            <Link to={"/todo"}>TO DO</Link>
          </li>
          <li>
            <Link to={"/in-progress"}>IN PROGRESS</Link>
          </li>
          <li>
            <Link to={"/done"}>DONE</Link>
          </li>
          <li>
            <Link to={"/contact-us"}>CONTACT US</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
