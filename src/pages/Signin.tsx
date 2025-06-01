import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Signin() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");
    try {
      await api.post("/auth/signin", form);
      await api.get("/auth/profile").then((res) => setUser(res.data));
      navigate("/");
    } catch (err) {
      if (err && typeof err === "object" && "response" in err && err.response && typeof err.response === "object" && "data" in err.response && err.response.data && typeof err.response.data === "object" && "message" in err.response.data) {
        setError((err.response as any).data.message);
      } else {
        setError("Signin failed");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded">
      <h2 className="text-2xl font-bold mb-4">Signin</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          required
          className="input"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="input"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <label className="flex items-center mt-2">
          <input
            type="checkbox"
            onChange={(e) => setForm({ ...form, rememberMe: e.target.checked })}
          />
          <span className="ml-2">Remember Me</span>
        </label>
        <button type="submit" className="btn mt-4">
          Signin
        </button>
      </form>
    </div>
  );
}
