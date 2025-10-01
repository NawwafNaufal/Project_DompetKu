import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:3000/auth/logout",
        {},
        { withCredentials: true }
      );

      localStorage.removeItem("token");

      alert("Logout berhasil!");
      navigate("/auth/login");
    } catch (error) {
      console.error("Logout gagal:", error);
      alert("Logout gagal, coba lagi.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-semibold mb-4">Logout</h1>
      <button
        onClick={handleLogout}
        className="px-6 py-3 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
