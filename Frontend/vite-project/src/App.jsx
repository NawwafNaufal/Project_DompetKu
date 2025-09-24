import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import Dashboard from "./pages/users/Dashboard.jsx";
import Settings from "./pages/users/Settings.jsx";

function App() {
  return (
    <Routes>
      {/* Auth */}
      <Route path="/auth">
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
      </Route>
      <Route path="/users">
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
