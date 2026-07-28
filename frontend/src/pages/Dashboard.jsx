import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

function Dashboard() {
  const { employees } = useContext(EmployeeContext);

  const departments = [...new Set(employees.map((e) => e.department))];

  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ flex: 1, padding: "30px" }}>
          <h1>Dashboard</h1>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "30px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                background: "#1976d2",
                color: "white",
                padding: "25px",
                borderRadius: "10px",
                width: "220px",
              }}
            >
              <h2>{employees.length}</h2>
              <p>Total Employees</p>
            </div>

            <div
              style={{
                background: "#388e3c",
                color: "white",
                padding: "25px",
                borderRadius: "10px",
                width: "220px",
              }}
            >
              <h2>{departments.length}</h2>
              <p>Departments</p>
            </div>

            <div
              style={{
                background: "#f57c00",
                color: "white",
                padding: "25px",
                borderRadius: "10px",
                width: "220px",
              }}
            >
              <h2>Active</h2>
              <p>Employee Status</p>
            </div>

            <div
              style={{
                background: "#7b1fa2",
                color: "white",
                padding: "25px",
                borderRadius: "10px",
                width: "220px",
              }}
            >
              <h2>React</h2>
              <p>Frontend Module</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;