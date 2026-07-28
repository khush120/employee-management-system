function AddEmployee() {
  return (
    <div style={{ padding: "30px" }}>
      <h2>Add Employee</h2>

      <input
        type="text"
        placeholder="Employee Name"
        style={{ width: "300px", padding: "10px", marginBottom: "10px" }}
      />

      <br />

      <input
        type="email"
        placeholder="Email"
        style={{ width: "300px", padding: "10px", marginBottom: "10px" }}
      />

      <br />

      <input
        type="text"
        placeholder="Department"
        style={{ width: "300px", padding: "10px", marginBottom: "10px" }}
      />

      <br />

      <button
        style={{
          padding: "10px 25px",
          cursor: "pointer",
        }}
      >
        Save Employee
      </button>
    </div>
  );
}

export default AddEmployee;