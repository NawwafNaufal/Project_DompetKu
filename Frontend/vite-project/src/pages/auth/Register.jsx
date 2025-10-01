import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password dan konfirmasi password tidak sesuai");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/auth/sign-up", {
        username,
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      alert("Register berhasil");
      navigate("/auth/login");
    } catch (error) {
      alert("Register gagal, coba lagi");
      console.error(error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <div className="w-full max-w-md flex flex-col items-center rounded-lg sm:border-2 sm:border-blue-600 p-10 sm:shadow-lg gap-6">
        <img src="/logo.svg" alt="Logo" className="w-64" />
        <h1 className="mx-4">Aplikasi Manajemen Keuangan</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center gap-4"
        >
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="username"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="password"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="konfirmasi password"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition duration-200"
          >
            Register
          </button>
        </form>

        <div className="flex">
          <p className="text-sm text-gray-500">Sudah punya akun?</p>
          <a
            href="/auth/login"
            className="text-sm text-blue-600 hover:underline"
          >
            Masuk
          </a>
        </div>
      </div>
    </main>
  );
};

export default Register;
