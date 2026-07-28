import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#1d1d26",
      }}
    >
      <div
        style={{
          border: "1px solid white",
          padding: "40px",
          borderRadius: "15px",
          width: "450px",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "white" }}>Employee Management System</h1>

        <input
          type="text"
          placeholder="Username"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "20px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "20px",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            marginTop: "25px",
            width: "100%",
            padding: "12px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;