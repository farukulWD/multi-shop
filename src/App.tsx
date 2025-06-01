import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

function App() {
  // const subdomain = window.location.hostname.split(".")[0];
  // const isMainApp = window.location.hostname === "localhost";
  return (
    <AuthProvider>
      <BrowserRouter />
      <Routes>
        <Route path="/" element={<div>Main App</div>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
