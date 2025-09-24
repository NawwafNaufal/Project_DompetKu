import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    { id: "Logout", label: "Logout", path: "/users/Logout" },
  ];

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
            <button
              key={link.id}
              className={linkClass(link.id)}
              onClick={() => setActiveSection(link.id)}
            >
              {link.label}
            </button>
          ))}
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
          <button
            key={link.id}
            className={linkClass(link.id)}
            onClick={() => {
              setActiveSection(link.id);
              navigate(link.path);
            }}
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
