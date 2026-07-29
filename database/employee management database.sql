import { useContext, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function EmployeeList() {
  const { employees, deleteEmployee, setEditingEmployee } =
    useContext(EmployeeContext);

  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.email.toLowerCase().includes(search.toLowerCase()) ||
      emp.department.toLowerCase().includes(search.toLowerCase())
  );

  const editEmployee = (emp) => {
    setEditingEmployee(emp);
    navigate("/add-employee");
  };

  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ flex: 1, padding: "30px" }}>
          <h1>Employee List</h1>

          <input
            type="text"
            placeholder="🔍 Search Employee..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "350px",
              padding: "12px",
              marginBottom: "20px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
              fontSize: "16px",
            }}
          />

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              background: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <thead
              style={{
                background: "#1976d2",
                color: "white",
              }}
            >
              <tr>
                <th style={{ padding: "15px" }}>S.No</th>
                <th style={{ padding: "15px" }}>Employee ID</th>
                <th style={{ padding: "15px" }}>Name</th>
                <th style={{ padding: "15px" }}>Email</th>
                <th style={{ padding: "15px" }}>Department</th>
                <th style={{ padding: "15px" }}>Salary</th>
                <th style={{ padding: "15px" }}>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredEmployees.map((emp, index) => (
                <tr
                  key={emp.id}
                  style={{
                    textAlign: "center",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  <td>{index + 1}</td>

                  <td>EMP{String(emp.id).padStart(3, "0")}</td>

                  <td>{emp.name}</td>

                  <td>{emp.email}</td>

                  <td>{emp.department}</td>

                  <td>₹ {emp.salary}</td>

                  <td>
                    <button
                      onClick={() => editEmployee(emp)}
                      style={{
                        background: "#1976d2",
                        color: "white",
                        border: "none",
                        padding: "8px 15px",
                        marginRight: "10px",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteEmployee(emp.id)}
                      style={{
                        background: "#d32f2f",
                        color: "white",
                        border: "none",
                        padding: "8px 15px",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default EmployeeList;