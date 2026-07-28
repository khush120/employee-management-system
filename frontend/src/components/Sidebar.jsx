import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "230px",
        minHeight: "100vh",
        background: "#263238",
        color: "white",
        padding: "20px",
      }}
    >
      <h2>Menu</h2>

      <hr />

      <p>
        <Link
          to="/dashboard"
          style={{ color: "white", textDecoration: "none" }}
        >
          📊 Dashboard
        </Link>
      </p>

      <p>
        <Link
          to="/employees"
          style={{ color: "white", textDecoration: "none" }}
        >
          👨‍💼 Employees
        </Link>
      </p>

      <p>
        <Link
          to="/add-employee"
          style={{ color: "white", textDecoration: "none" }}
        >
          ➕ Add Employee
        </Link>
      </p>
    </div>
  );
}

export default Sidebar;