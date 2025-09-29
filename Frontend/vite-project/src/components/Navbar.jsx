import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const linkClass = (id) =>
    activeSection === id
      ? "text-blue-600 font-semibold text-sm"
      : "text-black hover:font-semibold text-sm";

  const navLinks = [
    { id: "Dashboard", label: "Dashboard", path: "/users/Dashboard" },
    { id: "Pemasukan", label: "Pemasukan", path: "/users/Pemasukan" },
    { id: "Pengeluaran", label: "Pengeluaran", path: "/users/Pengeluaran" },
    { id: "Settings", label: "Settings", path: "/users/Settings" },
  ];

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
    <nav className="bg-white shadow-md p-4 relative">
      <div className="flex items-center justify-between">
        <div>
          <img src="/logo.svg" alt="Logo" className="w-32" />
        </div>

        <button
          className="sm:hidden text-gray-700 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          &#9776;
        </button>

        <div className="hidden sm:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className={linkClass(link.id)}
              onClick={() => setActiveSection(link.id)}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="text-red-600 font-semibold text-sm hover:underline"
          >
            Logout
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-48 bg-white shadow-lg flex flex-col p-6 gap-6 sm:hidden z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="self-end text-xl font-bold"
          onClick={() => setIsOpen(false)}
        >
          &times;
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.id}
            to={link.path}
            className={linkClass(link.id)}
            onClick={() => {
              setActiveSection(link.id);
              setIsOpen(false);
            }}
          >
            {link.label}
          </Link>
        ))}
        <button
          onClick={handleLogout}
          className="text-red-600 font-semibold text-sm hover:underline"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
