import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#1976d2",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>Employee Management System</h2>

      <div>
        <Link
          to="/dashboard"
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "20px",
          }}
        >
          Dashboard
        </Link>

        <Link
          to="/employees"
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "20px",
          }}
        >
          Employees
        </Link>

        <Link
          to="/add-employee"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Add Employee
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;