function Login() {
  return (
    <div
      style={{
        width: "350px",
        margin: "100px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <h2>Employee Management System</h2>

      <input
        type="text"
        placeholder="Username"
        style={{ width: "90%", padding: "10px", marginBottom: "10px" }}
      />

      <input
        type="password"
        placeholder="Password"
        style={{ width: "90%", padding: "10px", marginBottom: "15px" }}
      />

      <button
        style={{
          width: "95%",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;