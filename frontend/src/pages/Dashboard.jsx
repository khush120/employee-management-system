function Dashboard() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Dashboard</h1>

      <hr />

      <h3>Employee Management System</h3>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            border: "1px solid gray",
            padding: "20px",
            width: "180px",
            textAlign: "center",
            borderRadius: "10px",
          }}
        >
          <h2>10</h2>
          <p>Total Employees</p>
        </div>

        <div
          style={{
            border: "1px solid gray",
            padding: "20px",
            width: "180px",
            textAlign: "center",
            borderRadius: "10px",
          }}
        >
          <h2>3</h2>
          <p>Departments</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;