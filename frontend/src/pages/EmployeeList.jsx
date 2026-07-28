import { useContext, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

function EmployeeList() {
  const {
    employees,
    setEmployees,
    setEditingEmployee,
  } = useContext(EmployeeContext);

  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const deleteEmployee = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      setEmployees(employees.filter((emp) => emp.id !== id));
    }
  };

  const editEmployee = (emp) => {
    setEditingEmployee(emp);
    navigate("/add-employee");
  };

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ flex: 1, padding: "30px" }}>

          <h1>Employee List</h1>

          <input
            type="text"
            placeholder="Search Employee..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "300px",
              padding: "10px",
              marginBottom: "20px",
              borderRadius: "5px",
            }}
          />

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
            border="1"
            cellPadding="10"
          >
            <thead style={{ background: "#1976d2", color: "white" }}>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredEmployees.length > 0 ? (
                filteredEmployees.map((emp) => (
                  <tr key={emp.id}>
                    <td>{emp.id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.email}</td>
                    <td>{emp.department}</td>
                    <td>{emp.salary}</td>

                    <td>

                      <button
                        onClick={() => editEmployee(emp)}
                        style={{
                          background: "green",
                          color: "white",
                          border: "none",
                          padding: "8px 12px",
                          cursor: "pointer",
                          marginRight: "10px",
                          borderRadius: "5px",
                        }}
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => deleteEmployee(emp.id)}
                        style={{
                          background: "red",
                          color: "white",
                          border: "none",
                          padding: "8px 12px",
                          cursor: "pointer",
                          borderRadius: "5px",
                        }}
                      >
                        Delete
                      </button>

                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" style={{ textAlign: "center" }}>
                    No Employee Found
                  </td>
                </tr>
              )}
            </tbody>

          </table>

        </div>
      </div>
    </>
  );
}

export default EmployeeList;