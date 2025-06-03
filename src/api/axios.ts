import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
  },
  withCredentials: true,
});

export default api;
