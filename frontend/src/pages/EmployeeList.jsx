function EmployeeList() {
  const employees = [
    {
      id: 1,
      name: "Khushbu",
      department: "HR",
      email: "khushbu@gmail.com",
    },
    {
      id: 2,
      name: "Rahul",
      department: "IT",
      email: "rahul@gmail.com",
    },
  ];

  return (
    <div style={{ padding: "30px" }}>
      <h2>Employee List</h2>

      <table border="1" cellPadding="10" style={{ marginTop: "20px", width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;