import { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

function AddEmployee() {
  const {
    employees,
    setEmployees,
    editingEmployee,
    setEditingEmployee,
  } = useContext(EmployeeContext);

  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    department: "",
    salary: "",
  });

  useEffect(() => {
    if (editingEmployee) {
      setEmployee(editingEmployee);
    }
  }, [editingEmployee]);

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingEmployee) {
      const updatedEmployees = employees.map((emp) =>
        emp.id === editingEmployee.id ? employee : emp
      );

      setEmployees(updatedEmployees);
      setEditingEmployee(null);

      alert("Employee Updated Successfully!");
    } else {
      const newEmployee = {
        id: employees.length + 1,
        ...employee,
      };

      setEmployees([...employees, newEmployee]);

      alert("Employee Added Successfully!");
    }

    setEmployee({
      name: "",
      email: "",
      department: "",
      salary: "",
    });

    navigate("/employees");
  };

  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ flex: 1, padding: "30px" }}>
          <h1>
            {editingEmployee ? "Edit Employee" : "Add Employee"}
          </h1>

          <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>

            <input
              type="text"
              name="name"
              placeholder="Employee Name"
              value={employee.name}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
              }}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={employee.email}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
              }}
            />

            <input
              type="text"
              name="department"
              placeholder="Department"
              value={employee.department}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
              }}
            />

            <input
              type="number"
              name="salary"
              placeholder="Salary"
              value={employee.salary}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
              }}
            />

            <button
              type="submit"
              style={{
                padding: "12px 20px",
                background: "#1976d2",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              {editingEmployee ? "Update Employee" : "Add Employee"}
            </button>

          </form>
        </div>
      </div>
    </>
  );
}

export default AddEmployee;